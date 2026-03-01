"use client";

import { motion } from "framer-motion";

const testimonials = [
    {
        quote: "Thrivex didn't just build us a website. They engineered a client acquisition machine. Our CPL dropped by 40% in the first month.",
        author: "Sarah Jenkins",
        role: "Founder, Apex Capital",
    },
    {
        quote: "The combination of their VSL production and web architecture is unmatched. The perceived value of our brand 10x'd overnight.",
        author: "David Chen",
        role: "CEO, Quantum SaaS",
    },
    {
        quote: "We were burning cash on ads that didn't convert. They stepped in, rebuilt the funnel, and scaled us to $120k MRR.",
        author: "Marcus Rivera",
        role: "E-Commerce Director",
    }
];

export default function TestimonialsSection() {
    return (
        <section className="py-[100px] px-4 md:px-6 bg-[#050505] relative z-20">
            <div className="max-w-7xl mx-auto">

                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-3"
                    >
                        Don't take our word for it.
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="text-gray-400 text-base"
                    >
                        The data speaks for itself.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {testimonials.map((t, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{
                                duration: 0.8,
                                ease: [0.16, 1, 0.3, 1],
                                delay: idx * 0.1
                            }}
                            className="p-7 rounded-[20px] bg-[#0E0E0E] border border-white/[0.05] flex flex-col justify-between"
                        >
                            <div className="mb-5">
                                {/* Custom glowing quotation mark */}
                                <div className="text-primary text-4xl font-serif leading-none mb-3 opacity-70">
                                    "
                                </div>
                                <p className="text-white text-base leading-relaxed font-light">
                                    {t.quote}
                                </p>
                            </div>

                            <div className="flex items-center gap-3">
                                <div className="w-9 h-9 rounded-full bg-gray-800 border border-white/10" /> {/* Placeholder Avatar */}
                                <div>
                                    <h4 className="text-white font-semibold text-sm">{t.author}</h4>
                                    <p className="text-gray-500 text-xs">{t.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
