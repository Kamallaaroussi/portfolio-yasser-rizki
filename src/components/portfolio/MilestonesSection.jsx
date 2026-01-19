"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Star, Target, Flag } from 'lucide-react';

const milestones = [
    {
        year: '2010',
        title: 'Wydad Athletic Club',
        description: 'Started playing with the academy of Wydad Athletic Club.',
        icon: Star,
    },
    {
        year: '2014',
        title: 'Raja Athletic Club',
        description: 'Playing for Raja Athletic Club academy.',
        icon: Trophy,
    },
    {
        year: '2018',
        title: 'Racing Athletic Club',
        description: 'Got scouted and started playing for the U15 of Racing Athletic Club.',
        icon: Target,
    },
    {
        year: '2023',
        title: 'SCCM (Botola Pro)',
        description: 'Started Training with Sporting Club Chabab Mohammédia, a Botola Pro League One team in Morocco.',
        icon: Flag,
    },
];

export default function MilestonesSection() {
    return (
        <section id="milestones" className="py-24 bg-[#0F172A] relative overflow-hidden">
            {/* Background accent */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#3B82F6]/5 to-transparent" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="mb-16">
                    <span className="text-[#3B82F6] text-sm font-medium tracking-widest uppercase">Journey</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mt-2">Career Milestones</h2>
                    <div className="w-20 h-1 bg-[#3B82F6] mt-6" />
                </div>

                <div className="relative">
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#3B82F6] via-[#3B82F6]/50 to-transparent" />

                    <div className="space-y-12">
                        {milestones.map((milestone, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                    } flex-row`}
                            >
                                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                                    <div className="bg-[#1E293B] border border-white/10 rounded-2xl p-6 hover:border-[#3B82F6]/30 transition-all duration-300 group">
                                        <span className="text-[#3B82F6] text-3xl font-bold">{milestone.year}</span>
                                        <h3 className="text-xl font-semibold text-white mt-2">{milestone.title}</h3>
                                        <p className="text-gray-400 mt-2 leading-relaxed">{milestone.description}</p>
                                    </div>
                                </div>

                                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-[#3B82F6] rounded-full flex items-center justify-center z-10 shadow-lg shadow-[#3B82F6]/30">
                                    <milestone.icon className="w-4 h-4 text-white" />
                                </div>

                                <div className="hidden md:block md:w-1/2" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}