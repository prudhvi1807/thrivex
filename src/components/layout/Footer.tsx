export default function Footer() {
    return (
        <footer className="bg-[#050505] border-t border-white/[0.05] pt-16 pb-8 px-4 md:px-6 relative z-20">
            <div className="max-w-7xl mx-auto flex flex-col items-center text-center">

                <div className="mb-8">
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <div className="w-6 h-6 rounded-md bg-gray-800 flex items-center justify-center border border-white/10">
                            <div className="w-2 h-2 bg-gray-400 rounded-sm" />
                        </div>
                        <span className="text-white font-bold text-xl tracking-tight">
                            Thrivex<span className="text-gray-500 font-light">Labs</span>
                        </span>
                    </div>
                    <p className="text-gray-500 max-w-sm mx-auto text-xs">
                        Engineering exponential growth for digital and global brands.
                    </p>
                </div>

                <div className="flex items-center gap-5 mb-11">
                    <a href="#" className="font-semibold text-gray-400 hover:text-white transition-colors text-sm">Twitter</a>
                    <a href="#" className="font-semibold text-gray-400 hover:text-white transition-colors text-sm">LinkedIn</a>
                    <a href="https://www.instagram.com/thrivex.labs/" target="_blank" rel="noopener noreferrer" className="font-semibold text-gray-400 hover:text-white transition-colors text-sm">Instagram</a>
                </div>

                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

                <div className="flex flex-col md:flex-row items-center justify-between w-full text-xs text-gray-600 font-medium">
                    <p>© {new Date().getFullYear()} Thrivex Labs. All rights reserved.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-gray-400 transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-gray-400 transition-colors">Terms of Service</a>
                    </div>
                </div>

            </div>
        </footer>
    );
}
