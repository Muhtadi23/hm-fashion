'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FiMenu, FiX } from 'react-icons/fi';
import { ChevronDown, Search, ShoppingBag } from 'lucide-react';
import DropdownItem from './DropdownItem';

const navItems = [
    // { label: 'HOME', href: '/' },
    { label: 'OUR STORE', href: '/our-store' },
    // { label: 'SHOES', href: '/shoes' },
    {
        label: "MEN'S",
        key: 'mens',
        children: [
            { title: 'T-Shirts', href: '/mens/t-shirts' },
        ],
    },
    {
        label: "WOMEN'S",
        key: 'womens',
        children: [
            { title: 'Tops', href: '/womens/tops' },
        ],
    },
    // {
    //     label: "KID'S",
    //     key: 'kids',
    //     children: [
    //         {
    //             title: 'Boys',
    //             children: [
    //                 { title: 'Boys Shirts', href: '/boys/shirts' },
    //                 { title: 'Boys Pants', href: '/boys/pants' },
    //             ],
    //         },
    //         {
    //             title: 'Girls',
    //             children: [
    //                 { title: 'Girls Tops', href: '/girls/tops' },
    //                 { title: 'Girls Skirts', href: '/girls/skirts' },
    //             ],
    //         },
    //     ],
    // },
];

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="w-full">
            <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-10 py-4 flex items-center justify-between">

                {/* Mobile Hamburger */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="lg:hidden font-semibold text-2xl text-gray-700 hover:text-black transition"
                >
                    {menuOpen ? <FiX /> : <FiMenu />}
                </button>

                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <span className="text-xl lg:text-2xl font-bold tracking-tight text-gray-900">
                        HM Fashion
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex gap-8 items-center relative font-medium text-gray-700">
                    {navItems.map((item) =>
                        item.children ? (
                            <DropdownItem key={item.key} item={item} />
                        ) : (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="relative font-semibold after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-black hover:after:w-full after:transition-all after:duration-300"
                            >
                                {item.label}
                            </Link>
                        )
                    )}
                </nav>

                {/* Icons */}
                <div className="flex items-center gap-5 text-lg text-gray-700">
                    <Search className="hidden sm:inline cursor-pointer hover:text-black transition" />
                    <Link href="/cart"> <ShoppingBag className="cursor-pointer hover:text-black transition" /></Link>

                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="lg:hidden bg-white  px-4 py-4 space-y-2 shadow-md animate-slideDown">
                    {navItems.map((item) =>
                        item.children ? (
                            <DropdownItem key={item.key} item={item} mobile />
                        ) : (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="block font-semibold py-2 text-gray-700 hover:text-black"
                            >
                                {item.label}
                            </Link>
                        )
                    )}
                </div>
            )}
        </header>
    );
}
