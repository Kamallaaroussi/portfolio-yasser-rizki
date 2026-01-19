"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X } from 'lucide-react';

const highlight = {
    id: 1,
    title: 'Career Highlights & Skills',
    date: '2024',
    // Image de football générique de haute qualité pour la miniature
    thumbnail: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=1000&auto=format&fit=crop',
    videoUrl: 'https://www.youtube.com/embed/furj4gPchxs',
    category: 'Highlights',
};

export default function HighlightsSection() {
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <section id="highlights" className="py-24 bg-[#1E293B] relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <span className="text-[#3B82F6] text-sm font-medium tracking-widest uppercase">Watch</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mt-2">Match Highlights</h2>
                    <div className="w-20 h-1 bg-[#3B82F6] mt-6 mx-auto" />
                </motion.div>

                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="group cursor-pointer relative aspect-video rounded-3xl overflow-hidden border-2 border-white/10 shadow-2xl"
                        onClick={() => setIsPlaying(true)}
                    >
                        {!isPlaying ? (
                            <>
                                <img
                                    src={highlight.thumbnail}
                                    alt={highlight.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="relative">
                                        <div className="absolute inset-0 bg-[#3B82F6] rounded-full blur opacity-50 animate-pulse" />
                                        <div className="relative p-6 bg-[#3B82F6] rounded-full transform group-hover:scale-110 transition-transform shadow-xl">
                                            <Play className="w-8 h-8 text-white fill-current ml-1" />
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/90 to-transparent">
                                    <h3 className="text-2xl font-bold text-white">{highlight.title}</h3>
                                    <p className="text-gray-300 mt-2">Watch full highlights reel</p>
                                </div>
                            </>
                        ) : (
                            <iframe
                                src={`${highlight.videoUrl}?autoplay=1`}
                                title={highlight.title}
                                className="w-full h-full"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        )}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}