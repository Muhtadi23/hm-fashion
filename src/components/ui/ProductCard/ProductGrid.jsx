// components/ui/ProductCard/ProductGrid.jsx
'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { Star, Heart } from 'lucide-react';
import AddToCartButton from '../AddToCartButton/AddToCartButton';
import DiscountSaleBadge from '../DiscountSaleBadge/DiscountSaleBadge';
import { getProducts } from '@/Utils/API/product';

const ProductGrid = ({
    title,
    category,        // e.g., "Women", "Kids", "Men"
    limit = 8,
    showTitle = true
}) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setLoading(true);
                const result = await getProducts();

                if (result?.success && result.data?.data) {
                    let filtered = result.data.data;

                    // Filter by category if provided
                    if (category) {
                        filtered = filtered.filter((p) =>
                            (p.category && p.category.toLowerCase() === category.toLowerCase()) ||
                            (p.name && p.name.toLowerCase().includes(category.toLowerCase()))
                        );
                    }

                    // Apply limit
                    filtered = filtered.slice(0, limit);

                    setProducts(filtered);
                }
            } catch (error) {
                console.error("Error fetching products:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, [category, limit]);

    if (loading) {
        return (
            <div className="text-center py-10 text-gray-500">
                Loading {title || 'products'}...
            </div>
        );
    }

    if (products.length === 0) {
        return null; // or return a message if you want
    }

    return (
        <div className="w-full">
            {showTitle && title && (
                <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">
                    {title}
                </h2>
            )}

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 px-4">
                {products.map((product) => {
                    const mainImage = product.featureImage || '/placeholder.jpg';
                    const hoverImage = product.productImages?.[0]?.imageUrl || mainImage;
                    const hasDiscount = product.discountPrice && product.discountPrice < product.price;
                    const discountPercent = hasDiscount
                        ? Math.round(((product.price - product.discountPrice) / product.price) * 100)
                        : 0;

                    return (
                        <div key={product._id} className="group relative">
                            <div className="relative rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-500 hover:-translate-y-2">

                                {/* Wishlist */}
                                <button className="absolute top-3 right-3 z-10 w-10 h-10 bg-white/90 backdrop-blur rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                                    <Heart className="w-5 h-5 text-gray-600 hover:fill-red-500 hover:text-red-500" />
                                </button>

                                {/* Sale Badge */}
                                {hasDiscount && <DiscountSaleBadge discount={discountPercent} />}

                                {/* Images */}
                                <div className="relative aspect-[3/4] bg-gray-100">
                                    <Image
                                        src={mainImage}
                                        alt={product.name}
                                        fill
                                        sizes="(max-width: 768px) 50vw, 25vw"
                                        className="object-cover transition-all duration-700 group-hover:opacity-0 group-hover:scale-110"
                                    />
                                    {hoverImage !== mainImage && (
                                        <Image
                                            src={hoverImage}
                                            alt={product.name}
                                            fill
                                            sizes="(max-width: 768px) 50vw, 25vw"
                                            className="object-cover opacity-0 group-hover:opacity-100 transition-all duration-700"
                                        />
                                    )}
                                </div>

                                {/* Info */}
                                <div className="p-4 text-center">
                                    <h3 className="font-medium text-sm md:text-base line-clamp-2 mb-2">
                                        {product.name}
                                    </h3>

                                    {/* Stars */}
                                    <div className="flex justify-center gap-1 mb-2">
                                        {[...Array(5)].map((_, i) => (
                                            <Star
                                                key={i}
                                                className={`w-4 h-4 ${i < 4 ? 'fill-amber-400 text-amber-400' : 'text-gray-300'}`}
                                            />
                                        ))}
                                    </div>

                                    {/* Price */}
                                    <div className="flex items-center justify-center gap-2">
                                        {hasDiscount ? (
                                            <>
                                                <span className="text-lg font-bold">£{product.discountPrice}</span>
                                                <span className="text-sm text-gray-400 line-through">£{product.price}</span>
                                            </>
                                        ) : (
                                            <span className="text-lg font-bold">£{product.price}</span>
                                        )}
                                    </div>

                                    <div className="mt-3">
                                        <AddToCartButton productId={product._id} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ProductGrid;