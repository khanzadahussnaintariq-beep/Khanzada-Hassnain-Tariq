import React, { useState, useRef } from 'react';
import { ExternalLink, Github, BookOpen, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionHeading from './SectionHeading';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const projects = [
    {
        id: 'the-cake-bar', // Added IDs for linking
        title: "The Cake Bar",
        category: "Web Development",
        image: "/assets/images/the-cake-bar.jpg",
        description: "A modern, responsive website for a boutique bakery showcasing products and allowing custom orders.",
        tags: ["Java Script", "Tailwind", "React.js"]
    },
    {
        id: 'marriage-hall',
        title: "Marriage Hall",
        category: "Web Design",
        image: "/assets/images/marriage-hall.jpg",
        description: "Elegant landing page for a marriage hall venue with booking inquiry forms and galleries.",
        tags: ["UI/UX", "Figma", "React.js"]
    },
    {
        id: 'monthly-report-generator',
        title: "Monthly Report Generator",
        category: "Automation",
        image: "/assets/images/monthly-report-generator.jpg",
        description: "An automated system using n8n to compile and generate PDF reports from database entries monthly.",
        tags: ["n8n", "Airtable", "Automation"]
    },
    {
        id: 'ai-voice-agent',
        title: "AI Voice Agent",
        category: "AI & Voice",
        image: "/assets/images/ai-voice-agent.jpg",
        description: "Implementation of an AI-powered voice agent for handling customer queries using ElevenLabs and Twilio.",
        tags: ["ElevenLabs", "Twilio", "n8n"]
    }
];

const ProjectCard = ({ project, index }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <div
            className="w-full h-[500px] perspective-1000 group dark:text-white"
            onMouseEnter={() => setIsFlipped(true)}
            onMouseLeave={() => setIsFlipped(false)}
            onClick={() => setIsFlipped(!isFlipped)} // Support click on mobile
        >
            <div className={`relative w-full h-full transition-all duration-700 transform-style-3d ${isFlipped ? 'rotate-y-180' : ''}`}>

                {/* Front Side */}
                <div className="absolute w-full h-full backface-hidden rounded-[2rem] overflow-hidden shadow-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#121212]">
                    <div className="h-2/3 w-full relative overflow-hidden">
                        <img
                            src={project.image}
                            onError={(e) => { e.target.src = `https://picsum.photos/600/400?random=${index}`; }}
                            alt={project.title}
                            className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <div className="absolute bottom-4 left-6">
                            <span className="bg-primary px-3 py-1 rounded-full text-xs font-bold text-white shadow-sm mb-2 inline-block">
                                {project.category}
                            </span>
                            <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                        </div>
                    </div>
                    <div className="h-1/3 p-6 flex flex-col justify-between bg-white dark:bg-[#121212]">
                        <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-3">
                            {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mt-2">
                            {project.tags.map(tag => (
                                <span key={tag} className="text-xs font-semibold px-2 py-1 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400">
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Back Side */}
                <div className="absolute w-full h-full backface-hidden rotate-y-180 rounded-[2rem] overflow-hidden shadow-xl border border-gray-200 dark:border-gray-800 bg-gray-900 dark:bg-black p-8 flex flex-col justify-center items-center text-center">
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none"></div>
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-bl-full -mr-8 -mt-8 blur-2xl"></div>
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-500/20 rounded-tr-full -ml-8 -mb-8 blur-2xl"></div>

                    <h3 className="text-3xl font-bold text-white mb-2 relative z-10">{project.title}</h3>
                    <p className="text-gray-400 mb-8 relative z-10 text-sm">{project.category}</p>

                    <div className="flex flex-col gap-4 w-full max-w-xs relative z-10">
                        {/* View Details / Live Demo usually same in portfolios, or separate. Assuming View Details -> Modal? Or just external. 
                            Prompt says "view details or read a blog". 
                            I'll use "View Live" for external and "Read Blog" for the blog page.
                         */}

                        <a
                            href="#" // Keep as hash or real link if provided
                            className="group/btn flex items-center justify-center gap-2 w-full py-4 bg-white text-black font-bold rounded-xl hover:bg-gray-200 transition-all rounded-tl-2xl rounded-br-2xl"
                        >
                            <Eye size={20} /> View Live Project
                        </a>

                        <Link
                            to={`/blog/${project.id}`}
                            className="group/btn flex items-center justify-center gap-2 w-full py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary-dark transition-all rounded-tr-2xl rounded-bl-2xl shadow-lg shadow-primary/25"
                        >
                            <BookOpen size={20} /> Read Blog Case Study
                        </Link>
                    </div>

                    <div className="mt-8 flex gap-4 relative z-10">
                        <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors">
                            <Github size={20} />
                        </a>
                        <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors">
                            <ExternalLink size={20} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Projects = () => {
    const container = useRef(null);
    const track = useRef(null);

    useGSAP(() => {
        const pinWrap = track.current;
        const sec = container.current;

        if (!pinWrap || !sec) return;

        let pinWrapWidth;
        let horizontalScrollLength;

        function refresh() {
            pinWrapWidth = pinWrap.scrollWidth;
            horizontalScrollLength = pinWrapWidth - window.innerWidth;
        }

        refresh();

        gsap.to(pinWrap, {
            scrollTrigger: {
                scrub: true,
                trigger: sec,
                pin: sec,
                start: "center center",
                end: () => `+=${pinWrapWidth}`,
                invalidateOnRefresh: true,
            },
            x: () => -horizontalScrollLength,
            ease: "none"
        });

        ScrollTrigger.addEventListener("refreshInit", refresh);

        return () => {
            ScrollTrigger.removeEventListener("refreshInit", refresh);
        };
    }, { scope: container });

    return (
        <section id="projects" ref={container} className="relative overflow-hidden bg-gray-50 dark:bg-black/50 h-screen flex flex-col justify-center">
            {/* 3D Transform Utilities Style Injection */}
            <style>{`
                .perspective-1000 { perspective: 1000px; }
                .transform-style-3d { transform-style: preserve-3d; }
                .backface-hidden { backface-visibility: hidden; }
                .rotate-y-180 { transform: rotateY(180deg); }
            `}</style>

            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-full h-full -z-10" />
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full absolute top-10 left-0 right-0 z-10 text-center">
                <SectionHeading
                    title="Projects"
                    subtitle="Building digital experiences that matter."
                    className="mb-8"
                />
            </div>

            <div ref={track} className="flex gap-8 px-4 md:px-20 items-center h-full w-fit pt-20 hide-scrollbar">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="project-card w-[85vw] md:w-[600px] flex-shrink-0"
                    >
                        {/* We use the same card component but remove ScrollReveal as the horizontal scroll drives the experience */}
                        <ProjectCard project={project} index={index} />
                    </div>
                ))}
            </div>

            <div className="absolute bottom-10 left-0 w-full text-center text-gray-500 animate-bounce">
                Scroll to explore &rarr;
            </div>
        </section>
    );
};

export default Projects;
