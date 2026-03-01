"use client";

import { motion, EasingFunction } from "framer-motion";
import { Plus } from "lucide-react";

// Standard unified easing curve for the "expensive" feel
const customEase: any = [0.16, 1, 0.3, 1];

export default function ServicesSection() {
    return (
        <section className="py-[100px] px-4 md:px-6 bg-[#050505] relative z-20">
            <div className="max-w-[1280px] mx-auto">

                {/* Header Title */}
                <div className="mb-14">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: customEase }}
                        className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight"
                    >
                        The Growth <span className="text-gray-600">Infrastructure.</span>
                    </motion.h2>
                </div>

                {/* 4-Card CSS Grid Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-7">

                    {/* =========================================
              CARD 1: Web Engine (Anchored & Centered)
              ========================================= */}
                    <div className="lg:col-span-3 flex justify-center w-full">
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.8, ease: customEase, delay: 0.1 }}
                            whileHover={{ y: -6 }}
                            className="w-full max-w-[1000px] group relative rounded-[20px] bg-[#0E0E0E] border border-white/[0.06] hover:border-white/[0.15] hover:bg-[#121212] transition-colors duration-500 overflow-hidden flex flex-col md:flex-row mx-auto"
                        >
                            {/* The Background Number */}
                            <div className="absolute -top-10 -right-4 md:top-[-20px] md:right-10 text-[100px] md:text-[150px] font-extrabold text-white opacity-[0.03] select-none pointer-events-none leading-none z-0">
                                01
                            </div>

                            {/* Content Side */}
                            <div className="relative z-10 p-7 md:p-8 flex flex-col justify-center w-full md:w-[60%] border-b md:border-b-0 md:border-r border-white/5">
                                <h3 className="text-2xl md:text-[24px] font-bold text-white tracking-tight mb-4">
                                    High-Performance Web Engineering
                                </h3>
                                <p className="text-gray-400 text-[14px] md:text-[16px] leading-relaxed mb-7 max-w-lg">
                                    We build lightning-fast, conversion-focused business websites designed for scale.
                                </p>

                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                                    {[
                                        "Custom UI/UX Systems",
                                        "Performance Optimization",
                                        "SEO-Ready Architecture",
                                        "Scalable Tech Stack"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-white/70 text-[12px] md:text-[14px] font-medium tracking-wide">
                                            <Plus className="w-3 h-3 text-primary" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>

                                <div>
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.98 }}
                                        transition={{ type: "spring", stiffness: 400, damping: 25 }}
                                        className="px-5 py-2.5 bg-primary text-black font-semibold text-base rounded-full shadow-[0_0_40px_rgba(251,255,10,0.25)] hover:shadow-[0_0_60px_rgba(251,255,10,0.4)] transition-shadow inline-flex items-center gap-2"
                                    >
                                        Start Your Growth
                                        <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </motion.button>
                                </div>
                            </div>

                            {/* Visual Side (Mock Browser Window) */}
                            <div className="relative z-10 w-full md:w-[40%] p-7 flex items-center justify-center overflow-hidden">
                                {/* Abstract mesh behind the visual */}
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent blur-[80px]" />

                                {/* Wireframe UI representation */}
                                <div className="w-full h-full max-h-[300px] rounded-2xl border border-white/10 bg-[#0A0A0A] shadow-2xl relative flex flex-col overflow-hidden">
                                    {/* Browser bar */}
                                    <div className="h-10 border-b border-white/10 flex items-center px-4 gap-2 bg-white/[0.02]">
                                        <div className="w-3 h-3 rounded-full bg-white/20" />
                                        <div className="w-3 h-3 rounded-full bg-white/20" />
                                        <div className="w-3 h-3 rounded-full bg-white/20" />
                                    </div>
                                    {/* Content representation */}
                                    <div className="p-6 flex flex-col gap-4 flex-1">
                                        <div className="w-3/4 h-8 rounded bg-white/[0.05]" />
                                        <div className="w-1/2 h-4 rounded bg-primary/20" />
                                        <div className="grid grid-cols-2 gap-4 mt-auto">
                                            <div className="h-24 rounded bg-white/[0.03]" />
                                            <div className="h-24 rounded bg-white/[0.03]" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* =========================================
              CARD 2: Digital Marketing
              ========================================= */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.8, ease: customEase, delay: 0.2 }}
                        whileHover={{ y: -6 }}
                        className="relative lg:col-span-1 p-7 pb-8 rounded-[20px] bg-[#0E0E0E] border border-white/[0.06] hover:border-white/[0.15] hover:bg-[#121212] transition-colors duration-500 overflow-hidden flex flex-col"
                    >
                        <div className="absolute top-3 right-4 md:top-4 md:right-6 text-[80px] font-extrabold text-white opacity-[0.03] select-none pointer-events-none leading-none z-0">
                            02
                        </div>

                        <div className="relative z-10 flex flex-col h-full">
                            <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight mb-5 pr-8">
                                Data-Driven Growth Marketing
                            </h3>
                            <ul className="flex flex-col gap-3 mt-auto">
                                {[
                                    "Paid Ad Architecture",
                                    "Organic Search Strategy",
                                    "Conversion Funnel Optimization",
                                    "Automated Lead Generation"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-white/70 text-[13px]">
                                        <Plus className="w-3 h-3 text-gray-500" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>

                    {/* =========================================
              CARD 3: Video Production
              ========================================= */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.8, ease: customEase, delay: 0.3 }}
                        whileHover={{ y: -6 }}
                        className="relative lg:col-span-1 p-7 pb-8 rounded-[20px] bg-[#0E0E0E] border border-white/[0.06] hover:border-white/[0.15] hover:bg-[#121212] transition-colors duration-500 overflow-hidden flex flex-col"
                    >
                        <div className="absolute top-3 right-4 md:top-4 md:right-6 text-[80px] font-extrabold text-white opacity-[0.03] select-none pointer-events-none leading-none z-0">
                            03
                        </div>

                        <div className="relative z-10 flex flex-col h-full">
                            <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight mb-5 pr-8">
                                High-Converting Video Assets
                            </h3>
                            <ul className="flex flex-col gap-3 mt-auto">
                                {[
                                    "Direct-Response Reels & Shorts",
                                    "Performance VSL Production",
                                    "Subtle Motion Graphics",
                                    "Foundational Storytelling"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-white/70 text-[13px]">
                                        <Plus className="w-3 h-3 text-gray-500" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>

                    {/* =========================================
              CARD 4: Business Automation
              ========================================= */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.8, ease: customEase, delay: 0.4 }}
                        whileHover={{ y: -6 }}
                        className="relative lg:col-span-1 p-7 pb-8 rounded-[20px] bg-[#0E0E0E] border border-white/[0.06] hover:border-white/[0.15] hover:bg-[#121212] transition-colors duration-500 overflow-hidden flex flex-col"
                    >
                        <div className="absolute top-3 right-4 md:top-4 md:right-6 text-[80px] font-extrabold text-white opacity-[0.03] select-none pointer-events-none leading-none z-0">
                            04
                        </div>

                        <div className="relative z-10 flex flex-col h-full">
                            <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight mb-5 pr-8">
                                Smart Automation Systems
                            </h3>
                            <ul className="flex flex-col gap-3 mt-auto">
                                {[
                                    "Complex WhatsApp Flows",
                                    "Deep CRM Architecture",
                                    "Autonomous Lead Nurturing",
                                    "Sales Pipeline Integrity setups"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-white/70 text-[13px]">
                                        <Plus className="w-3 h-3 text-gray-500" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
