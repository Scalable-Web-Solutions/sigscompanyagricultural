'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navigation() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [productsOpen, setProductsOpen] = useState(false);

    const categories = [
        'Seeds', 'Fertilizers', 'Irrigation Supplies', 'Biologicals',
        'Tools & Equipment', 'Harvest Supplies', 'Portable Power', 'Soil Sensors'
    ];

    return (
        <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16 relative">
                    <Link href="/" className="flex items-center">
                        <span className="text-xl font-bold text-[#1a1a1a]">SIGS COMPANY</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        <div className="relative group">
                            <button className="text-[#1a1a1a] hover:text-[#4a7c3e] font-medium text-sm">
                                Products
                            </button>
                            <div className="absolute left-0 mt-2 w-56 bg-white border border-gray-200 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                                <div className="py-2">
                                    {categories.map((cat) => (
                                        <Link key={cat} href={`/products/${cat.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`}
                                            className="block px-4 py-2 text-sm text-[#1a1a1a] hover:bg-gray-50 hover:text-[#4a7c3e]">
                                            {cat}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <Link href="/services" className="text-[#1a1a1a] hover:text-[#4a7c3e] font-medium text-sm">Services</Link>
                        <Link href="/about" className="text-[#1a1a1a] hover:text-[#4a7c3e] font-medium text-sm">About</Link>
                        <Link href="/resources" className="text-[#1a1a1a] hover:text-[#4a7c3e] font-medium text-sm">Resources</Link>
                        <Link href="/contact" className="text-[#1a1a1a] hover:text-[#4a7c3e] font-medium text-sm">Contact</Link>
                        <Link href="/portal" className="text-[#1a1a1a] hover:text-[#4a7c3e] font-medium text-sm">Portal</Link>
                        <Link href="/quote" className="bg-[#4a7c3e] text-white px-5 py-2 text-sm font-medium hover:bg-[#3d6633] transition-colors">
                            Request Quote
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden bg-white border-t border-gray-200">
                    <div className="px-4 py-2 space-y-1">
                        <button onClick={() => setProductsOpen(!productsOpen)} className="w-full text-left py-2 font-medium text-sm">
                            Products
                        </button>
                        {productsOpen && (
                            <div className="pl-4 space-y-1">
                                {categories.map((cat) => (
                                    <Link key={cat} href={`/products/${cat.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`}
                                        className="block py-2 text-sm text-gray-600">
                                        {cat}
                                    </Link>
                                ))}
                            </div>
                        )}
                        <Link href="/services" className="block py-2 font-medium text-sm">Services</Link>
                        <Link href="/about" className="block py-2 font-medium text-sm">About</Link>
                        <Link href="/resources" className="block py-2 font-medium text-sm">Resources</Link>
                        <Link href="/contact" className="block py-2 font-medium text-sm">Contact</Link>
                        <Link href="/quote" className="block py-2 bg-[#4a7c3e] text-white text-center text-sm font-medium mt-2">
                            Request Quote
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
