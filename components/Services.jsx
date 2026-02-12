import React from 'react';
import { Globe, Code, Zap, Cpu, Mic2, Workflow } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import SectionHeading from './SectionHeading';

const services = [
    {
        title: "Web Design",
        description: "Creating visually stunning and user-friendly website designs.",
        icon: Globe
    },
    {
        title: "Front-End Dev",
        description: "Building responsive, interactive websites using modern technologies.",
        icon: Code
    },
    {
        title: "AI Automations",
        description: "Automating repetitive tasks to save time and increase efficiency.",
        icon: Zap
    },
    {
        title: "No-Code Integration",
        description: "Connecting apps and services seamlessly without complex code.",
        icon: Cpu
    },
    {
        title: "AI Voice Agents",
        description: "Setting up intelligent voice assistants for customer support.",
        icon: Mic2
    },
    {
        title: "Workflow Opt.",
        description: "Streamlining business processes for maximum productivity.",
        icon: Workflow
    }
];

const Services = () => {
    return (
        <section id="services" className="py-20 bg-gray-50 dark:bg-black/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeading title="Services" />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <AnimatedSection key={index} delay={index * 0.1}>
                            <div
                                className="group bg-white dark:bg-dark-card p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800 hover:border-primary transition-all duration-300 ease-out hover:-translate-y-2 hover:scale-[1.02] hover:shadow-2xl h-full cursor-pointer"
                            >
                                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-black transition-colors duration-300">
                                    <service.icon size={32} />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary transition-colors duration-300">{service.title}</h3>
                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                    {service.description}
                                </p>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
