import Image from 'next/image';
import React from 'react';
import { Star, Heart } from 'lucide-react';
import AddToCartButton from '../AddToCartButton/AddToCartButton';
import DiscountSaleBadge from '../DiscountSaleBadge/DiscountSaleBadge';

const ProductCard = ({ image, image2 }) => {
    return (
        <div className="group relative w-full max-w-[320px] sm:max-w-[340px] md:max-w-[360px] lg:max-w-[380px] xl:max-w-[400px] mx-auto ">
            {/* Main Card Container */}
           <div className="relative rounded-3xl overflow-hidden transition-all duration-500 border border-gray-100 dark:border-[#3a3b3e54] hover:shadow-2xl hover:shadow-black/10 hover:-translate-y-2 hover:border-gray-200 dark:hover:border-[#4a4b4e4f]">

                {/* Wishlist Button */}
                <button className="cursor-pointer absolute top-4 right-4 z-10 w-10 h-10 bg-white backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 hover:bg-gray-50 hover:scale-110 hover:shadow-lg opacity-0 group-hover:opacity-100">
                    <Heart className="w-4 h-4 text-gray-600 hover:text-red transition-colors duration-300" />
                </button>

                {/* Product Image */}
                <div className="relative w-full aspect-[3/4] overflow-hidden bg-gray-100">
                    {image && (
                        <Image
                            src={image}
                            alt="Main Image"
                            fill
                            className="object-cover transition-all duration-700 group-hover:opacity-0 group-hover:scale-105"
                            priority
                        />
                    )}
                    {image2 && (
                        <Image
                            src={image2}
                            alt="Hover Image"
                            fill
                            className="object-cover absolute top-0 left-0 opacity-0 scale-105 transition-all duration-700 group-hover:opacity-100 group-hover:scale-100"
                            priority
                        />
                    )}
                </div>

                {/* Product Info */}
                <div className="px-2 py-5 text-center relative">
                    {/* Product Name */}
                    <h3 className="text-secondary-gray dark:text-gray-300 font-semibold text-base mb-2 leading-tight transition-colors duration-300 group-hover:text-black dark:group-hover:text-white">
                        Red Bandeau Maxi Dress
                    </h3>

                    {/* Rating */}
                    <div className="flex justify-center items-center gap-1 mb-3">
                        {[...Array(5)].map((_, i) => (
                            <Star
                                key={i}
                                className="w-4 h-4 fill-amber text-amber transition-all duration-300 hover:scale-110"
                            />
                        ))}
                        <span className="text-xs text-gray-400 ml-2">(4.8)</span>
                    </div>

                    {/* Price */}
                    <div className="mb-4">
                        <p className="text-gray-900 dark:text-white text-xl font-bold">£9.00</p>
                        <p className="text-gray-400 dark:text-gray-500 text-sm line-through">£15.00</p>
                    </div>

                    {/* Add to Cart Button */}
                    <AddToCartButton />
                </div>

                {/* Sale Badge */}
                <DiscountSaleBadge />
            </div>

            {/* Shadow */}
            <div className="absolute inset-0 rounded-3xl
             bg-gray-200 -z-10 transform scale-95 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500" />
        </div>
    );
};

export default ProductCard;
