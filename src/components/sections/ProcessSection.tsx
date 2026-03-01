"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const steps = [
    {
        number: "01",
        title: "Discovery & Architecture",
        description: "We don't guess. We analyze your market, audit your current assets, and mathematically map out the exact funnels, copy, and features needed to win.",
    },
    {
        number: "02",
        title: "High-Fidelity Engineering",
        description: "Our engineers and designers build custom Next.js applications, high-converting video assets, and precise UI systems. No templates. No shortcuts.",
    },
    {
        number: "03",
        title: "Launch & Iterate",
        description: "We deploy the systems, monitor the analytics, and iteratively optimize the conversion rates. Scale happens when data replaces intuition.",
    }
];

export default function ProcessSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    });

    return (
        <section ref={containerRef} className="py-[100px] px-4 md:px-6 bg-[#050505] relative z-20">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-24">

                {/* Left Side: Sticky Title */}
                <div className="lg:w-1/3">
                    <div className="sticky top-40">
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-5 leading-tight"
                        >
                            The <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-600">
                                Methodology.
                            </span>
                        </motion.h2>
                        <p className="text-gray-400 text-base leading-relaxed max-w-sm">
                            A disciplined, three-step framework designed to eliminate risk and force growth.
                        </p>
                    </div>
                </div>

                {/* Right Side: Scrolling Steps */}
                <div className="lg:w-2/3 flex flex-col gap-16 lg:gap-24 pt-12 lg:pt-0">
                    {steps.map((step, idx) => {
                        // Using a simple whileInView for the active state to keep it clean
                        return (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0.3, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ margin: "-30% 0px -30% 0px", once: false }} // Activates when step hits the middle of viewport
                                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                className="relative pl-6 md:pl-10 border-l border-white/10"
                            >
                                {/* Neon connecting dot */}
                                <div className="absolute left-[-4px] top-2 w-[6px] h-[6px] rounded-full bg-primary shadow-[0_0_15px_rgba(251,255,10,0.6)]" />

                                <h3 className="text-primary font-mono text-lg mb-3 font-bold tracking-widest">
                                    {step.number}
                                </h3>
                                <h4 className="text-2xl font-semibold text-white mb-4">
                                    {step.title}
                                </h4>
                                <p className="text-gray-400 text-base leading-relaxed max-w-xl">
                                    {step.description}
                                </p>
                            </motion.div>
                        )
                    })}
                </div>

            </div>
        </section>
    );
}
