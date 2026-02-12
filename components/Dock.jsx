import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import {
    GithubIcon,
    LinkedInIcon,
    InstagramIcon,
    FacebookIcon,
    TwitterIcon
} from './BrandIcons';

const socialLinks = [
    { icon: GithubIcon, url: "https://github.com/khanzadahassnaintariq", label: "GitHub" },
    { icon: LinkedInIcon, url: "https://www.linkedin.com/in/khanzada-hussnain-tariq-39a654382", label: "LinkedIn" },
    { icon: InstagramIcon, url: "https://www.instagram.com/khanzadahassnaintariq", label: "Instagram" },
    { icon: FacebookIcon, url: "https://www.facebook.com/share/1CrSkCgRYw/", label: "Facebook" },
    { icon: TwitterIcon, url: "#", label: "Twitter" },
];

const Dock = () => {
    const dockRef = useRef(null);

    useGSAP(() => {
        const dock = dockRef.current;
        const icons = dock.querySelectorAll('.dock-icon');

        // Config
        const maxScale = 1.8;
        const baseScale = 1;
        const neighborhood = 150; // Distance of effect

        const handleMouseMove = (e) => {
            const mouseX = e.clientX;

            icons.forEach((icon) => {
                const rect = icon.getBoundingClientRect();
                const iconCenterX = rect.left + rect.width / 2;
                const distance = mouseX - iconCenterX;

                // Calculate scale based on distance using GSAP mapRange
                // We use Math.abs(distance) so we map [0, neighborhood] -> [maxScale, baseScale]

                let scale = baseScale;

                if (Math.abs(distance) < neighborhood) {
                    scale = gsap.utils.mapRange(0, neighborhood, maxScale, baseScale, Math.abs(distance));
                }

                gsap.to(icon, {
                    scale: scale,
                    duration: 0.2,
                    ease: "power2.out",
                    overwrite: "auto"
                });
            });
        };

        const handleMouseLeave = () => {
            gsap.to(icons, {
                scale: baseScale,
                duration: 0.3,
                ease: "power2.out",
                overwrite: "auto"
            });
        };

        dock.addEventListener('mousemove', handleMouseMove);
        dock.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            dock.removeEventListener('mousemove', handleMouseMove);
            dock.removeEventListener('mouseleave', handleMouseLeave);
        };

    }, { scope: dockRef });

    return (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
            <div
                ref={dockRef}
                className="flex items-end gap-4 px-6 py-4 bg-white/10 dark:bg-black/40 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-2xl shadow-2xl"
            >
                {socialLinks.map((link, index) => (
                    <a
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="dock-icon w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-xl text-gray-700 dark:text-gray-300 shadow-md hover:shadow-lg transition-shadow bg-opacity-80 dark:bg-opacity-80 origin-bottom"
                        aria-label={link.label}
                    >
                        <link.icon size={26} />
                    </a>
                ))}
            </div>
        </div>
    );
};

export default Dock;
