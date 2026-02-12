import React from 'react';
import AnimatedSection from './AnimatedSection';
import SectionHeading from './SectionHeading';

const About = () => {
    return (
        <section id="about" className="py-20 bg-gray-50 dark:bg-black/50 transition-colors">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeading title="About Me" />

                <div className="grid md:grid-cols-2 gap-12 items-start">
                    {/* Bio */}
                    <AnimatedSection delay={0.2} className="h-full">
                        <div className="bg-white dark:bg-dark-card p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800 hover:border-primary/50 transition-colors h-full cursor-pointer hover:shadow-2xl hover:-translate-y-2 duration-300">
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                                <span className="text-primary">01.</span> Who I Am
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6 text-lg">
                                I am a student of BSCS at the University of Lahore, currently in my 2nd semester. I’m a front-end developer and an AI automation expert (No-Code & Low-Code).
                            </p>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6 text-lg">
                                Passionate about creating modern digital experiences, building intelligent automations, and developing AI-powered voice agents that solve real-world problems.
                            </p>
                            <div className="flex flex-wrap gap-3 mt-8">
                                <span className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium hover:bg-primary hover:text-white transition-colors">🚀 Front-End</span>
                                <span className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium hover:bg-primary hover:text-white transition-colors">🤖 AI Automation</span>
                                <span className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium hover:bg-primary hover:text-white transition-colors">⚡ No-Code</span>
                            </div>
                        </div>
                    </AnimatedSection>

                    {/* Education */}
                    <AnimatedSection delay={0.4}>
                        <div className="space-y-8">
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                                <span className="text-primary">02.</span> Education
                            </h3>

                            <div className="relative border-l-2 border-gray-200 dark:border-gray-800 ml-3 space-y-10 pl-8 py-2">

                                /* Item 1 */
                                <div className="relative group cursor-pointer">
                                    <span className="absolute -left-[41px] top-1 h-6 w-6 rounded-full bg-blue-500 border-4 border-white dark:border-dark-bg animate-pulse"></span>
                                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                                        <h4 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors">BSCS</h4>
                                        <span className="text-sm font-bold font-mono bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 px-3 py-1 rounded-full border border-blue-200 dark:border-blue-800">
                                            Current
                                        </span>
                                    </div>
                                    <div className="text-gray-600 dark:text-gray-300 font-medium">University of Lahore (UOL)</div>
                                    <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">Computer Science</p>
                                </div>

                                /* Item 2 */
                                <div className="relative group cursor-pointer">
                                    <span className="absolute -left-[41px] top-1 h-6 w-6 rounded-full bg-green-500 border-4 border-white dark:border-dark-bg group-hover:scale-110 transition-transform"></span>
                                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                                        <h4 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors">Intermediate</h4>
                                        <span className="text-sm font-bold font-mono bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-300 px-3 py-1 rounded-full border border-green-200 dark:border-green-800">
                                            Completed
                                        </span>
                                    </div>
                                    <div className="text-gray-600 dark:text-gray-300 font-medium">Forman Christian College (FCC)</div>
                                    <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">FSc Pre-Medical</p>
                                </div>

                                /* Item 3 */
                                <div className="relative group cursor-pointer">
                                    <span className="absolute -left-[41px] top-1 h-6 w-6 rounded-full bg-green-500 border-4 border-white dark:border-dark-bg group-hover:scale-110 transition-transform"></span>
                                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                                        <h4 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors">Matriculation</h4>
                                        <span className="text-sm font-bold font-mono bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-300 px-3 py-1 rounded-full border border-green-200 dark:border-green-800">
                                            Completed
                                        </span>
                                    </div>
                                    <div className="text-gray-600 dark:text-gray-300 font-medium">JW Grammar High School</div>
                                    <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">Phool Nagar</p>
                                </div>

                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </div>
        </section>
    );
};

export default About;
