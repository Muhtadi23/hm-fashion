'use client';
import React from 'react';
import { ShoppingBag } from 'lucide-react';

const AddToCartButton = () => {
    return (
        <button
            className="
                w-full
                bg-main-gray hover:bg-secondary-gray
                text-white font-medium
                px-3 py-2 sm:px-4 sm:py-3 md:px-6 md:py-2 lg:px-8 lg:py-3
                rounded-full
                transition-all duration-300 transform
                hover:scale-[1.02] hover:shadow-lg active:scale-[0.98]
                flex items-center justify-center gap-2 group/btn
            "
        >
            <ShoppingBag
                className="
                    w-4 h-4 sm:w-5 sm:h-5 md:w-5 md:h-5
                    transition-transform duration-300 
                    group-hover/btn:scale-110
                "
            />
            <span className="text-white text-xs sm:text-sm md:text-base lg:text-lg whitespace-nowrap">
                Add to Cart
            </span>
        </button>
    );
};

export default AddToCartButton;
