import React from 'react';
import AnimatedSection from './AnimatedSection';
import SectionHeading from './SectionHeading';
import {
    VsCodeIcon,
    DevCppIcon,
    N8nIcon,
    MakeIcon,
    ZapierIcon,
    ElevenLabsIcon,
    TwilioIcon
} from './BrandIcons';

const toolGroups = [
    {
        title: "Development Environment",
        description: "Robust editors and IDEs for coding and software development.",
        items: [
            { name: "VS Code", icon: VsCodeIcon },
            { name: "DevC++", icon: DevCppIcon },
        ]
    },
    {
        title: "Automation Workflows",
        description: "No-code and low-code platforms for seamless integrations.",
        items: [
            { name: "n8n", icon: N8nIcon },
            { name: "Make.com", icon: MakeIcon },
            { name: "Zapier", icon: ZapierIcon },
        ]
    },
    {
        title: "AI & Communication",
        description: "Advanced tools for voice synthesis and messaging.",
        items: [
            { name: "ElevenLabs", icon: ElevenLabsIcon },
            { name: "Twilio", icon: TwilioIcon },
        ]
    }
];

const ToolsPlatforms = () => {
    return (
        <section className="py-24 bg-gray-50/50 dark:bg-black/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeading
                    title="Tools & Platforms"
                    subtitle="My technical arsenal for building scalable, automated, and intelligent solutions."
                />

                <div className="space-y-16">
                    {toolGroups.map((group, groupIndex) => (
                        <div key={group.title}>
                            <AnimatedSection delay={groupIndex * 0.1} className="w-full">
                                <div className="flex flex-col md:flex-row md:items-end gap-4 mb-8 border-b border-gray-200 dark:border-gray-800 pb-4">
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
                                        <span className="w-2 h-8 bg-primary rounded-full"></span>
                                        {group.title}
                                    </h3>
                                    <p className="text-gray-500 dark:text-gray-400 text-sm md:mb-1">{group.description}</p>
                                </div>
                            </AnimatedSection>

                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                                {group.items.map((tool, index) => (
                                    <AnimatedSection key={tool.name} delay={index * 0.05 + groupIndex * 0.1}>
                                        <div className="group relative bg-white dark:bg-dark-card rounded-xl p-6 border border-gray-100 dark:border-gray-800 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col items-center justify-center gap-4 text-center overflow-hidden h-full cursor-pointer">

                                            {/* Hover Gradient Background */}
                                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                                            {/* Icon Container */}
                                            <div className="relative z-10 p-3 rounded-2xl bg-gray-50 dark:bg-gray-800/50 group-hover:bg-white dark:group-hover:bg-gray-700 group-hover:scale-110 transition-all duration-300 shadow-inner">
                                                <tool.icon size={40} className="filter drop-shadow-sm transition-transform duration-300" />
                                            </div>

                                            {/* Text */}
                                            <span className="relative z-10 font-bold text-gray-800 dark:text-gray-200 group-hover:text-primary transition-colors">
                                                {tool.name}
                                            </span>
                                        </div>
                                    </AnimatedSection>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ToolsPlatforms;
