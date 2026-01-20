"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Youtube, Linkedin, ChevronUp } from 'lucide-react';

const navLinks = [
    { label: 'Milestones', href: '#milestones' },
    { label: 'Education', href: '#education' },
    { label: 'Awards', href: '#awards' },
    { label: 'Highlights', href: '#highlights' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
];

const socialLinks = [
    { icon: Instagram, href: 'https://www.instagram.com/yasserrizki?igsh=N2lqaHp6a29nMjFv&utm_source=qr' },
    { icon: Youtube, href: 'https://youtu.be/furj4gPchxs?si=gp_8bUvmoC0-dppS' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/yasser-rizki-b679a1287?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app' },
];

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-[#0F172A] border-t border-white/5">
            <div className="container mx-auto px-6 py-12">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    {/* Logo/Name */}
                    <div className="text-center md:text-left">
                        <h3 className="text-2xl font-bold text-white">
                            YASSER <span className="text-[#3B82F6]">RIZKI</span>
                        </h3>
                        <p className="text-gray-500 text-sm mt-2">Professional Footballer | Defensive Midfielder #6</p>
                    </div>

                    {/* Nav Links */}
                    <nav className="flex flex-wrap justify-center gap-6">
                        {navLinks.map((link, index) => (
                            <a
                                key={index}
                                href={link.href}
                                className="text-gray-400 hover:text-[#3B82F6] text-sm transition-colors"
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>

                    {/* Social Links */}
                    <div className="flex items-center gap-3">
                        {socialLinks.map((social, index) => (
                            <a
                                key={index}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 bg-white/5 hover:bg-[#3B82F6]/20 border border-white/10 hover:border-[#3B82F6]/50 rounded-full transition-all"
                            >
                                <social.icon className="w-4 h-4 text-gray-400 hover:text-[#3B82F6]" />
                            </a>
                        ))}
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-white/5 mt-8 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-gray-500 text-sm">
                            © {new Date().getFullYear()} Yasser Rizki. All rights reserved.
                        </p>

                        <div className="flex items-center gap-6">
                            <a href="#" className="text-gray-500 hover:text-[#3B82F6] text-sm transition-colors">
                                Privacy Policy
                            </a>
                            <a href="#" className="text-gray-500 hover:text-[#3B82F6] text-sm transition-colors">
                                Terms of Use
                            </a>
                        </div>

                        {/* Back to top */}
                        <button
                            onClick={scrollToTop}
                            className="p-3 bg-[#3B82F6] hover:bg-[#2563EB] rounded-full transition-colors shadow-lg shadow-[#3B82F6]/20"
                        >
                            <ChevronUp className="w-5 h-5 text-white" />
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
}