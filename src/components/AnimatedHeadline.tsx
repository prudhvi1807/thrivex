import { motion } from "framer-motion";

const sentence = {
    hidden: { opacity: 1 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.05, delayChildren: 0.2 },
    },
};

const customEase = [0.16, 1, 0.3, 1] as [number, number, number, number];

const word = {
    hidden: { opacity: 0, y: 40, filter: "blur(4px)" },
    visible: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: { duration: 0.8, ease: customEase }
    },
};

export const AnimatedHeadline = () => {
    return (
        <motion.h1
            variants={sentence}
            initial="hidden"
            animate="visible"
            className="text-[clamp(28px,7vw,36px)] md:text-[clamp(40px,5vw,52px)] lg:text-[clamp(50px,6vw,67px)] font-bold tracking-tight text-white text-center mx-auto mb-6 leading-[1.1]"
        >
            {/* For screen readers */}
            <span className="sr-only">Engineered for Digital Growth.</span>
            {/* For sighted users */}
            <span aria-hidden="true" className="flex flex-wrap justify-center items-center gap-x-3 lg:gap-x-4">
                <motion.span variants={word} className="inline-block">Engineered</motion.span>
                <motion.span variants={word} className="inline-block">for</motion.span>
                <motion.span variants={word} className="inline-block highlight-text">Digital Growth.</motion.span>
            </span>
        </motion.h1>
    );
};
