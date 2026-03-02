"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const teamMembers = [
    {
        name: "Srishanth",
        role: "Co-Founder and automation head",
        description: "Architecting scalable, high-performance digital systems and complex engineering solutions.",
        image: "https://res.cloudinary.com/dwye1ye9z/image/upload/v1772458038/thrivex-03_m6bp2u.png",
    },
    {
        name: "Prudhvi",
        role: "Co-Founder and technical head",
        description: "Building high-performance web and mobile applications that deliver exceptional user experiences and scalable infrastructure.",
        image: "https://res.cloudinary.com/dwye1ye9z/image/upload/v1772461255/Gemini_Generated_Image_4ng9fl4ng9fl4ng9_miv4ob.png",
    },
    {
        name: "Adithya",
        role: "Co-Founder and marketing head",
        description: "Scaling digital products through data-driven marketing, conversion rate optimization, and brand positioning strategies.",
        image: "https://res.cloudinary.com/dwye1ye9z/image/upload/v1772458056/vex-2_slxkyc.png",
    }
];

export default function TeamSection() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % teamMembers.length);
        }, 4000);
        return () => clearInterval(timer);
    }, []);

    const member = teamMembers[currentIndex];

    return (
        <section className="relative py-[120px] bg-[#050505] overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 md:px-12">
                {/* Section Header */}
                <div className="mb-12 md:mb-20 text-center md:text-left">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-gray-300 text-xs font-semibold uppercase tracking-widest mb-6"
                    >
                        Our Experts
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                        className="text-[clamp(36px,5vw,56px)] font-bold text-white tracking-tight leading-[1.1] max-w-2xl"
                    >
                        The minds behind the <span className="highlight-text">growth.</span>
                    </motion.h2>
                </div>

                {/* Team Member Carousel */}
                <div className="flex flex-col relative h-[500px] md:h-[400px]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.8, ease: "easeInOut" }}
                            className="group flex flex-col md:flex-row items-center gap-10 md:gap-16 w-full"
                        >
                            {/* Image Container */}
                            <div className="w-full md:w-[45%] h-[350px] md:h-full aspect-[4/5] md:aspect-square overflow-hidden rounded-[16px] relative shrink-0">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10 pointer-events-none" />
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    className="object-cover object-top filter contrast-[1.05] opacity-90 transition-transform duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                            </div>

                            {/* Content */}
                            <div className="w-full md:w-[55%] flex flex-col items-start text-left py-4">
                                <h3 className="text-3xl md:text-4xl font-bold text-primary mb-2">
                                    {member.name}
                                </h3>
                                <p className="text-sm tracking-widest uppercase font-semibold text-gray-500 mb-6">
                                    {member.role}
                                </p>
                                <p className="text-lg md:text-xl text-gray-400 font-light leading-relaxed max-w-xl">
                                    {member.description}
                                </p>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
