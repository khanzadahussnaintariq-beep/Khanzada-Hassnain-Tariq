import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';

const PageTransition = ({ children }) => {
    const comp = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                comp.current,
                { opacity: 0, y: 30, scale: 0.99 },
                {
                    opacity: 1, y: 0, scale: 1, duration: 1, ease: "power3.out", onComplete: () => {
                        gsap.set(comp.current, { clearProps: "transform" });
                    }
                }
            );
        }, comp);

        return () => ctx.revert();
    }, []);

    return <div ref={comp} className="w-full">{children}</div>;
};

export default PageTransition;
