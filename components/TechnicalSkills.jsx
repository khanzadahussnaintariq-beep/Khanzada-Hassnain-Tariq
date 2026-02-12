import React from 'react';
import { Video, Bot } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import SectionHeading from './SectionHeading';
import { HtmlIcon, CssIcon, JsIcon, CppIcon } from './BrandIcons';

const skills = [
    { name: "HTML", level: 90, icon: HtmlIcon },
    { name: "CSS", level: 90, icon: CssIcon },
    { name: "JavaScript", level: 85, icon: JsIcon },
    { name: "C++", level: 75, icon: CppIcon },
    { name: "AI Automations", level: 85, icon: Bot },
    { name: "Video Editing", level: 80, icon: Video },
];

const TechnicalSkills = () => {
    return (
        <section id="skills" className="py-20 bg-gray-50 dark:bg-black/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeading title="Technical Skills" />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skills.map((skill, index) => (
                        <AnimatedSection key={skill.name} delay={index * 0.1}>
                            <div className="bg-white dark:bg-dark-card p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 hover:border-primary transition-colors h-full cursor-pointer">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                                        {/* Render standard Lucide icons or new Brand icons flexibly */}
                                        {skill.icon ? (
                                            <skill.icon size={24} className={skill.name === 'AI Automations' || skill.name === 'Video Editing' ? 'text-primary' : ''} />
                                        ) : null}
                                    </div>
                                    <h3 className="font-bold text-lg text-gray-900 dark:text-white">{skill.name}</h3>
                                </div>
                                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 overflow-hidden">
                                    <div
                                        className="bg-primary h-2.5 rounded-full transition-all duration-1000 ease-out"
                                        style={{ width: `${skill.level}%` }}
                                    ></div>
                                </div>
                                <div className="text-right mt-2 text-xs text-gray-500 dark:text-gray-400 font-mono">
                                    {skill.level}%
                                </div>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechnicalSkills;
