import ProductCard from '@/components/ui/ProductCard/ProductCard';
import FilterBar from '@/components/ui/ProductFilter/filter-bar';
import Image from 'next/image';
import React from 'react';

const page = () => {
    return (
        <div className=''>
            <Image
                src='/shop_page.webp'
                alt='Description of image'
                width={1920}
                height={1080}
                className='w-full'
            />
            {/* <h1 className='text-center text-5xl dark:text-white '>Welcome to Our Store</h1> */}
            <div className='flex justify-center'>
                <FilterBar />
            </div>
            <div className="mt-4" >
                <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 p-4'>
                    <ProductCard image={"/productWoman4.webp"} image2={"/productWoman44.webp"} />
                    <ProductCard image={"/productWoman1.webp"} image2={"/productWoman11.webp"} />
                    <ProductCard image={"/productWoman2.webp"} image2={"/productWoman22.webp"} />
                    <ProductCard image={"/productWoman3.webp"} image2={"/productWoman33.webp"} />
                </div>
            </div>
            <div className="mt-4" >
                <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 p-4'>
                    <ProductCard image={"/img1r.png"} />
                    <ProductCard image={"/img2.jpg"} />
                    <ProductCard image={"/img3.jpg"} />
                    <ProductCard image={"/img4.jpg"} />
                </div>
            </div>
            <div className="mt-4" >
                <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 p-4'>
                    <ProductCard image={"/kids1.webp"} />
                    <ProductCard image={"/kids2.webp"} />
                    <ProductCard image={"/kids3.webp"} />
                    <ProductCard image={"/kids4.webp"} />
                </div>
            </div>
        </div>
    );
};

export default page;