import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const SectionHeading = ({ title, subtitle, className = "" }) => {
    const containerRef = useRef(null);
    const lineRef = useRef(null);
    const subtitleRef = useRef(null);

    useGSAP(() => {
        const element = containerRef.current;

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: element,
                start: "top 85%",
                toggleActions: "play none none reverse"
            }
        });

        // Character-by-character entrance animation
        tl.fromTo(".section-char",
            {
                y: 20,
                opacity: 0,
                scale: 0.8,
                rotationX: -90
            },
            {
                y: 0,
                opacity: 1,
                scale: 1,
                rotationX: 0,
                duration: 0.6,
                stagger: 0.02,
                ease: "back.out(1.5)"
            }
        );

        if (lineRef.current) {
            tl.fromTo(lineRef.current,
                { width: 0, opacity: 0 },
                { width: '5rem', opacity: 1, duration: 0.8, ease: "power2.out" },
                "-=0.4"
            );
        }

        if (subtitleRef.current) {
            tl.fromTo(subtitleRef.current,
                { y: 15, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
                "-=0.6"
            );
        }
    }, { scope: containerRef });

    // Helper to split text for interaction
    const renderInteractiveTitle = (text) => {
        return text.split(" ").map((word, wordIndex) => (
            <span key={wordIndex} className="inline-block whitespace-nowrap mr-2 md:mr-3 last:mr-0">
                {word.split("").map((char, charIndex) => (
                    <span
                        key={charIndex}
                        className="section-char inline-block opacity-0 transition-all duration-200 text-gray-900 dark:text-white hover:text-primary dark:hover:text-primary hover:-translate-y-1 hover:scale-110 cursor-default will-change-transform"
                    >
                        {char}
                    </span>
                ))}
            </span>
        ));
    };

    return (
        <div ref={containerRef} className={`text-center mb-16 ${className}`}>
            <h2
                className="text-3xl md:text-4xl font-bold mb-4 inline-block"
                aria-label={title}
            >
                <span aria-hidden="true">
                    {renderInteractiveTitle(title)}
                </span>
            </h2>
            <div ref={lineRef} className="w-0 h-1 bg-primary mx-auto rounded-full opacity-0"></div>
            {subtitle && (
                <p ref={subtitleRef} className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto opacity-0">
                    {subtitle}
                </p>
            )}
        </div>
    );
};

export default SectionHeading;
