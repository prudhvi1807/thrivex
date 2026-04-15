"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
    { name: "About", href: "#hero" },
    { name: "Services", href: "#services" },
    { name: "Work", href: "#case-studies" },
    { name: "Process", href: "#process" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <motion.nav
                initial={{ y: -100, opacity: 0, x: "-50%" }}
                animate={{ y: 0, opacity: 1, x: "-50%" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                style={{
                    // Hardware acceleration for the initial drop-in
                    willChange: "transform, opacity",
                }}
                className={`fixed top-6 left-1/2 z-50 w-[90%] max-w-[1200px] flex items-center justify-between px-6 py-3 rounded-[40px] border border-white/[0.06] backdrop-blur-[20px] transition-all duration-400 ease-in-out ${scrolled
                    ? "bg-[rgba(10,10,10,0.8)] shadow-[0_10px_40px_rgba(0,0,0,0.5)] scale-[0.98]" // Micro-shrink and darken
                    : "bg-[rgba(10,10,10,0.6)] shadow-none scale-100"
                    }`}
            >
                {/* Left: Brand */}
                <div className="flex items-center">
                    <span className="text-white font-bold text-base tracking-wider uppercase pl-2">
                        Thrivex
                    </span>
                </div>

                {/* Center: Desktop Links */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <motion.a
                            key={link.name}
                            href={link.href}
                            whileHover={{
                                scale: 1.05,
                                color: "#ffffff",
                                textShadow: "0px 0px 12px rgba(251,255,10,0.4)"
                            }}
                            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                            className="text-[14px] font-medium text-white/70 block"
                        >
                            {link.name}
                        </motion.a>
                    ))}
                </div>

                {/* Right: CTA & Mobile Hamburger */}
                <div className="flex items-center gap-4">
                    <motion.a
                        href="https://wa.me/919381871936?text=Hi%20Thrivex,%20I%20would%20like%20to%20book%20a%20strategy%20call."
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{
                            scale: 1.05,
                            y: -2,
                            boxShadow: "0px 0px 40px rgba(251,255,10,0.5)"
                        }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="hidden sm:flex items-center justify-center px-[22px] py-[10px] bg-primary text-black font-semibold text-sm rounded-full shadow-[0_0_20px_rgba(251,255,10,0.25)]"
                    >
                        Book a Call
                    </motion.a>

                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={() => setMobileMenuOpen(true)}
                        className="md:hidden text-white/70 hover:text-white p-2 transition-colors"
                        aria-label="Open Menu"
                    >
                        <Menu className="w-6 h-6" />
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Slide-in Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm md:hidden"
                    >
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                            className="absolute top-0 right-0 bottom-0 w-[80%] max-w-[400px] bg-[#0A0A0A] border-l border-white/10 p-8 flex flex-col"
                        >
                            <div className="flex justify-end mb-12">
                                <button
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="p-2 rounded-full bg-white/5 border border-white/10 text-white/70 hover:text-white transition-colors"
                                >
                                    <X className="w-6 h-6" />
                                </button>
                            </div>

                            <div className="flex flex-col gap-6">
                                {navLinks.map((link, idx) => (
                                    <motion.a
                                        key={link.name}
                                        href={link.href}
                                        onClick={() => setMobileMenuOpen(false)}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        whileHover={{
                                            scale: 1.05,
                                            color: "#ffffff",
                                            textShadow: "0px 0px 12px rgba(251,255,10,0.4)",
                                            originX: 0
                                        }}
                                        transition={{ delay: 0.1 + idx * 0.1, duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                                        className="text-3xl font-bold text-white/70 block w-fit"
                                    >
                                        {link.name}
                                    </motion.a>
                                ))}
                            </div>

                            <div className="mt-auto pt-12">
                                <motion.a
                                    href="https://wa.me/919381871936?text=Hi%20Thrivex,%20I%20would%20like%20to%20book%20a%20strategy%20call."
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.05, y: -2, boxShadow: "0px 0px 40px rgba(251,255,10,0.5)" }}
                                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                                    className="block text-center w-full py-4 bg-primary text-black font-bold rounded-full text-lg shadow-[0_0_20px_rgba(251,255,10,0.25)]"
                                >
                                    Book a Call
                                </motion.a>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
