"use client";

import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { AnimatedHeadline } from "./AnimatedHeadline";

export default function HeroSection() {
    const { scrollY } = useScroll();
    const shouldReduceMotion = useReducedMotion();

    // Conditionally disable parallax if user prefers reduced motion
    const y = useTransform(scrollY, [0, 500], [0, shouldReduceMotion ? 0 : 150]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    return (
        <section className="relative min-h-[100vh] flex flex-col items-center justify-center pt-[120px] pb-[120px] overflow-hidden bg-[#050505] selection:bg-purple-500/30">
            {/* Background Layers */}
            <div className="absolute inset-0 z-10 bg-mesh pointer-events-none" />
            <div
                className="absolute inset-0 z-20 opacity-30 pointer-events-none mix-blend-overlay"
                style={{ backgroundImage: 'url("/noise.svg")' }}
            />

            {/* Content Layer */}
            <motion.div
                style={{ y, opacity }}
                className="relative z-30 w-full max-w-[1100px] px-4 flex flex-col items-center justify-center mx-auto text-center"
            >
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.8, ease: "easeOut" }}
                    className="px-5 py-2 rounded-full border border-gray-800 bg-gray-900/50 backdrop-blur-sm text-gray-300 text-sm font-medium tracking-wide mb-[24px] shadow-sm flex items-center justify-center gap-2 mx-auto"
                >
                    <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                    Scaling global brands
                </motion.span>

                <AnimatedHeadline />

                <motion.p
                    initial={{ opacity: 0, y: 10, filter: "blur(5px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ delay: 0.7, duration: 1, ease: "easeOut" }}
                    className="text-base md:text-lg text-gray-400 mb-10 max-w-2xl leading-relaxed font-light"
                >
                    We build high-performance websites, scalable marketing systems, and high-converting video assets to dominate your market.
                </motion.p>

                {/* =========================================
                    AUTO-SCROLLING VIDEO MARQUEE
                    ========================================= */}
                <div
                    className="w-full max-w-[1400px] mx-auto relative overflow-hidden h-[160px] md:h-[220px] mb-10 px-[120px]"
                    style={{
                        WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
                        maskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)"
                    }}
                >
                    {/* Pure CSS Marquee Track */}
                    <div className="marquee-wrapper h-full flex items-center">
                        <div className="marquee-track h-full">
                            {/* 6 Original Videos + 6 Duplicated Videos = 12 Items for seamless loop */}
                            {[...Array(12)].map((_, i) => (
                                <div
                                    key={i}
                                    className="w-[240px] md:w-[320px] h-[160px] md:h-[220px] rounded-[16px] overflow-hidden shrink-0 border border-white/[0.08] bg-[#0A0A0A] relative flex items-center justify-center transition-all duration-[400ms] ease-out hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
                                >
                                    <video
                                        autoPlay
                                        muted
                                        loop
                                        playsInline
                                        className="w-full h-full object-cover opacity-[0.85] contrast-[1.05] saturate-[1.10]"
                                        poster={`https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&h=400&fit=crop&q=80&auto=format`}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <motion.button
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{
                        delay: 0.9,
                        type: "spring",
                        stiffness: 100,
                        damping: 15,
                        mass: 1
                    }}
                    className="group relative px-8 py-4 bg-white text-black font-semibold rounded-full shadow-[0_0_40px_rgba(255,255,255,0.15)] hover:shadow-[0_0_60px_rgba(255,255,255,0.3)] transition-shadow"
                >
                    <span className="relative z-10 flex items-center gap-2">
                        Book Strategy Call
                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </span>
                </motion.button>
            </motion.div>
        </section>
    );
}
