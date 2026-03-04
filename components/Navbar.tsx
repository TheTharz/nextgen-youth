"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { getImagePath } from "@/utils/imagePath";

export default function Navbar({ dict, lang }: { dict: any, lang: string }) {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const navLinks = [
        { name: dict.navigation.home, href: `/${lang}` },
        { name: dict.navigation.about, href: `/${lang}/about` },
        { name: dict.navigation.activities, href: `/${lang}/activities` },
        { name: dict.navigation.gallery, href: `/${lang}/gallery` },
        { name: dict.navigation.contact, href: `/${lang}/contact` },
    ];

    const getSwitchedLanguageUrl = () => {
        const targetLang = lang === 'en' ? 'si' : 'en';
        if (!pathname) return `/${targetLang}`;
        const newPathname = pathname.replace(`/${lang}`, `/${targetLang}`);
        return newPathname === '' ? `/${targetLang}` : newPathname;
    };

    return (
        <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-white/20 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex-shrink-0 flex items-center">
                        <Link href={`/${lang}`} className="flex items-center gap-3">
                            <div className="relative w-10 h-10 rounded-full overflow-hidden shadow-sm">
                                <Image src={getImagePath("/assets/logo/withoutbackground.png")} alt="NextGen Youth Logo" fill className="object-cover" />
                            </div>
                            <span className="text-xl font-bold text-[#00003c]">
                                {dict.navigation.logo_text_1}<span className="text-secondary">{dict.navigation.logo_text_2}</span>
                            </span>
                        </Link>
                    </div>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => {
                            // Exact match for home, startsWith for others to keep active state on subpaths if any
                            const isActive = link.href === `/${lang}` ? pathname === `/${lang}` : pathname?.startsWith(link.href) || false;

                            return (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={`text-sm font-medium transition-colors hover:text-[#00003c] ${isActive ? "text-[#00003c] border-b-2 border-[#00003c]" : "text-gray-600"
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            );
                        })}

                        {/* Language Switcher */}
                        <Link
                            href={getSwitchedLanguageUrl()}
                            className="ml-4 px-3 py-1.5 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-semibold rounded-lg transition-colors"
                        >
                            {lang === 'en' ? 'සිං' : 'En'}
                        </Link>
                    </nav>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center gap-3">
                        <Link
                            href={getSwitchedLanguageUrl()}
                            className="px-2 py-1 bg-gray-100 text-gray-700 text-sm font-semibold rounded-md transition-colors"
                        >
                            {lang === 'en' ? 'සිං' : 'En'}
                        </Link>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-600 hover:text-[#00003c] focus:outline-none"
                            aria-expanded={isOpen}
                        >
                            <span className="sr-only">Open main menu</span>
                            {/* Hamburger Icon */}
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {isOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Nav */}
            {isOpen && (
                <div className="md:hidden bg-white/90 backdrop-blur-lg border-b border-white/20 shadow-sm">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navLinks.map((link) => {
                            const isActive = link.href === `/${lang}` ? pathname === `/${lang}` : pathname?.startsWith(link.href) || false;

                            return (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className={`block px-3 py-2 rounded-md text-base font-medium ${isActive
                                        ? "text-[#00003c] bg-blue-50"
                                        : "text-gray-600 hover:text-[#00003c] hover:bg-gray-50"
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            );
                        })}
                    </div>
                </div>
            )}
        </header>
    );
}
