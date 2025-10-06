// "use client"

// import { useState, useEffect } from "react"
// import { usePathname } from "next/navigation"
// import Link from "next/link"
// import { Search, User, ShoppingBag, Menu, X, ChevronDown, ChevronUp } from "lucide-react"
// import { navItems } from "@/lib/nav-items"

// // Desktop dropdown menu
// function DesktopMenu({ item, pathname }) {
//     const [isOpen, setIsOpen] = useState(false)

//     if (!item.children) {
//         return (
//             <Link
//                 href={item.href || "#"}
//                 className={`px-4 py-2 text-sm font-medium hover:text-primary ${pathname === item.href ? "text-primary" : "text-gray-800"}`}
//             >
//                 {item.title}
//             </Link>
//         )
//     }

//     return (
//         <div
//             className="relative"
//             onMouseEnter={() => setIsOpen(true)}
//             onMouseLeave={() => setIsOpen(false)}
//         >
//             <button
//                 className={`flex items-center gap-1 px-4 py-2 text-sm font-medium hover:text-primary ${pathname.startsWith(item.href || "") ? "text-primary" : "text-gray-800"}`}
//             >
//                 {item.title}
//                 <ChevronDown className="h-4 w-4" />
//             </button>

//             {isOpen && (
//                 <div className="absolute left-0 top-full z-50 min-w-48 rounded-md bg-white p-2 shadow-md">
//                     {item.children.map((child, index) => (
//                         <DesktopSubmenu key={index} item={child} pathname={pathname} />
//                     ))}
//                 </div>
//             )}
//         </div>
//     )
// }

// // Recursive desktop submenu
// function DesktopSubmenu({ item, pathname }) {
//     const [isOpen, setIsOpen] = useState(false)

//     if (!item.children) {
//         return (
//             <Link
//                 href={item.href || "#"}
//                 className={`block rounded-sm px-3 py-2 text-sm hover:bg-gray-300 ${pathname === item.href ? "bg-gray-300 font-medium" : ""}`}
//             >
//                 {item.title}
//             </Link>
//         )
//     }

//     return (
//         <div
//             className="relative"
//             onMouseEnter={() => setIsOpen(true)}
//             onMouseLeave={() => setIsOpen(false)}
//         >
//             <button className="flex w-full items-center justify-between rounded-sm px-3 py-2 text-sm hover:bg-gray-300">
//                 {item.title}
//                 <ChevronDown className="h-4 w-4" />
//             </button>

//             {isOpen && (
//                 <div className="absolute left-full top-0 z-50 min-w-48 rounded-md bg-white p-2 shadow-md">
//                     {item.children.map((child, index) => (
//                         <DesktopSubmenu key={index} item={child} pathname={pathname} />
//                     ))}
//                 </div>
//             )}
//         </div>
//     )
// }

// // Mobile menu item (recursive)
// function MobileMenuItem({ item, pathname, level = 0, onItemClick }) {
//     const [isExpanded, setIsExpanded] = useState(false)
//     const hasChildren = item.children && item.children.length > 0

//     const handleClick = () => {
//         if (hasChildren) {
//             setIsExpanded(!isExpanded)
//         } else if (item.href) {
//             onItemClick()
//         }
//     }

//     return (
//         <div>
//             <button
//                 onClick={handleClick}
//                 className={`flex w-full items-center justify-between px-4 py-3 text-left hover:bg-gray-300 ${pathname === item.href ? "bg-gray-300 font-medium" : ""} ${level > 0 ? "pl-8" : ""}`}
//             >
//                 <span>{item.title}</span>
//                 {hasChildren && (isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />)}
//             </button>

//             {hasChildren && isExpanded && (
//                 <div>
//                     {item.children.map((child, index) => (
//                         <MobileMenuItem
//                             key={index}
//                             item={child}
//                             pathname={pathname}
//                             level={level + 1}
//                             onItemClick={onItemClick}
//                         />
//                     ))}
//                 </div>
//             )}
//         </div>
//     )
// }

// export default function Navbar() {
//     const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
//     const pathname = usePathname()

//     useEffect(() => {
//         setIsMobileMenuOpen(false)
//     }, [pathname])

//     return (
//         <>
//             <nav className="sticky top-0 z-40 w-full bg-white">
//                 <div className="container mx-auto px-4">
//                     <div className="flex h-16 items-center justify-between">
//                         {/* Mobile menu button */}
//                         <button
//                             onClick={() => setIsMobileMenuOpen(true)}
//                             className="flex items-center justify-center p-2 md:hidden"
//                             aria-label="Open menu"
//                         >
//                             <Menu className="h-6 w-6" />
//                         </button>

//                         {/* Logo */}
//                         <div className="flex-1 md:flex-none">
//                             <Link href="/" className="flex items-center justify-center md:justify-start">
//                                 <span className="text-xl font-bold">STORE</span>
//                             </Link>
//                         </div>

//                         {/* Desktop navigation */}
//                         <div className="hidden items-center space-x-1 md:flex">
//                             {navItems.map((item, index) => (
//                                 <DesktopMenu key={index} item={item} pathname={pathname} />
//                             ))}
//                         </div>

//                         {/* Right side icons */}
//                         <div className="flex items-center space-x-2">
//                             <button className="p-2 rounded-md hover:bg-gray-300">
//                                 <Search className="h-5 w-5" />
//                             </button>
//                             <button className="hidden p-2 rounded-md hover:bg-gray-300 md:flex">
//                                 <User className="h-5 w-5" />
//                             </button>
//                             <button className="p-2 rounded-md hover:bg-gray-300">
//                                 <ShoppingBag className="h-5 w-5" />
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </nav>

//             {/* Mobile menu */}
//             {isMobileMenuOpen && (
//                 <div className="fixed inset-0 z-50 bg-white md:hidden">
//                     {/* Mobile menu header */}
//                     <div className="flex h-16 items-center justify-between px-4">
//                         <span className="text-lg font-bold">STORE</span>
//                         <button
//                             onClick={() => setIsMobileMenuOpen(false)}
//                             className="p-2 rounded-md hover:bg-gray-300"
//                             aria-label="Close menu"
//                         >
//                             <X className="h-6 w-6" />
//                         </button>
//                     </div>

//                     {/* Mobile menu content */}
//                     <div className="overflow-y-auto">
//                         {navItems.map((item, index) => (
//                             <MobileMenuItem
//                                 key={index}
//                                 item={item}
//                                 pathname={pathname}
//                                 onItemClick={() => setIsMobileMenuOpen(false)}
//                             />
//                         ))}
//                     </div>
//                 </div>
//             )}
//         </>
//     )
// }
