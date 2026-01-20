"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Instagram, Youtube, Linkedin, FileDown } from 'lucide-react';

export default function HeroSection() {
    const scrollToSection = () => {
        document.getElementById('milestones')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0F172A]">
            <div className="absolute inset-0 bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A]" />

            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-[#3B82F6]/20 to-transparent" />
                <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-[#3B82F6]/10 to-transparent" />
            </div>

            <div className="relative z-10 container mx-auto px-6 py-20 pt-32">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-center lg:text-left order-2 lg:order-1"
                    >
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="inline-block px-4 py-2 bg-[#3B82F6]/10 border border-[#3B82F6]/30 rounded-full text-[#3B82F6] text-sm font-medium tracking-widest uppercase mb-6"
                        >
                            Professional Footballer
                        </motion.span>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4 tracking-tight"
                        >
                            YASSER
                            <span className="block text-[#3B82F6]">RIZKI</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="text-gray-400 text-lg md:text-xl max-w-md mx-auto lg:mx-0 mb-8 leading-relaxed"
                        >
                            Defensive Midfielder #6 , Dedicated to success
                        </motion.p>

                        {/* --- BOUTON CV MIS À JOUR --- */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.45 }}
                            className="mb-8 flex justify-center lg:justify-start"
                        >
                            <a
                                // CORRECTION ICI : Nom exact du fichier avec l'espace
                                href="/Yasser_ Rizki_CV.pdf"
                                download="Yasser_ Rizki_CV.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center gap-3 px-8 py-4 bg-[#3B82F6] hover:bg-[#2563EB] text-white font-bold rounded-full transition-all shadow-lg shadow-[#3B82F6]/25 hover:shadow-[#3B82F6]/40 hover:-translate-y-1"
                            >
                                <FileDown className="w-5 h-5 group-hover:animate-bounce" />
                                <span>Download Resume</span>
                            </a>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="flex items-center gap-6 justify-center lg:justify-start"
                        >
                            <div className="flex items-center gap-4">
                                <a
                                    href="https://www.instagram.com/yasserrizki?igsh=N2lqaHp6a29nMjFv&utm_source=qr"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 bg-white/5 hover:bg-[#3B82F6]/20 border border-white/10 hover:border-[#3B82F6]/50 rounded-full transition-all duration-300"
                                >
                                    <Instagram className="w-5 h-5 text-white" />
                                </a>
                                <a
                                    href="https://youtu.be/furj4gPchxs?si=gp_8bUvmoC0-dppS"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 bg-white/5 hover:bg-[#3B82F6]/20 border border-white/10 hover:border-[#3B82F6]/50 rounded-full transition-all duration-300"
                                >
                                    <Youtube className="w-5 h-5 text-white" />
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/yasser-rizki-b679a1287?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 bg-white/5 hover:bg-[#3B82F6]/20 border border-white/10 hover:border-[#3B82F6]/50 rounded-full transition-all duration-300"
                                >
                                    <Linkedin className="w-5 h-5 text-white" />
                                </a>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="grid gap-6 mt-12 pt-12 border-t border-white/10"
                        >
                            <div className="grid grid-cols-3 gap-4">
                                <div>
                                    <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">Age</p>
                                    <span className="text-2xl font-bold text-white">22</span>
                                </div>
                                <div>
                                    <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">Height</p>
                                    <span className="text-2xl font-bold text-white">181cm</span>
                                </div>
                                <div>
                                    <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">Weight</p>
                                    <span className="text-2xl font-bold text-white">73kg</span>
                                </div>
                            </div>
                            <div>
                                <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">Strong Foot</p>
                                <span className="text-2xl font-bold text-[#3B82F6]">Left</span>
                            </div>
                            <div>
                                <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">Primary Position</p>
                                <span className="text-xl font-bold text-white">Defensive Midfielder</span>
                                <span className="text-[#3B82F6] ml-2 text-xl font-bold">6</span>
                            </div>
                            <div>
                                <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">Secondary Position</p>
                                <span className="text-xl font-bold text-white">Central Midfielder</span>
                                <span className="text-[#3B82F6] ml-2 text-xl font-bold">8</span>
                            </div>
                            <div>
                                <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">Nationality</p>
                                <span className="text-2xl font-bold text-white">🇲🇦 Morocco</span>
                            </div>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="relative order-1 lg:order-2 flex justify-center"
                    >
                        <div className="relative w-full max-w-md aspect-[3/4] rounded-3xl overflow-hidden border-4 border-white/5 shadow-2xl shadow-[#3B82F6]/20">
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/80 via-transparent to-transparent z-10" />
                            <img
                                src="/Yasser.jpg"
                                alt="Yasser Rizki playing football"
                                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                            />
                        </div>

                        <div className="absolute -inset-4 bg-[#3B82F6]/20 blur-3xl -z-10 rounded-full" />
                    </motion.div>

                </div>
            </div>

            <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                onClick={scrollToSection}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500 hover:text-[#3B82F6] transition-colors cursor-pointer z-20"
            >
                <span className="text-xs uppercase tracking-widest">Scroll</span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                >
                    <ChevronDown className="w-5 h-5" />
                </motion.div>
            </motion.button>
        </section>
    );
}