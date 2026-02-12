import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const AnimatedSection = ({ children, className = "", delay = 0 }) => {
    const sectionRef = useRef(null);

    useGSAP(() => {
        const element = sectionRef.current;

        gsap.fromTo(element,
            {
                y: 100,
                opacity: 0,
                filter: "blur(10px)",
                scale: 0.95
            },
            {
                y: 0,
                opacity: 1,
                filter: "blur(0px)",
                scale: 1,
                duration: 1.5,
                delay: delay,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: element,
                    start: "top 85%", // Start animation when top of section hits 85% of viewport
                    end: "top 50%",
                    toggleActions: "play none none reverse",
                }
            }
        );
    }, { scope: sectionRef });

    return (
        <div ref={sectionRef} className={`will-change-transform ${className}`}>
            {children}
        </div>
    );
};

export default AnimatedSection;
