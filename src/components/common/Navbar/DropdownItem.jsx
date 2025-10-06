'use client';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const DropdownItem = ({ item, mobile = false, isNested = false }) => {
    const [open, setOpen] = useState(false);
    const ref = useRef(null);

    // Close on outside click (desktop only)
    useEffect(() => {
        if (mobile) return;
        const handler = (e) => {
            if (ref.current && !ref.current.contains(e.target)) {
                setOpen(false);
            }
        };
        document.addEventListener('mousedown', handler);
        return () => document.removeEventListener('mousedown', handler);
    }, [mobile]);

    if (item.children) {
        return (
            <div ref={ref} className="relative font-semibold">
                {/* Trigger - underline on hover */}
                <div
                    onClick={() => setOpen(!open)}
                    className={`flex items-center justify-between gap-1 cursor-pointer relative 
                        ${mobile
                            ? 'py-2 text-gray-700 hover:text-black'
                            : 'hover:text-black transition after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-black hover:after:w-full after:transition-all after:duration-300'
                        }`}
                >
                    {item.label || item.title}
                    <ChevronDown
                        className={`transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
                        size={16}
                    />
                </div>

                {/* Desktop Dropdown */}
                {!mobile && (
                    <AnimatePresence>
                        {open && (
                            <motion.div
                                initial={{ opacity: 0, y: isNested ? 0 : 10, x: isNested ? 10 : 0 }}
                                animate={{ opacity: 1, y: 0, x: 0 }}
                                exit={{ opacity: 0, y: isNested ? 0 : 10, x: isNested ? 10 : 0 }}
                                transition={{ duration: 0.2 }}
                                className={`absolute ${isNested
                                    ? 'left-full top-0 ml-2'
                                    : 'left-0 mt-2'
                                    } bg-white shadow-lg py-3 px-4 min-w-[200px] z-40`}
                            >
                                {item.children.map((child, idx) => (
                                    <DropdownItem key={idx} item={child} isNested />
                                ))}
                            </motion.div>
                        )}
                    </AnimatePresence>
                )}

                {/* Mobile Dropdown */}
                {mobile && open && (
                    <div className="pl-4 mt-2 border-l border-gray-200 space-y-2">
                        {item.children.map((child, idx) => (
                            <DropdownItem key={idx} item={child} mobile isNested />
                        ))}
                    </div>
                )}
            </div>
        );
    }

    // Normal link with hover underline
    return (
        <Link
            href={item.href}
            className={`block relative ${mobile
                ? 'py-2 text-gray-600 hover:text-black'
                : 'py-1 text-gray-600 hover:text-black transition after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-black hover:after:w-full after:transition-all after:duration-300'
                }`}
        >
            {item.label || item.title}
        </Link>
    );
};

export default DropdownItem;
