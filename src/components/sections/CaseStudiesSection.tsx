"use client";

import { motion } from "framer-motion";

const metrics = [
    {
        value: "280%",
        label: "Average Conversion Uplift",
        context: "Post-launch"
    },
    {
        value: "$4.2M",
        label: "Client Revenue Generated",
        context: "Q1-Q4 2023"
    },
    {
        value: "14ms",
        label: "TTFB Load Times",
        context: "Next.js Architecture"
    }
];

export default function CaseStudiesSection() {
    return (
        <section className="py-[100px] px-4 md:px-6 bg-[#0E0E0E] relative z-20 border-y border-white/[0.02]">
            <div className="max-w-7xl mx-auto">

                {/* Metric Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 divide-y md:divide-y-0 md:divide-x divide-white/10">

                    {metrics.map((metric, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{
                                duration: 0.8,
                                delay: idx * 0.1,
                                ease: [0.16, 1, 0.3, 1]
                            }}
                            className="flex flex-col items-center justify-center text-center pt-8 md:pt-0 first:pt-0"
                        >
                            <h3 className="text-4xl md:text-5xl font-bold text-primary tracking-tighter mb-3 shadow-sm">
                                {metric.value}
                            </h3>
                            <p className="text-white text-lg font-semibold mb-1">
                                {metric.label}
                            </p>
                            <p className="text-gray-500 text-xs font-medium tracking-wide">
                                {metric.context}
                            </p>
                        </motion.div>
                    ))}

                </div>

                {/* Highlight Card */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                    className="mt-16 p-6 md:p-10 rounded-[20px] bg-[#050505] border border-white/5 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8"
                >
                    {/* Subtle bg glow inside card */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary opacity-5 rounded-full blur-[80px] pointer-events-none" />

                    <div className="relative z-10 max-w-2xl">
                        <h4 className="text-primary font-mono text-xs tracking-widest uppercase mb-3">Featured Case Study</h4>
                        <h3 className="text-2xl md:text-3xl text-white font-bold leading-tight mb-4">
                            How we helped <span className="text-white decoration-primary underline decoration-2 underline-offset-4">FinTech Global</span> scale from 1k to 50k monthly active users.
                        </h3>
                        <p className="text-gray-400 text-base">
                            Completely rebuilt their legacy CRM using React and scaled their performance marketing loop, dropping CPL by 64%.
                        </p>
                    </div>

                    <div className="relative z-10 shrink-0">
                        <button className="px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold rounded-full transition-all flex items-center gap-2 group text-sm">
                            Read the Tear-down
                            <svg className="w-3 h-3 text-primary group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </button>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
