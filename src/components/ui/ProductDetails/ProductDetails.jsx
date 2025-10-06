'use client';

import { useState } from 'react';
import Image from 'next/image';
import { FiMinus, FiPlus } from 'react-icons/fi';
import SaleBadge from '../SaleBadge/SaleBadge';

export default function ProductDetails() {
    const images = [
        '/productMan1.webp',
        '/productMan1-close.webp',
        '/productMan1-back.webp',
        '/productMan1-side.webp',
    ];

    const [mainImageIdx, setMainImageIdx] = useState(0);
    const [qty, setQty] = useState(1);
    const [size, setSize] = useState('XS');
    const sizes = ['XS', 'S', 'M', 'L', 'XL', '2XL'];

    const changeQty = (delta) => setQty((q) => Math.max(1, q + delta));

    return (
        <section className="max-w-7xl mx-auto px-4 md:px-8 py-10 grid grid-cols-1 lg:grid-cols-2 gap-8 ">
            {/* Left column – images */}
            <div>
                {/* Main Image */}
                <div className="relative w-full h-[480px] mb-4 overflow-hidden">
                    <Image
                        src={images[mainImageIdx]}
                        alt="Product image"
                        fill
                        className="object-contain"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                </div>

                {/* Thumbnails (centered below image) */}
                <div className="flex justify-start gap-4 overflow-x-auto pb-1">
                    {images.map((src, idx) => (
                        <button
                            key={src}
                            onClick={() => setMainImageIdx(idx)}
                            className={`relative w-24 h-24 border-2 ${mainImageIdx === idx
                                    ? 'border-black dark:border-white'
                                    : 'border-transparent hover:border-gray-300 dark:hover:border-gray-600'
                                } flex-shrink-0`}
                        >
                            <Image src={src} alt="thumb" fill className="object-cover" />
                        </button>
                    ))}
                </div>
            </div>


            {/* Right column – details */}
            <div className="space-y-6 lg:pl-10">
                {/* Title & SKU */}
                <div>
                    <h1 className="text-main-gray dark:text-white text-3xl md:text-4xl font-bold leading-tight">
                        Performance Polo | Arrow Wood
                    </h1>
                    <p className="mt-2 text-sm tracking-wider text-gray-500 dark:text-gray-400">
                        TR-JL-MP-3007
                    </p>
                </div>

                {/* Pricing */}
                <div className="flex items-center gap-3">
                    <p className="line-through text-gray-400 dark:text-gray-400 text-lg">Tk 2,200</p>
                    <p className="text-2xl font-semibold dark:text-white">Tk1,760 BDT</p>
                    <SaleBadge />
                </div>
                <p className="text-sm dark:text-gray-300">
                    <span className="underline">Shipping</span> calculated at checkout.
                </p>

                {/* Size selector */}
                <div>
                    <h3 className="font-medium mb-2 dark:text-gray-100">Size</h3>
                    <div className="flex flex-wrap gap-2">
                        {sizes.map((s) => (
                            <button
                                key={s}
                                onClick={() => setSize(s)}
                                className={`px-5 py-2 border rounded-full text-sm uppercase ${size === s
                                    ? 'bg-black text-white dark:bg-white dark:text-black'
                                    : 'border-gray-300 dark:border-gray-400 text-black dark:text-white hover:border-black dark:hover:border-white'
                                    }`}
                            >
                                {s}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Color & material badges */}
                <div className="space-y-3">
                    <div>
                        <h3 className="font-medium mb-1 dark:text-gray-100">Color</h3>
                        <span className="inline-block bg-black text-white dark:bg-white dark:text-black px-4 py-1 rounded-full text-sm uppercase">
                            Arrow Wood
                        </span>
                    </div>
                    <div>
                        <h3 className="font-medium mb-1 dark:text-gray-100">Material</h3>
                        <span className="inline-block bg-black text-white dark:bg-white dark:text-black px-4 py-1 rounded-full text-sm uppercase">
                            100% Polyester
                        </span>
                    </div>
                </div>

                {/* Quantity */}
                <div>
                    <h3 className="font-medium mb-2 dark:text-gray-100">
                        Quantity <span className="text-gray-500 dark:text-gray-400">({qty} in cart)</span>
                    </h3>
                    <div className="inline-flex items-center border dark:border-gray-700">
                        <button
                            onClick={() => changeQty(-1)}
                            className="p-3 hover:bg-gray-100 dark:hover:bg-gray-800 dark:text-gray-100"
                        >
                            <FiMinus />
                        </button>
                        <span className="px-6 select-none dark:text-gray-100">{qty}</span>
                        <button
                            onClick={() => changeQty(1)}
                            className="p-3 hover:bg-gray-100 dark:hover:bg-gray-800 dark:text-gray-100"
                        >
                            <FiPlus />
                        </button>
                    </div>
                </div>

                {/* Low stock note */}
                <p className="text-sm flex items-center gap-2 dark:text-gray-300">
                    <span className="w-2 h-2 rounded-full bg-orange-500 inline-block" />
                    Low stock: 3 left
                </p>

                {/* Action buttons */}
                <div className="space-y-3">
                    <button className="cursor-pointer w-full bg-gray-100 dark:bg-gray-900 border border-black dark:border-gray-600 py-4 font-semibold hover:bg-gray-300 dark:hover:bg-gray-800 transition dark:text-gray-100">
                        Add to cart
                    </button>
                    <button className="cursor-pointer w-full bg-black text-white py-4 font-semibold hover:bg-gray-700 dark:bg-white dark:text-black dark:hover:bg-gray-200 transition">
                        Buy it now
                    </button>
                </div>

                {/* Expanded description + extra sections */}
                <div className="pt-6 border-t dark:border-gray-700 space-y-6">
                    <div>
                        <h3 className="font-semibold mb-3 text-lg uppercase dark:text-white">Description</h3>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                            Introducing the{' '}
                            <span className="font-semibold">Performance Polo Series</span>.<br />
                            The Performance Polo Series isn&apos;t just another polo. It&apos;s a
                            technologically advanced garment engineered to maximize your
                            potential. Crafted from premium, lightweight (weight to be
                            specified) 100% polyester pique knit, this polo wicks away sweat
                            like a champ, keeping you cool, dry, and comfortable even during
                            intense workouts.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-bold mb-2 dark:text-white">Key Features:</h3>
                        <ul className="list-disc space-y-2 pl-5 text-gray-700 dark:text-gray-300">
                            <li>
                                <strong>Sweat-Activated Cooling:</strong> Our innovative fabric
                                utilizes moisture-wicking technology to draw sweat away from your
                                body, creating a cooling effect that keeps you focused.
                            </li>
                            <li>
                                <strong>Rapid Dry:</strong> Never let sweat slow you down. The
                                Performance Polo dries in record time, so you can transition
                                seamlessly from workout to errands without feeling damp.
                            </li>
                            <li>
                                <strong>Fresh Performance:</strong> Say goodbye to odor.
                                Antimicrobial properties help prevent odor-causing bacteria
                                growth.
                            </li>
                            <li>
                                <strong>Effortless Maintenance:</strong> Machine washable &
                                wrinkle-resistant—perfect for low-maintenance lifestyles.
                            </li>
                            <li>
                                <strong>Classic Style, Modern Performance:</strong> A timeless
                                design with a ribbed collar.
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold mb-2 uppercase text-sm dark:text-white">Note:</h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            Product color may vary slightly due to lighting sources and photo
                            equipment used during the photoshoot / graphical product display.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-bold mb-2 uppercase text-sm dark:text-white">
                            Shipping Policy:
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            We&apos;re committed to delivering your order accurately, in good
                            condition, and on time. Deliveries inside Dhaka will arrive within
                            2-3 business days and outside Dhaka within 5 days.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-bold mb-2 uppercase text-sm dark:text-white">
                            Wash Instruction:
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            Wash in 30 °C with like colors, do not tumble dry, do not bleach.
                        </p>
                    </div>

                    <div className="pt-6">
                        <Image
                            src="/chart.webp"
                            alt="Size Chart"
                            width={600}
                            height={300}
                            className="w-full h-auto"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
