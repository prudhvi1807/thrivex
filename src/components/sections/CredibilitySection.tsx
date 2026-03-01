"use client";

import { motion } from "framer-motion";

const logos = [
    "Acme Corp", "GlobalTech", "Nexus", "Quantum", "Apex Media", "Stratos", "Zephyr Brands",
    "Acme Corp", "GlobalTech", "Nexus", "Quantum", "Apex Media", "Stratos", "Zephyr Brands" // Duplicated to ensure seamless marquee loop
];

export default function CredibilitySection() {
    return (
        <section className="relative py-16 border-y border-white/[0.05] bg-[#050505] overflow-hidden flex flex-col items-center">

            {/* Subtle intro text */}
            <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-gray-500 text-xs font-medium tracking-widest uppercase mb-8 text-center"
            >
                Trusted by high-growth companies
            </motion.p>

            {/* Marquee Wrapper with edge masks */}
            <div className="relative w-full max-w-7xl mx-auto overflow-hidden">
                {/* Left/Right fading gradients to blend the marquee smoothly into the background */}
                <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />

                {/* The scrolling track */}
                <motion.div
                    animate={{ x: ["0%", "-50%"] }} // Translate left by exactly half the width
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 30, // 30 seconds for a full loop
                    }}
                    className="flex whitespace-nowrap items-center w-max"
                >
                    {logos.map((logo, i) => (
                        <div key={i} className="flex items-center justify-center min-w-[200px] px-6">
                            {/* 
                  Using text as placeholders for logos. 
                  In production, replace with <img src={logo.src} /> 
                */}
                            <span className="text-base md:text-lg font-bold text-gray-700/60 font-mono tracking-tight grayscale opacity-80 hover:opacity-100 hover:text-gray-400 transition-all duration-300">
                                {logo}
                            </span>
                        </div>
                    ))}
                </motion.div>
            </div>

        </section>
    );
}
