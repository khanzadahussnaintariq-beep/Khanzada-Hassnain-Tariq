import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

const ScrollReveal = ({ children, className = "", delay = 0, width = "w-full" }) => {
    const ref = useRef(null);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        gsap.fromTo(
                            element,
                            { y: 40, opacity: 0, scale: 0.98 },
                            {
                                y: 0,
                                opacity: 1,
                                scale: 1,
                                duration: 1.2, // Smoother, longer duration
                                ease: "power3.out", // Cubic ease for natural movement
                                delay: delay
                            }
                        );
                        observer.unobserve(element);
                    }
                });
            },
            // Trigger earlier: lower threshold and reduced bottom margin offset
            { threshold: 0.1, rootMargin: "0px 0px -20px 0px" }
        );

        observer.observe(element);

        return () => {
            if (element) observer.unobserve(element);
        };
    }, [delay]);

    return (
        <div ref={ref} className={`opacity-0 ${width} ${className}`}>
            {children}
        </div>
    );
};

export default ScrollReveal;
