"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
    {
        id: 1,
        quote: "Yasser is a disciplined defensive midfielder with a strong understanding of positioning and defensive responsibility. He reads the game well, protects the back line effectively, and brings balance to the team. His work rate and tactical awareness allow him to control spaces and recover balls consistently.",
        author: "Aziz Amenz",
        role: "U15 Coach, Racing Athletic Club",
        rating: 5,
    },
    {
        id: 2,
        quote: "What stands out about Yasser is his game intelligence. As a defensive midfielder, he understands when to press, when to hold position, and how to organize players around him. He plays with maturity and shows a professional attitude in training and matches.",
        author: "Hakim Nidar",
        role: "U19 Coach, Racing Athletic Club",
        rating: 5,
    },
];

export default function TestimonialsSection() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextTestimonial = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <section id="testimonials" className="py-24 bg-[#0F172A] relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-[#3B82F6]/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#3B82F6]/5 rounded-full blur-3xl" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-[#3B82F6] text-sm font-medium tracking-widest uppercase">Voices</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mt-2">What They Say</h2>
                    <div className="w-20 h-1 bg-[#3B82F6] mt-6 mx-auto" />
                </motion.div>

                <div className="max-w-4xl mx-auto">
                    <div className="relative">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.4 }}
                                className="bg-gradient-to-br from-[#1E293B] to-[#0F172A] border border-white/10 rounded-3xl p-8 md:p-12"
                            >
                                <div className="flex justify-center mb-8">
                                    <div className="p-4 bg-[#3B82F6]/10 rounded-2xl">
                                        <Quote className="w-8 h-8 text-[#3B82F6]" />
                                    </div>
                                </div>

                                <p className="text-xl md:text-2xl text-white text-center leading-relaxed font-light italic">
                                    "{testimonials[currentIndex].quote}"
                                </p>

                                <div className="flex justify-center gap-1 mt-8">
                                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 text-[#3B82F6] fill-current" />
                                    ))}
                                </div>

                                <div className="flex flex-col items-center mt-8">
                                    <div className="w-16 h-16 rounded-full bg-[#3B82F6]/20 flex items-center justify-center text-white font-bold text-xl border-2 border-[#3B82F6]/30">
                                        {testimonials[currentIndex].author.charAt(0)}
                                    </div>
                                    <h4 className="text-lg font-semibold text-white mt-4">
                                        {testimonials[currentIndex].author}
                                    </h4>
                                    <p className="text-gray-400 text-sm mt-1">
                                        {testimonials[currentIndex].role}
                                    </p>
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        <div className="flex justify-center gap-4 mt-8">
                            <button
                                onClick={prevTestimonial}
                                className="p-3 bg-white/5 hover:bg-[#3B82F6]/20 border border-white/10 hover:border-[#3B82F6]/50 rounded-full transition-all"
                            >
                                <ChevronLeft className="w-6 h-6 text-white" />
                            </button>
                            <button
                                onClick={nextTestimonial}
                                className="p-3 bg-white/5 hover:bg-[#3B82F6]/20 border border-white/10 hover:border-[#3B82F6]/50 rounded-full transition-all"
                            >
                                <ChevronRight className="w-6 h-6 text-white" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}