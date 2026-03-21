import { Menu, X, Github, Twitter } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'Projects', href: '#projects' },
        { name: 'About', href: '#about' },
    ];

    return (
        <nav className="fixed w-full z-50 glass border-b transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <a href="#" className="flex-shrink-0 text-xl font-bold tracking-tighter text-white group">
                            Ashish<span className="text-primary-400 group-hover:text-primary-300 transition-colors">Shetty</span>
                        </a>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-gray-300 hover:text-primary-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <div className="flex items-center ml-4 space-x-4 border-l border-white/10 pl-4">
                                <a href="https://github.com/Shetty073" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                                    <span className="sr-only">GitHub</span>
                                    <Github className="h-5 w-5" />
                                </a>
                                <a href="https://x.com/meraabaap" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#1DA1F2] transition-colors">
                                    <span className="sr-only">Twitter</span>
                                    <Twitter className="h-5 w-5" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
                            aria-controls="mobile-menu"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? (
                                <X className="block h-6 w-6" aria-hidden="true" />
                            ) : (
                                <Menu className="block h-6 w-6" aria-hidden="true" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden border-t border-white/10"
                        id="mobile-menu"
                    >
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-dark-surface/90 backdrop-blur-xl">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-gray-300 hover:text-white hover:bg-white/5 block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <div className="flex items-center space-x-4 px-3 py-4 mt-2 border-t border-white/10">
                                <a href="https://github.com/Shetty073" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                                    <Github className="h-6 w-6" />
                                </a>
                                <a href="https://x.com/meraabaap" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#1DA1F2]">
                                    <Twitter className="h-6 w-6" />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
