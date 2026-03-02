"use client";

import { motion } from "framer-motion";
import { AnimatedHeadline } from "./AnimatedHeadline";

const heroVideos = [
    "https://res.cloudinary.com/dwye1ye9z/video/upload/v1772469445/Recording_2026-03-02_215632_epx6vh.mp4",
    "https://res.cloudinary.com/dwye1ye9z/video/upload/v1772470116/Recording_2026-03-02_215731_jljxba.mp4",
    "https://res.cloudinary.com/dwye1ye9z/video/upload/v1772469875/Recording_2026-03-02_215620_japgdd.mp4",
];

export default function HeroSection() {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center pt-[120px] pb-[120px] overflow-hidden bg-[#050505]">

            {/* Background Mesh */}
            <div className="absolute inset-0 z-10 bg-mesh pointer-events-none" />

            {/* Noise Overlay */}
            <div
                className="absolute inset-0 z-20 opacity-30 pointer-events-none mix-blend-overlay"
                style={{ backgroundImage: 'url("/noise.svg")' }}
            />

            {/* Content */}
            <div className="relative z-30 w-full max-w-[1100px] px-4 flex flex-col items-center mx-auto text-center">

                {/* Badge */}
                <span className="px-5 py-2 rounded-full border border-gray-800 bg-gray-900/50 backdrop-blur-sm text-gray-300 text-sm font-medium tracking-wide mb-6 shadow-sm flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                    Scaling global brands
                </span>

                {/* Headline */}
                <AnimatedHeadline />

                {/* Description */}
                <p className="text-base md:text-lg text-gray-400 mb-12 max-w-2xl leading-relaxed font-light">
                    We build high-performance websites, scalable marketing systems, and
                    high-converting video assets to dominate your market.
                </p>

                {/* ===============================
            VIDEO MARQUEE SECTION
        =============================== */}

                <div
                    className="w-full max-w-[1400px] relative overflow-hidden h-[160px] md:h-[220px] mb-12"
                    style={{
                        WebkitMaskImage:
                            "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
                        maskImage:
                            "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
                    }}
                >
                    <div className="marquee-track h-full flex items-center gap-8">

                        {[...Array(12)].map((_, i) => (
                            <div
                                key={`video-${i}`}
                                className="w-[240px] md:w-[320px] h-[160px] md:h-[220px] rounded-[16px] overflow-hidden shrink-0 border border-white/[0.08] bg-[#0A0A0A] relative transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
                            >
                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10 pointer-events-none" />

                                <video
                                    src={heroVideos[i % 3]}
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    preload="auto"
                                    disablePictureInPicture
                                    controls={false}
                                    className="w-full h-full object-cover opacity-[0.9] contrast-[1.05] saturate-[1.1]"
                                    style={{ backfaceVisibility: "hidden" }}
                                />
                            </div>
                        ))}

                    </div>
                </div>

                {/* CTA */}
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-8 py-4 bg-white text-black font-semibold rounded-full shadow-[0_0_40px_rgba(255,255,255,0.15)] hover:shadow-[0_0_60px_rgba(255,255,255,0.3)] transition-all"
                >
                    Book Strategy Call
                </motion.button>

            </div>
        </section>
    );
}