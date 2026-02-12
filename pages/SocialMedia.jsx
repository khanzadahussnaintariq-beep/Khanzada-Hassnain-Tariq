import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { LinkedInIcon, InstagramIcon, FacebookIcon, TwitterIcon, MailIcon } from '../components/BrandIcons';

const SocialMedia = () => {
    const links = [
        { name: "LinkedIn", url: "https://www.linkedin.com/in/khanzada-hussnain-tariq-39a654382", icon: LinkedInIcon },
        { name: "Instagram", url: "https://www.instagram.com/khanzadahassnaintariq", icon: InstagramIcon },
        { name: "Facebook", url: "https://www.facebook.com/share/1CrSkCgRYw/", icon: FacebookIcon },
        { name: "Twitter / X", url: "#", icon: TwitterIcon },
        { name: "Email Me", url: "mailto:khanzadahussnaintariq@gmail.com", icon: MailIcon },
    ];

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-dark-bg flex flex-col items-center justify-center p-4">
            <Link to="/" className="absolute top-8 left-8 flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-primary transition-colors">
                <ArrowLeft size={20} /> Back to Portfolio
            </Link>

            <div className="max-w-md w-full text-center space-y-8">
                <div className="relative w-24 h-24 mx-auto">
                    <img
                        src="https://picsum.photos/400/400?grayscale"
                        alt="Profile"
                        className="w-full h-full rounded-full object-cover border-4 border-white dark:border-gray-800 shadow-xl"
                    />
                    <div className="absolute bottom-0 right-0 w-6 h-6 bg-green-500 rounded-full border-2 border-white dark:border-gray-800"></div>
                </div>

                <div>
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Khanzada Hassnain</h1>
                    <p className="text-gray-500 dark:text-gray-400">@khanzadahassnaintariq</p>
                </div>

                <div className="space-y-4">
                    {links.map((link) => (
                        <a
                            key={link.name}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block w-full p-4 rounded-xl shadow-lg transform transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-3 bg-white dark:bg-dark-card border border-gray-100 dark:border-gray-800"
                        >
                            <link.icon size={28} />
                            <span className="font-bold tracking-wide text-gray-900 dark:text-white">{link.name}</span>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SocialMedia;
