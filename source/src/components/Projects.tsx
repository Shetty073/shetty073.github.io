import { useEffect, useState } from 'react';
import { Star, ExternalLink, Github, Search, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Repository {
    id: number;
    name: string;
    description: string;
    html_url: string;
    stargazers_count: number;
    fork: boolean;
    language: string;
}

export default function Projects() {
    const [repos, setRepos] = useState<Repository[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetch('https://api.github.com/users/Shetty073/repos')
            .then((response) => {
                if (!response.ok) throw new Error('Failed to fetch repositories');
                return response.json();
            })
            .then((data: Repository[]) => {
                // Filter out forks and sort by stars
                const filteredRepos = data
                    .filter(repo => !repo.fork)
                    .sort((a, b) => b.stargazers_count - a.stargazers_count);
                setRepos(filteredRepos);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    const filteredRepos = repos.filter(repo =>
        repo.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (repo.description && repo.description.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    return (
        <section id="projects" className="py-24 bg-dark-bg relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div className="max-w-2xl text-left">
                        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4 text-white">
                            Projects & <span className="text-primary-400">Repositories</span>
                        </h2>
                        <p className="text-gray-400 text-lg">
                            A collection of programs and tools I've built. Click on any project to view its source code on GitHub.
                        </p>
                    </div>

                    <div className="relative w-full md:w-80">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Search className="h-5 w-5 text-gray-500" />
                        </div>
                        <input
                            type="text"
                            placeholder="Search projects..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="block w-full pl-10 pr-3 py-3 border border-white/10 rounded-xl leading-5 bg-white/5 text-gray-300 placeholder-gray-500 focus:outline-none focus:bg-white/10 focus:ring-1 focus:ring-primary-500 focus:border-primary-500 sm:text-sm transition-all"
                        />
                    </div>
                </div>

                {error && (
                    <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-center">
                        {error}. Please try again later.
                    </div>
                )}

                {loading ? (
                    <div className="flex flex-col items-center justify-center py-20">
                        <Loader2 className="w-10 h-10 text-primary-500 animate-spin mb-4" />
                        <p className="text-gray-400 animate-pulse">Fetching repositories from GitHub...</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <AnimatePresence>
                            {filteredRepos.map((repo, index) => (
                                <motion.a
                                    layout
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.3, delay: index * 0.05 }}
                                    key={repo.id}
                                    href={repo.html_url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex flex-col justify-between p-6 glass rounded-2xl border border-white/10 hover:border-primary-500/50 hover:bg-white/5 transition-all w-full h-full relative overflow-hidden"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                                    <div className="relative z-10 flex-1">
                                        <div className="flex justify-between items-start mb-4">
                                            <div className="p-2 bg-white/5 rounded-lg group-hover:bg-primary-500/20 group-hover:text-primary-300 transition-colors text-gray-400">
                                                <Github className="w-6 h-6" />
                                            </div>
                                            {repo.stargazers_count > 0 && (
                                                <div className="flex items-center space-x-1 text-yellow-500/80 bg-yellow-500/10 px-2.5 py-1 rounded-full text-xs font-semibold">
                                                    <Star className="w-3.5 h-3.5 fill-current" />
                                                    <span>{repo.stargazers_count}</span>
                                                </div>
                                            )}
                                        </div>

                                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors line-clamp-1">
                                            {repo.name}
                                        </h3>

                                        <p className="text-gray-400 text-sm line-clamp-3 mb-6">
                                            {repo.description || 'No description provided for this repository.'}
                                        </p>
                                    </div>

                                    <div className="relative z-10 pt-4 mt-auto border-t border-white/5 flex items-center justify-between">
                                        <div className="flex items-center gap-2 text-xs font-medium text-gray-500">
                                            <span className="w-2.5 h-2.5 rounded-full bg-primary-500/50 block"></span>
                                            {repo.language || 'Unknown'}
                                        </div>
                                        <span className="text-primary-500 opacity-0 group-hover:opacity-100 flex items-center gap-1 text-sm font-medium transition-opacity translate-x-2 group-hover:translate-x-0">
                                            View Source <ExternalLink className="w-4 h-4" />
                                        </span>
                                    </div>
                                </motion.a>
                            ))}
                        </AnimatePresence>

                        {!loading && filteredRepos.length === 0 && !error && (
                            <div className="col-span-full py-20 text-center">
                                <div className="inline-flex items-center justify-center p-4 rounded-full bg-white/5 mb-4">
                                    <Search className="w-8 h-8 text-gray-400" />
                                </div>
                                <h3 className="text-xl font-semibold text-white mb-2">No projects found</h3>
                                <p className="text-gray-400">Try adjusting your search query.</p>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </section>
    );
}
