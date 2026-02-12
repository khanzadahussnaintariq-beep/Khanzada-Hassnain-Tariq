import React, { useEffect, useRef } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import gsap from 'gsap';

const Hero = () => {
    const containerRef = useRef(null);
    const nameRef = useRef(null);
    const subHeadRef = useRef(null);
    const ctaRef = useRef(null);
    const profileRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Animate Name - Premium Staggered 3D Pop-in
            gsap.fromTo(".hero-char",
                {
                    y: 100,
                    opacity: 0,
                    scale: 1.5,
                    filter: 'blur(10px)',
                    rotateX: -45
                },
                {
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    filter: 'blur(0px)',
                    rotateX: 0,
                    duration: 0.8,
                    stagger: 0.03, // Fast ripple effect
                    ease: "back.out(1.7)" // "Pop" effect
                }
            );

            // Animate Subheadline - Smooth slide up after name
            gsap.fromTo(subHeadRef.current,
                { y: 20, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8, delay: 0.6, ease: "power3.out" }
            );

            // Animate Buttons
            gsap.fromTo(ctaRef.current,
                { y: 20, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8, delay: 0.8, ease: "power3.out" }
            );

            // Liquid Morph Animation for Profile
            gsap.to(profileRef.current, {
                borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
                duration: 4,
                ease: "sine.inOut",
                repeat: -1,
                yoyo: true
            });

            // Randomize the morph slightly
            gsap.to(profileRef.current, {
                borderRadius: "30% 60% 70% 40% / 50% 60% 30% 60%",
                duration: 4,
                ease: "sine.inOut",
                repeat: -1,
                yoyo: true,
                delay: 2
            });

            gsap.fromTo(profileRef.current,
                { scale: 0.8, opacity: 0 },
                { scale: 1, opacity: 1, duration: 1, delay: 0.4, ease: "expo.out" }
            );

        }, containerRef);

        return () => ctx.revert();
    }, []);

    const renderInteractiveName = (name) => {
        return name.split(" ").map((word, wordIndex) => {
            // Check if word is "Hassnain" to set it as Primary (Yellow) by default
            const isPrimaryWord = word === "Hassnain";

            return (
                <span key={wordIndex} className="inline-block whitespace-nowrap mr-3 md:mr-5 last:mr-0">
                    {word.split("").map((char, charIndex) => {
                        // Define classes for each character individually
                        // If Primary Word (Hassnain): Default Yellow, Hover Black/White
                        // If Normal Word: Default Black/White, Hover Yellow
                        const colorClass = isPrimaryWord
                            ? "text-primary dark:text-primary hover:text-gray-900 dark:hover:text-white"
                            : "text-gray-900 dark:text-white hover:text-primary dark:hover:text-primary";

                        return (
                            <span
                                key={charIndex}
                                className={`hero-char inline-block opacity-0 ${colorClass} hover:-translate-y-2 cursor-default will-change-transform transition-colors duration-200`}
                            >
                                {char}
                            </span>
                        );
                    })}
                </span>
            );
        });
    };

    return (
        <section id="home" ref={containerRef} className="min-h-screen flex items-center justify-center relative pt-20 md:pt-16 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse md:flex-row items-center gap-12 w-full">

                {/* Text Content */}
                <div className="flex-1 text-center md:text-left z-10">
                    <span className="inline-block text-xl md:text-2xl font-medium text-primary mb-2 tracking-wide animate-pulse">
                        Hi, I'm
                    </span>

                    {/* Animated Name Heading */}
                    <h1
                        ref={nameRef}
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 leading-tight"
                    >
                        {renderInteractiveName("Khanzada Hassnain Tariq")}
                    </h1>

                    <h2 ref={subHeadRef} className="text-base md:text-lg font-semibold text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto md:mx-0 leading-relaxed opacity-0">
                        Front-End Developer & <br className="hidden md:block" />
                        AI Automation Expert
                    </h2>

                    <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start opacity-0">
                        <a
                            href="#contact"
                            className="group relative px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-black font-semibold rounded-full overflow-hidden shadow-lg hover:shadow-xl transition-all hover:scale-105 active:scale-95 cursor-pointer"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                Let's Talk <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </span>
                        </a>
                        <a
                            href="#projects"
                            className="px-8 py-4 bg-transparent border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white font-semibold rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-all hover:scale-105 active:scale-95 cursor-pointer"
                        >
                            View Work
                        </a>
                    </div>
                </div>

                {/* Profile Image */}
                <div className="flex-1 flex justify-center md:justify-end z-10 relative">
                    <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 opacity-100">
                        {/* Decorative spinning rings */}
                        <div className="absolute inset-0 rounded-full border-4 border-dashed border-primary/30 animate-spin-slow"></div>
                        <div className="absolute inset-[-10px] rounded-full border-2 border-dotted border-gray-400/20 dark:border-gray-600/20 animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '15s' }}></div>

                        {/* Liquid Profile Image */}
                        <div ref={profileRef} className="absolute inset-4 overflow-hidden border-[6px] border-white dark:border-gray-900 shadow-2xl bg-gray-200 z-20 shadow-primary/20">
                            <img
                                src="/assets/images/khanzada-hassnain-tariq.jpg"
                                onError={(e) => { e.target.src = ""; }}
                                alt="Khanzada Hassnain Tariq"
                                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700 cursor-pointer"
                            />
                        </div>

                        {/* Floating Badge */}
                        <div className="absolute bottom-10 -left-4 md:-left-8 bg-white dark:bg-dark-card p-4 rounded-xl shadow-xl border border-gray-100 dark:border-gray-800 animate-bounce-subtle cursor-pointer">
                            <div className="flex items-center gap-3">
                                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                                <span className="text-sm font-semibold text-gray-800 dark:text-white">Open to Work</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-gray-400 dark:text-gray-600 cursor-pointer" onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>
                <ChevronDown size={32} />
            </div>
        </section>
    );
};

export default Hero;
