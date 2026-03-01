export const AnimatedHeadline = () => {
    return (
        <h1
            className="text-[clamp(28px,7vw,36px)] md:text-[clamp(40px,5vw,52px)] lg:text-[clamp(50px,6vw,67px)] font-bold tracking-tight text-white text-center mx-auto mb-6 leading-[1.1]"
        >
            {/* For screen readers */}
            <span className="sr-only">Engineered for Digital Growth.</span>
            {/* For sighted users */}
            <span aria-hidden="true" className="flex flex-wrap justify-center items-center gap-x-3 lg:gap-x-4">
                <span className="inline-block">Engineered</span>
                <span className="inline-block">for</span>
                <span className="inline-block highlight-text">Digital Growth.</span>
            </span>
        </h1>
    );
};
