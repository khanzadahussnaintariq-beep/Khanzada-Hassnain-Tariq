import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Share2 } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = ({ theme, toggleTheme }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);
    const location = useLocation();

    const isHome = location.pathname === '/';

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Experience', href: '#experience' },
        { name: 'Skills', href: '#skills' },
        { name: 'Services', href: '#services' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            const totalScroll = document.documentElement.scrollTop;
            const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

            if (windowHeight === 0) return;

            const scroll = totalScroll / windowHeight;
            setScrollProgress(scroll);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleScrollToSection = (id) => {
        setIsOpen(false);
        if (!isHome) {
            window.location.href = `/${id}`;
            return;
        }
        const element = document.querySelector(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-opacity-80 border-b border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-dark-bg/50 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                        <span className="font-bold text-2xl tracking-normal text-gray-900 dark:text-white font-urdu">
                            خانزادہ حسنین طارق<span className="text-primary">.</span>
                        </span>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            {isHome ? (
                                navLinks.map((link) => (
                                    <button
                                        key={link.name}
                                        onClick={() => handleScrollToSection(link.href)}
                                        className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
                                    >
                                        {link.name}
                                    </button>
                                ))
                            ) : (
                                <Link to="/" className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">
                                    Back to Portfolio
                                </Link>
                            )}

                            <Link
                                to="/social-media"
                                className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-all"
                            >
                                <Share2 size={16} /> Socials
                            </Link>

                            <button
                                onClick={toggleTheme}
                                className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-yellow-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all"
                                aria-label="Toggle Theme"
                            >
                                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                            </button>
                        </div>
                    </div>

                    {/* Mobile Buttons */}
                    <div className="flex items-center gap-4 md:hidden">
                        {/* Theme Toggle Button visible on Mobile Header */}
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-yellow-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all"
                            aria-label="Toggle Theme"
                        >
                            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                        </button>

                        {/* Hamburger Menu Button */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 dark:text-gray-300 hover:text-primary focus:outline-none"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu dropdown */}
            {isOpen && (
                <div className="md:hidden bg-white dark:bg-dark-card border-b border-gray-200 dark:border-gray-800 shadow-xl">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {isHome ? (
                            navLinks.map((link) => (
                                <button
                                    key={link.name}
                                    onClick={() => handleScrollToSection(link.href)}
                                    className="block w-full text-left text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary px-3 py-2 rounded-md text-base font-medium"
                                >
                                    {link.name}
                                </button>
                            ))
                        ) : (
                            <Link to="/" className="block w-full text-left text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary px-3 py-2 rounded-md text-base font-medium">
                                Back to Portfolio
                            </Link>
                        )}
                        <Link
                            to="/social-media"
                            className="block w-full text-left text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary px-3 py-2 rounded-md text-base font-medium"
                            onClick={() => setIsOpen(false)}
                        >
                            Socials
                        </Link>
                    </div>
                </div>
            )}

            {/* Scroll Progress Bar */}
            <div
                className="absolute bottom-0 left-0 h-[3px] bg-primary z-50 transition-all duration-100 ease-out"
                style={{ width: `${scrollProgress * 100}%` }}
            />
        </nav>
    );
};

export default Navbar;
