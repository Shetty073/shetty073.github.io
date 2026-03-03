import { User, BookOpen, Gamepad2, Coffee } from 'lucide-react';

export default function About() {
    const hobbies = [
        { name: 'Coding', icon: Coffee, desc: 'Building interesting things' },
        { name: 'Reading', icon: BookOpen, desc: 'Learning continuously' },
        { name: 'Gaming', icon: Gamepad2, desc: 'Video games enthusiast' }
    ];

    return (
        <section id="about" className="py-24 bg-dark-bg border-t border-white/5 relative overflow-hidden">
            {/* Subtle background element */}
            <div className="absolute top-0 right-0 w-1/3 h-[500px] bg-primary-900/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col md:flex-row gap-16 items-center">

                    <div className="flex-1 w-full">
                        <div className="inline-flex items-center space-x-2 bg-primary-500/10 text-primary-400 px-4 py-2 rounded-full mb-6 font-medium text-sm">
                            <User className="w-4 h-4" />
                            <span>About Me</span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
                            Technical Lead & <br />
                            <span className="text-gradient">Backend Specialist</span>
                        </h2>

                        <div className="space-y-6 text-lg text-gray-400 leading-relaxed">
                            <p>
                                I am an experienced Technical Lead with a strong passion for architecting systems and writing clean, scalable code.
                                Beyond my day-to-day professional work, coding remains one of my core hobbies,
                                alongside reading and playing video games.
                            </p>
                            <p>
                                This portfolio serves as a central hub where my various open-source projects, e-learning platforms, and data analysis tools
                                from my GitHub repository are listed for easy reachability.
                            </p>
                        </div>
                    </div>

                    <div className="flex-1 w-full">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {hobbies.map((hobby, index) => {
                                const Icon = hobby.icon;
                                return (
                                    <div
                                        key={index}
                                        className="glass p-6 rounded-2xl border border-white/10 hover:border-primary-500/30 transition-colors group"
                                    >
                                        <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary-500/20 group-hover:text-primary-300 transition-colors">
                                            <Icon className="w-6 h-6 text-gray-400 group-hover:text-primary-400" />
                                        </div>
                                        <h3 className="text-xl font-semibold text-white mb-2">{hobby.name}</h3>
                                        <p className="text-gray-400 text-sm">{hobby.desc}</p>
                                    </div>
                                );
                            })}
                        </div>

                        <div className="mt-8">
                            <a
                                href="https://ashishshettydev.blogspot.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block glass p-6 rounded-2xl border border-white/10 hover:border-primary-500/50 transition-colors group relative overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="relative z-10">
                                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors flex items-center gap-2">
                                        Ashish Shetty's Dev Blog
                                    </h3>
                                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                                        Discover fascinating insights and behind-the-scenes details of building modern software systems. I write about architecture, deep-dives (e.g., how low-code/no-code systems work), coding best practices like review & refactoring, and technical quirks (e.g., why floats can be bad).
                                    </p>
                                    <span className="text-primary-500 flex items-center gap-1 text-sm font-medium">
                                        Read my articles →
                                    </span>
                                </div>
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
