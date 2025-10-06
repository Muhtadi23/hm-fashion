import CategoryBanner from '@/components/ui/CategoryBanner/CategoryBanner';
import ProductCard from '@/components/ui/ProductCard/ProductCard';
import React from 'react';

const page = () => {
    return (
        <div>
            <CategoryBanner imageSrc={"/kids.webp"} />

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4'>
                <ProductCard image={"/kids1.webp"} />
                <ProductCard image={"/kids2.webp"} />
                <ProductCard image={"/kids3.webp"} />
                <ProductCard image={"/kids4.webp"} />
            </div>

        </div>
    );
};

export default page;