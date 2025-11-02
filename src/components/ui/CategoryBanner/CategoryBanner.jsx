'use client';
import Image from 'next/image';
import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';

const CategoryBanner = ({ imageSrc, bannerContent }) => {
    return (
        <div className="relative h-auto lg:h-[70vh] overflow-hidden">
            {/* Responsive padding */}
            <div className="relative z-10 flex items-center justify-center h-full px-4 py-8 sm:px-6 sm:py-12 lg:px-10 lg:py-16">
                <div className="flex flex-col-reverse lg:flex-row items-center justify-between max-w-7xl mx-auto gap-8 sm:gap-12">

                    {/* Text Section */}
                    <div className="flex-1 min-w-[280px] sm:min-w-[320px] text-center lg:text-left space-y-5 sm:space-y-6">
                        {/* Label */}
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-white rounded-full border border-gray-200 shadow-sm">
                            <Sparkles className="w-4 h-4 text-yellow-500" />
                            <span className="text-sm font-medium text-gray-700">New Collection</span>
                        </div>

                        {/* Heading */}
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black leading-tight text-main-gray dark:text-white">
                            {bannerContent}
                        </h1>

                        {/* Description */}
                        <p className="text-base sm:text-lg lg:text-xl text-secondary-gray dark:text-gray-400 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                            Discover our meticulously curated collection designed to elevate your style and inspire your journey.
                        </p>

                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
                            <button className="flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-purple-600 text-white font-semibold rounded-full shadow hover:bg-purple-700 transition-all duration-300 w-full sm:w-auto gap-2">
                                Explore Collection
                                <ArrowRight className="w-5 h-5" />
                            </button>
                            <button className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-gray-800 font-semibold rounded-full border border-gray-200 hover:bg-gray-100 transition-all duration-300 w-full sm:w-auto">
                                Learn More
                            </button>
                        </div>
                    </div>

                    {/* Image Section */}
                    <div className="flex-1 w-full max-w-xs sm:max-w-sm mx-auto lg:max-w-md relative">
                        <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl ">
                            <Image
                                src={imageSrc}
                                alt="Category Banner"
                                width={600}
                                height={700}
                                priority
                                className="w-full h-auto object-contain lg:h-full lg:object-cover lg:object-center bg-white"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryBanner;
