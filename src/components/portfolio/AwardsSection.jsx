"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Medal, Star, Award } from 'lucide-react';

const awards = [
    {
        title: 'U15 League Champion',
        year: '2018-2019',
        organization: 'Racing Athletic Club',
        description: 'Team Top Scorer with 8 goals',
        icon: Trophy,
        featured: true,
    },
    {
        title: 'U17 League Champion',
        year: '2019-2020',
        organization: 'Racing Athletic Club',
        description: 'League Championship Winner',
        icon: Award,
        featured: true,
    },
    {
        title: '3 Playoff Appearances',
        year: '2018-2023',
        organization: 'Racing Athletic Club',
        description: 'Promotion/Relegation Playoffs',
        icon: Star,
        featured: false,
    },
    {
        title: 'U19 League Runner-up',
        year: '2022-2023',
        organization: 'Racing Athletic Club',
        description: '2nd Place finish in the U19 season',
        icon: Medal,
        featured: false,
    },
    {
        title: 'National Team Selection',
        year: 'Honour',
        organization: 'Morocco Football Federation',
        description: 'Invited to tryout with the U15 National Team Of Morocco',
        icon: Flag,
        featured: true, // Mis en avant car c'est un honneur national
    },
];
import { Flag } from 'lucide-react'; // Ajout de l'import Flag manquant ci-dessus

export default function AwardsSection() {
    const featuredAwards = awards.filter(a => a.featured);
    const otherAwards = awards.filter(a => !a.featured);

    return (
        <section id="awards" className="py-24 bg-[#0F172A] relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#3B82F6]/5 rounded-full blur-3xl" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-[#3B82F6] text-sm font-medium tracking-widest uppercase">Recognition</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mt-2">Awards & Honours</h2>
                    <div className="w-20 h-1 bg-[#3B82F6] mt-6 mx-auto" />
                </motion.div>

                {/* Featured Awards */}
                <div className="grid md:grid-cols-3 gap-8 mb-12">
                    {featuredAwards.map((award, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="relative group"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-[#3B82F6]/20 to-[#3B82F6]/5 rounded-3xl blur-xl group-hover:blur-2xl transition-all" />
                            <div className="relative h-full bg-gradient-to-br from-[#1E293B] to-[#0F172A] border border-[#3B82F6]/30 rounded-3xl p-8 hover:border-[#3B82F6]/50 transition-all flex flex-col justify-between">
                                <div>
                                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#3B82F6]/20 rounded-full mb-4">
                                        <Star className="w-3 h-3 text-[#3B82F6]" />
                                        <span className="text-[#3B82F6] text-xs font-medium">Featured</span>
                                    </div>
                                    <h3 className="text-2xl font-bold text-white">{award.title}</h3>
                                    <p className="text-[#3B82F6] font-medium mt-1">{award.organization} • {award.year}</p>
                                    <p className="text-gray-400 mt-3">{award.description}</p>
                                </div>
                                <div className="mt-6 p-4 bg-[#3B82F6]/10 rounded-2xl w-fit">
                                    <award.icon className="w-8 h-8 text-[#3B82F6]" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Other Awards Grid */}
                <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    {otherAwards.map((award, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-[#1E293B] border border-white/5 rounded-2xl p-6 hover:border-[#3B82F6]/30 transition-all group flex items-start gap-4"
                        >
                            <div className="p-3 bg-white/5 rounded-xl group-hover:bg-[#3B82F6]/10 transition-colors">
                                <award.icon className="w-6 h-6 text-[#3B82F6]" />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-white">{award.title}</h3>
                                <p className="text-[#3B82F6] text-sm mt-1">{award.year}</p>
                                <p className="text-gray-500 text-sm mt-1">{award.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}