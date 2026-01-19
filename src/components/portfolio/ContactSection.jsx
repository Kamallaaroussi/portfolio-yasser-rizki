"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Instagram, Youtube, Linkedin } from 'lucide-react';

const contactInfo = [
    {
        icon: Mail,
        label: 'Email',
        value: 'yasser.rizki2004@gmail.com',
        link: 'mailto:yasser.rizki2004@gmail.com',
    },
    {
        icon: Phone,
        label: 'Phone',
        value: '+1 518 971 6353',
        link: 'tel:+15189716353',
    },
    {
        icon: MapPin,
        label: 'Location',
        value: 'Albany, New York, United States',
        link: null,
    },
];

const socialLinks = [
    {
        icon: Instagram,
        label: 'Instagram',
        href: 'https://www.instagram.com/yasserrizki?igsh=cXZnZXNmcm5kZ3Vr',
        followers: 'Follow'
    },
    {
        icon: Youtube,
        label: 'YouTube',
        href: 'https://youtube.com/@yasserrizki9924?si=ldFvTchUTI-ripkw',
        followers: 'Subscribe'
    },
    {
        icon: Linkedin,
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/yasser-rizki-b679a1287?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
        followers: 'Connect'
    },
];

export default function ContactSection() {
    return (
        <section id="contact" className="py-24 bg-[#1E293B] relative">
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] to-transparent" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-[#3B82F6] text-sm font-medium tracking-widest uppercase">Connect</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mt-2">Get In Touch</h2>
                    <div className="w-20 h-1 bg-[#3B82F6] mt-6 mx-auto" />
                </motion.div>

                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-12"
                    >
                        {/* Contact Info Cards */}
                        <div className="grid md:grid-cols-3 gap-6">
                            {contactInfo.map((info, index) => (
                                <motion.a
                                    key={index}
                                    href={info.link}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className={`flex flex-col items-center text-center gap-4 p-6 bg-[#1E293B] border border-white/5 rounded-2xl hover:border-[#3B82F6]/30 transition-all group ${!info.link ? 'cursor-default' : 'cursor-pointer'}`}
                                >
                                    <div className="p-4 bg-[#3B82F6]/10 rounded-xl group-hover:bg-[#3B82F6]/20 transition-colors">
                                        <info.icon className="w-8 h-8 text-[#3B82F6]" />
                                    </div>
                                    <div>
                                        <p className="text-gray-500 text-sm uppercase tracking-wider">{info.label}</p>
                                        <p className="text-white font-medium mt-1">{info.value}</p>
                                    </div>
                                </motion.a>
                            ))}
                        </div>

                        {/* Social Links */}
                        <div className="bg-gradient-to-br from-[#1E293B] to-[#0F172A] border border-white/10 rounded-3xl p-8">
                            <h3 className="text-xl font-bold text-white mb-6 text-center">Follow My Journey</h3>
                            <div className="grid grid-cols-3 gap-4">
                                {socialLinks.map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex flex-col items-center gap-3 p-4 bg-white/5 hover:bg-[#3B82F6]/10 border border-white/5 hover:border-[#3B82F6]/30 rounded-xl transition-all group"
                                    >
                                        <social.icon className="w-6 h-6 text-gray-400 group-hover:text-[#3B82F6] transition-colors" />
                                        <div className="text-center">
                                            <p className="text-white text-sm font-medium">{social.label}</p>
                                            <p className="text-gray-500 text-xs">{social.followers}</p>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}