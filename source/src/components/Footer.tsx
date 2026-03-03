import { Twitter, Github, Heart } from 'lucide-react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-black border-t border-white/10 py-12 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">

                    <div className="flex flex-col items-center md:items-start text-center md:text-left">
                        <a href="#" className="text-2xl font-bold tracking-tighter text-white group mb-2">
                            Ashish<span className="text-primary-400 group-hover:text-primary-300 transition-colors">Shetty</span>
                        </a>
                        <p className="text-gray-500 text-sm flex items-center gap-1.5 mt-2">
                            Built with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> by Shetty073
                        </p>
                    </div>

                    <div className="flex items-center space-x-6">
                        <a
                            href="https://github.com/Shetty073"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full"
                        >
                            <span className="sr-only">GitHub</span>
                            <Github className="h-5 w-5" />
                        </a>
                        <a
                            href="https://twitter.com/Ashishsanfiero"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-[#1DA1F2] transition-colors p-2 hover:bg-[#1DA1F2]/10 rounded-full"
                        >
                            <span className="sr-only">Twitter</span>
                            <Twitter className="h-5 w-5" />
                        </a>
                    </div>

                </div>

                <div className="mt-8 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
                    <p>© {currentYear} AshishShetty Project. All rights reserved.</p>
                    <div className="flex items-center gap-4">
                        <a href="#about" className="hover:text-gray-300 transition-colors">About</a>
                        <a href="#projects" className="hover:text-gray-300 transition-colors">Projects</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
