import CategoryBanner from '@/components/ui/CategoryBanner/CategoryBanner';
import ProductCard from '@/components/ui/ProductCard/ProductCard';
import React from 'react';

const page = () => {
    return (
        <div>
            <CategoryBanner imageSrc={"/Men_s-Regular-T.webp"} bannerContent="Men's Premium T-Shirt" />
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4'>
                <ProductCard image={"/img1r.png"} />
                <ProductCard image={"/img2.jpg"} />
                <ProductCard image={"/img3.jpg"} />
                <ProductCard image={"/img4.jpg"} />
            </div>
        </div>
    );
};

export default page;