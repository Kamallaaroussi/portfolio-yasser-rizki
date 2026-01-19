"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
    { label: 'Milestones', href: '#milestones' },
    { label: 'Education', href: '#education' },
    { label: 'Awards', href: '#awards' },
    { label: 'Highlights', href: '#highlights' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Détecte le scroll pour changer le fond de la barre
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                    ? 'bg-[#0F172A]/90 backdrop-blur-lg border-b border-white/5'
                    : 'bg-transparent'
                    }`}
            >
                <div className="container mx-auto px-6">
                    <div className="flex items-center justify-between h-20">
                        {/* Logo */}
                        <a href="#" className="text-xl font-bold text-white">
                            YR<span className="text-[#3B82F6]">.</span>
                        </a>

                        {/* Desktop Nav */}
                        <div className="hidden md:flex items-center gap-8">
                            {navLinks.map((link, index) => (
                                <a
                                    key={index}
                                    href={link.href}
                                    className="text-gray-400 hover:text-white text-sm font-medium tracking-wide transition-colors relative group"
                                >
                                    {link.label}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#3B82F6] group-hover:w-full transition-all duration-300" />
                                </a>
                            ))}
                        </div>

                        {/* CTA Button */}
                        <a
                            href="#contact"
                            className="hidden md:inline-flex px-6 py-2.5 bg-[#3B82F6] hover:bg-[#2563EB] text-white font-semibold text-sm rounded-full transition-all"
                        >
                            Get in Touch
                        </a>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="md:hidden p-2 text-white"
                        >
                            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-40 bg-[#0F172A]/98 backdrop-blur-lg pt-24 md:hidden"
                    >
                        <div className="container mx-auto px-6">
                            <div className="flex flex-col gap-6">
                                {navLinks.map((link, index) => (
                                    <motion.a
                                        key={index}
                                        href={link.href}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="text-2xl font-semibold text-white hover:text-[#3B82F6] transition-colors"
                                    >
                                        {link.label}
                                    </motion.a>
                                ))}
                                <motion.a
                                    href="#contact"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: navLinks.length * 0.1 }}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="inline-flex items-center justify-center px-8 py-4 bg-[#3B82F6] text-white font-semibold rounded-full mt-4"
                                >
                                    Get in Touch
                                </motion.a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}