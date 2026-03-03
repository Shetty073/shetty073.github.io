import { motion } from 'framer-motion';
import { ArrowDown, Code2 } from 'lucide-react';

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark-bg pt-16">
            {/* Background decoration */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary-900/20 rounded-full blur-[120px] mix-blend-screen opacity-50" />
                <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-emerald-900/20 rounded-full blur-[100px] mix-blend-screen opacity-50" />
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                >
                    <div className="flex justify-center mb-6">
                        <div className="inline-flex items-center justify-center p-3 sm:p-4 rounded-2xl bg-white/5 border border-white/10 shadow-lg shadow-black/50 backdrop-blur-sm">
                            <Code2 className="w-8 h-8 sm:w-10 sm:h-10 text-primary-400" />
                        </div>
                    </div>

                    <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight mb-6">
                        <span className="block text-white">Hi, I'm</span>
                        <span className="block text-gradient">Ashish Shetty</span>
                    </h1>

                    <p className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-gray-400 leading-relaxed">
                        I am a Technical Lead specializing in architecting and building robust REST microservices and scalable backend systems. While my professional work focuses on delivering high-performance solutions using Python and Go, my personal passions involve developing full-stack applications, e-learning platforms, and data analysis tools, which I open-source here to share with the developer community.
                    </p>

                    <div className="mt-10 flex justify-center gap-4">
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="#projects"
                            className="inline-flex items-center px-8 py-3 sm:py-4 border border-transparent text-base sm:text-lg font-medium rounded-full text-black bg-primary-400 hover:bg-primary-300 shadow-[0_0_20px_rgba(45,212,191,0.3)] transition-all"
                        >
                            View Projects
                        </motion.a>
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="#about"
                            className="inline-flex items-center px-8 py-3 sm:py-4 border border-white/20 text-base sm:text-lg font-medium rounded-full text-white bg-white/5 hover:bg-white/10 backdrop-blur-sm transition-all"
                        >
                            About Me
                        </motion.a>
                    </div>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
            >
                <span className="text-sm text-gray-500 mb-2 font-medium tracking-widest uppercase">Scroll</span>
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                >
                    <ArrowDown className="w-5 h-5 text-gray-500" />
                </motion.div>
            </motion.div>
        </section>
    );
}
