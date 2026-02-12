import React from 'react';
import { Briefcase } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import SectionHeading from './SectionHeading';

const experiences = [
    {
        company: "Innovasynx",
        role: "AI Automation Developer",
        type: "Part-Time",
        period: "Current",
        description: "Specializing in building advanced automation workflows and AI-based systems to optimize business processes.",
        stack: ["n8n", "Make.com", "Zapier", "AI Agents"]
    },
    {
        company: "Zolara Global Tech",
        role: "Front-End Trainee Developer",
        type: "Trainee",
        period: "Jan 2025 - Present",
        description: "Undertook comprehensive professional training in front-end development, mastering responsive UI design and industry-standard coding practices.",
        stack: ["HTML", "CSS", "JavaScript", "C++"]
    }
];

const Experience = () => {
    return (
        <section id="experience" className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeading title="Work Experience" />

                <div className="space-y-8">
                    {experiences.map((exp, index) => (
                        <AnimatedSection key={index} delay={index * 0.2}>
                            <div
                                className="group relative bg-white dark:bg-dark-card p-6 md:p-8 rounded-2xl shadow-lg border-l-4 border-primary hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
                            >
                                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                                    <div>
                                        <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors">
                                            {exp.role}
                                        </h3>
                                        <div className="text-lg text-gray-600 dark:text-gray-300 font-medium mt-1">
                                            {exp.company} <span className="text-sm px-2 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-gray-500 ml-2">{exp.type}</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full w-fit">
                                        <Briefcase size={14} />
                                        {exp.period}
                                    </div>
                                </div>

                                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                                    {exp.description}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {exp.stack.map((tech) => (
                                        <span key={tech} className="px-3 py-1 text-xs font-medium text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700 rounded-full">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
