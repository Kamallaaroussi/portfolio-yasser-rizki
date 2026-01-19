"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Dumbbell, Award } from 'lucide-react';

const education = [
    {
        type: 'Academic',
        title: 'Business Administration Degree',
        institution: 'Bryant and Stratton College & ENCG El Jadida',
        period: '2021 - 2024',
        description: 'Joint program with National School of Business and Management Of El Jadida.',
        icon: GraduationCap,
    },
];

const training = [
    {
        type: 'Football',
        title: 'Wydad Athletic Club',
        institution: 'Youth Academy',
        period: '2010 - 2014',
        description: 'Youth Academy training and development',
        icon: Award,
    },
    {
        type: 'Football',
        title: 'Raja Club Athletic',
        institution: 'Youth Academy',
        period: '2014 - 2018',
        description: 'Youth Academy training and development',
        icon: Dumbbell,
    },
    {
        type: 'Football',
        title: 'Racing Athletic Club',
        institution: 'U15 To U19',
        period: '2018 - 2023',
        description: 'Youth development and competition',
        icon: Dumbbell,
    },
    {
        type: 'Football',
        title: 'Sporting Club Chabab Mohammedia',
        institution: 'Professional Training',
        period: '2023 - Present',
        description: 'Training with Botola Pro League team',
        icon: Award,
    },
];

const CardItem = ({ item, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="group"
    >
        <div className="h-full bg-gradient-to-br from-[#1E293B] to-[#0F172A] border border-white/5 rounded-2xl p-6 hover:border-[#3B82F6]/30 transition-all duration-500 hover:transform hover:scale-[1.02]">
            <div className="flex items-start gap-4">
                <div className="p-3 bg-[#3B82F6]/10 rounded-xl group-hover:bg-[#3B82F6]/20 transition-colors">
                    <item.icon className="w-6 h-6 text-[#3B82F6]" />
                </div>
                <div className="flex-1">
                    <span className="text-xs text-[#3B82F6] uppercase tracking-wider font-medium">{item.type}</span>
                    <h3 className="text-lg font-semibold text-white mt-1">{item.title}</h3>
                    <p className="text-gray-400 text-sm mt-1">{item.institution}</p>
                    <p className="text-gray-500 text-xs mt-1">{item.period}</p>
                    <p className="text-gray-400 text-sm mt-3 leading-relaxed">{item.description}</p>
                </div>
            </div>
        </div>
    </motion.div>
);

export default function EducationSection() {
    return (
        <section id="education" className="py-24 bg-[#1E293B] relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-[#3B82F6] text-sm font-medium tracking-widest uppercase">Background</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mt-2">Education & Training</h2>
                    <div className="w-20 h-1 bg-[#3B82F6] mt-6 mx-auto" />
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Education */}
                    <div>
                        <motion.h3
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-2xl font-bold text-white mb-8 flex items-center gap-3"
                        >
                            <GraduationCap className="w-6 h-6 text-[#3B82F6]" />
                            Academic Background
                        </motion.h3>
                        <div className="space-y-6">
                            {education.map((item, index) => (
                                <CardItem key={index} item={item} index={index} />
                            ))}
                        </div>
                    </div>

                    {/* Training */}
                    <div>
                        <motion.h3
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-2xl font-bold text-white mb-8 flex items-center gap-3"
                        >
                            <Dumbbell className="w-6 h-6 text-[#3B82F6]" />
                            Professional Training
                        </motion.h3>
                        <div className="space-y-6">
                            {training.map((item, index) => (
                                <CardItem key={index} item={item} index={index} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}