import React from 'react';
import ScrollReveal from './ScrollReveal';

const Footer = () => {
    return (
        <footer className="py-8 bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800 text-center">
            <ScrollReveal>
                <p className="text-gray-600 dark:text-gray-400">
                    © {new Date().getFullYear()} <span className="font-bold text-gray-900 dark:text-white">Khanzada Hassnain Tariq</span>. All rights reserved.
                </p>
            </ScrollReveal>
        </footer>
    );
};

export default Footer;
