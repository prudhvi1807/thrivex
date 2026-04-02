"use client";

import { motion } from "framer-motion";
import { Plus } from "lucide-react";

// Standard unified easing curve for the "expensive" feel
const customEase: any = [0.16, 1, 0.3, 1];

export default function ServicesSection() {
    return (
        <section className="py-[120px] px-4 md:px-8 bg-[#050505] relative z-20">
            <div className="max-w-[1280px] mx-auto">

                {/* Header Title */}
                <div className="mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: customEase }}
                        className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight"
                    >
                        The Systems That <span className="text-gray-600">Scale You.</span>
                    </motion.h2>
                </div>

                {/* 4-Card CSS Grid Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* =========================================
              CARD 1: Web Engine
              ========================================= */}
                    <div className="lg:col-span-3 flex w-full">
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.8, ease: customEase, delay: 0.1 }}
                            whileHover={{ y: -6 }}
                            className="w-full group relative rounded-[20px] bg-[#0E0E0E] border border-white/[0.06] hover:border-white/[0.15] hover:bg-[#121212] transition-colors duration-500 overflow-hidden flex flex-col md:flex-row"
                        >
                            {/* The Background Number */}
                            <div className="absolute top-4 right-6 md:-top-6 md:-left-4 text-[120px] md:text-[200px] font-extrabold text-white opacity-[0.02] select-none pointer-events-none leading-none z-0">
                                01
                            </div>

                            {/* Content Side */}
                            <div className="relative z-10 p-8 md:p-12 flex flex-col justify-center w-full md:w-[55%] border-b md:border-b-0 md:border-r border-white/5">
                                <h3 className="text-2xl md:text-[28px] font-bold text-white tracking-tight mb-4">
                                    High-Performance Web Development
                                </h3>
                                <p className="text-gray-400 text-[15px] md:text-[16px] leading-relaxed mb-8 max-w-lg">
                                    We design and build fast, conversion-focused websites engineered to turn visitors into customers.
                                </p>

                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 mb-10">
                                    {[
                                        "Custom UI/UX Design",
                                        "SEO-Optimized Architecture",
                                        "Speed & Performance Engineering",
                                        "Scalable Tech Stack (Next.js & Modern Frameworks)"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-white/70 text-[13px] md:text-[14px] font-medium tracking-wide">
                                            <Plus className="w-4 h-4 text-primary shrink-0 mt-[2px]" />
                                            <span className="leading-snug">{item}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div>
                                    <motion.a
                                        href="https://wa.me/919381871936?text=Hi%20Thrivex,%20I%20would%20like%20to%20book%20a%20strategy%20call."
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.98 }}
                                        transition={{ type: "spring", stiffness: 400, damping: 25 }}
                                        className="inline-flex px-6 py-3 bg-primary text-black font-semibold text-sm md:text-base rounded-full shadow-[0_0_40px_rgba(251,255,10,0.25)] hover:shadow-[0_0_60px_rgba(251,255,10,0.4)] transition-shadow items-center gap-2"
                                    >
                                        Start Your Growth
                                        <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </motion.a>
                                </div>
                            </div>

                            {/* Visual Side (Mock Browser Window) */}
                            <div className="relative z-10 w-full md:w-[45%] p-8 flex items-center justify-center overflow-hidden">
                                {/* Abstract mesh behind the visual */}
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent blur-[80px]" />

                                {/* Video UI representation */}
                                <div className="w-full max-w-sm h-[260px] md:h-[320px] rounded-[16px] border border-white/10 bg-[#0A0A0A] shadow-2xl relative overflow-hidden">
                                    {/* Browser bar dots (Absolute) */}
                                    <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
                                        <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                                        <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                                        <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                                    </div>

                                    {/* Video */}
                                    <video
                                        src="https://res.cloudinary.com/dxtdv6etl/video/upload/q_auto/f_auto/v1775130158/jhgc_uux1u1.mp4"
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        className="absolute inset-0 w-full h-full object-cover z-10"
                                    />
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* =========================================
              CARD 2: Growth Marketing
              ========================================= */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.8, ease: customEase, delay: 0.2 }}
                        whileHover={{ y: -6 }}
                        className="relative lg:col-span-1 p-8 md:p-10 rounded-[20px] bg-[#0E0E0E] border border-white/[0.06] hover:border-white/[0.15] hover:bg-[#121212] transition-colors duration-500 overflow-hidden flex flex-col"
                    >
                        <div className="absolute top-4 right-6 text-[80px] md:text-[100px] font-extrabold text-white opacity-[0.03] select-none pointer-events-none leading-none z-0">
                            02
                        </div>

                        <div className="relative z-10 flex flex-col h-full">
                            <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight mb-4 pr-8">
                                Data-Driven Growth Marketing
                            </h3>
                            <p className="text-gray-400 text-[14px] md:text-[15px] leading-relaxed mb-8">
                                We build measurable marketing systems that attract, convert, and scale your ideal audience.
                            </p>
                            <ul className="flex flex-col gap-4 mt-auto">
                                {[
                                    "Paid Ad Strategy & Management",
                                    "Organic Growth Strategy",
                                    "Funnel Optimization",
                                    "Lead Generation Systems"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-white/70 text-[14px]">
                                        <Plus className="w-4 h-4 text-gray-500 shrink-0 mt-[2px]" />
                                        <span className="leading-snug">{item}</span>
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
                        className="relative lg:col-span-1 p-8 md:p-10 rounded-[20px] bg-[#0E0E0E] border border-white/[0.06] hover:border-white/[0.15] hover:bg-[#121212] transition-colors duration-500 overflow-hidden flex flex-col"
                    >
                        <div className="absolute top-4 right-6 text-[80px] md:text-[100px] font-extrabold text-white opacity-[0.03] select-none pointer-events-none leading-none z-0">
                            03
                        </div>

                        <div className="relative z-10 flex flex-col h-full">
                            <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight mb-4 pr-8">
                                Professional Video Editing
                            </h3>
                            <p className="text-gray-400 text-[14px] md:text-[15px] leading-relaxed mb-8">
                                We create high-impact video content that builds authority and drives engagement across platforms.
                            </p>
                            <ul className="flex flex-col gap-4 mt-auto">
                                {[
                                    "Short-Form Reels & Social Edits",
                                    "YouTube & Long-Form Editing",
                                    "Ad Creatives",
                                    "Motion Graphics & Enhancements"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-white/70 text-[14px]">
                                        <Plus className="w-4 h-4 text-gray-500 shrink-0 mt-[2px]" />
                                        <span className="leading-snug">{item}</span>
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
                        className="relative lg:col-span-1 p-8 md:p-10 rounded-[20px] bg-[#0E0E0E] border border-white/[0.06] hover:border-white/[0.15] hover:bg-[#121212] transition-colors duration-500 overflow-hidden flex flex-col"
                    >
                        <div className="absolute top-4 right-6 text-[80px] md:text-[100px] font-extrabold text-white opacity-[0.03] select-none pointer-events-none leading-none z-0">
                            04
                        </div>

                        <div className="relative z-10 flex flex-col h-full">
                            <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight mb-4 pr-8">
                                Smart Automation Systems
                            </h3>
                            <p className="text-gray-400 text-[14px] md:text-[15px] leading-relaxed mb-8">
                                We implement automated workflows that capture, nurture, and convert leads without manual effort.
                            </p>
                            <ul className="flex flex-col gap-4 mt-auto">
                                {[
                                    "WhatsApp & CRM Automation",
                                    "Lead Nurturing Sequences",
                                    "Sales Pipeline Systems",
                                    "Marketing Integrations"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-white/70 text-[14px]">
                                        <Plus className="w-4 h-4 text-gray-500 shrink-0 mt-[2px]" />
                                        <span className="leading-snug">{item}</span>
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
