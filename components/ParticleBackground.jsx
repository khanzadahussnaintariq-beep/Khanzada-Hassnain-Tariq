import React, { useEffect, useRef } from 'react';

const ParticleBackground = ({ theme }) => {
    const canvasRef = useRef(null);
    const themeRef = useRef(theme);

    // Update theme ref when prop changes to avoid restarting the animation loop
    useEffect(() => {
        themeRef.current = theme;
    }, [theme]);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let particles = [];
        let animationFrameId;
        let mouse = { x: -1000, y: -1000 };

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initParticles();
        };

        const initParticles = () => {
            particles = [];
            const isMobile = window.innerWidth < 768;
            const count = isMobile ? 40 : 80;

            for (let i = 0; i < count; i++) {
                particles.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    dx: (Math.random() - 0.5) * (isMobile ? 0.3 : 0.6),
                    dy: (Math.random() - 0.5) * (isMobile ? 0.3 : 0.6),
                    size: Math.random() * 2 + 1,
                });
            }
        };

        const handleMouseMove = (event) => {
            mouse.x = event.clientX;
            mouse.y = event.clientY;
        };

        const handleClick = (event) => {
            const isMobile = window.innerWidth < 768;
            // Safety cap: Limit total particles to prevent lag (performance optimization)
            const maxTotalParticles = isMobile ? 65 : 130;

            if (particles.length >= maxTotalParticles) return;

            // Add a small number of particles per click (limited as requested)
            const addCount = 3;

            for (let i = 0; i < addCount; i++) {
                particles.push({
                    x: event.clientX,
                    y: event.clientY,
                    dx: (Math.random() - 0.5) * 2, // Burst effect
                    dy: (Math.random() - 0.5) * 2,
                    size: Math.random() * 2 + 1,
                });
            }
        };

        const handleMouseLeave = () => {
            mouse.x = -1000;
            mouse.y = -1000;
        };

        const draw = () => {
            const currentTheme = themeRef.current;
            const isDark = currentTheme === 'dark';

            // Colors
            const particleColor = isDark ? 'rgba(250, 204, 21, 0.4)' : 'rgba(23, 23, 23, 0.2)';
            const connectionColor = isDark ? 'rgba(250, 204, 21, 0.15)' : 'rgba(23, 23, 23, 0.08)';
            const mouseConnectionColor = isDark ? 'rgba(250, 204, 21, 0.3)' : 'rgba(23, 23, 23, 0.2)';

            // Interaction Parameters
            const maxMouseDist = 140;
            const maxMouseDistSq = maxMouseDist * maxMouseDist;

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach((p) => {
                // Draw particle
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fillStyle = particleColor;
                ctx.fill();

                // Update position
                p.x += p.dx;
                p.y += p.dy;

                // Bounce off edges
                if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
                if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
            });

            // Connections and Interactions
            particles.forEach((p1, i) => {
                // Connect particles to each other
                for (let j = i + 1; j < particles.length; j++) {
                    const p2 = particles[j];
                    const dx = p1.x - p2.x;
                    const dy = p1.y - p2.y;
                    const distSq = dx * dx + dy * dy;
                    const maxDist = 120;
                    const maxDistSq = maxDist * maxDist;

                    if (distSq < maxDistSq) {
                        const dist = Math.sqrt(distSq);
                        ctx.beginPath();
                        ctx.moveTo(p1.x, p1.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.strokeStyle = connectionColor;
                        ctx.lineWidth = 1 - dist / maxDist;
                        ctx.stroke();
                    }
                }

                // Mouse Repulsion & Connection
                const dx = p1.x - mouse.x;
                const dy = p1.y - mouse.y;
                const distSq = dx * dx + dy * dy;

                if (distSq < maxMouseDistSq) {
                    const dist = Math.sqrt(distSq);

                    // Draw connection line to mouse
                    ctx.beginPath();
                    ctx.moveTo(p1.x, p1.y);
                    ctx.lineTo(mouse.x, mouse.y);
                    ctx.strokeStyle = mouseConnectionColor;
                    ctx.lineWidth = 1 - dist / maxMouseDist;
                    ctx.stroke();

                    // Repulsion
                    if (dist > 0) {
                        const force = (maxMouseDist - dist) / maxMouseDist;
                        const strength = 2; // Strength of repulsion

                        p1.x += (dx / dist) * force * strength;
                        p1.y += (dy / dist) * force * strength;
                    }
                }
            });

            animationFrameId = requestAnimationFrame(draw);
        };

        window.addEventListener('resize', resize);
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mousedown', handleClick);
        window.addEventListener('mouseout', handleMouseLeave);

        resize();
        draw();

        return () => {
            window.removeEventListener('resize', resize);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mousedown', handleClick);
            window.removeEventListener('mouseout', handleMouseLeave);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className={`fixed top-0 left-0 w-full h-full -z-10 transition-colors duration-500 pointer-events-none ${theme === 'dark' ? 'bg-dark-bg' : 'bg-light-bg'}`}
        />
    );
};

export default ParticleBackground;
