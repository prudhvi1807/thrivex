"use client";

import { motion } from "framer-motion";

export default function FinalCTASection() {
    return (
        <section className="py-[100px] px-4 md:px-6 bg-[#050505] relative z-20 flex justify-center">

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="w-full max-w-5xl rounded-[28px] bg-[#0E0E0E] border border-white/10 p-8 md:p-16 text-center relative overflow-hidden"
            >
                {/* Massive internal neon glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[560px] h-[560px] bg-primary opacity-[0.03] rounded-full blur-[80px] pointer-events-none" />

                <div className="relative z-10 w-full max-w-3xl mx-auto flex flex-col items-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-5 leading-tight">
                        Stop Delaying Your Growth. <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[rgba(251,255,10,0.5)]">
                            Start Today.
                        </span>
                    </h2>

                    <p className="text-gray-400 text-base font-light mb-8 max-w-lg">
                        Book a free strategy session. We'll audit your current funnels, map out a custom growth architecture, and show you exactly what's leaving money on the table.
                    </p>

                    <motion.a
                        href="https://wa.me/919381871936?text=Hi%20Thrivex,%20I%20would%20like%20to%20book%20a%20strategy%20call."
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ type: "spring", stiffness: 400, damping: 25 }}
                        className="px-7 py-3 bg-primary text-black font-bold text-base rounded-full shadow-[0_0_40px_rgba(251,255,10,0.3)] hover:shadow-[0_0_80px_rgba(251,255,10,0.5)] transition-shadow flex items-center gap-2"
                    >
                        Book Strategy Call
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </motion.a>
                </div>
            </motion.div>

        </section>
    );
}
