import React from 'react';
import { TrendingUp, ShieldCheck, Zap, ArrowRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import SectionHeading from './SectionHeading';

const WhyAutomate = () => {
    const metrics = [
        {
            title: "Lead Response",
            description: "Instant engagement with new potential clients 24/7.",
            manualTime: "30 mins",
            autoTime: "Instant",
            manualValue: 100,
            autoValue: 2,
            saved: "99% Faster",
            icon: Zap,
            color: "text-yellow-500",
            bg: "bg-yellow-500/10",
            barColor: "bg-yellow-500"
        },
        {
            title: "Data Entry & Sync",
            description: "Moving data between CRM, Sheets, and Email without errors.",
            manualTime: "10 hrs/wk",
            autoTime: "0 hrs",
            manualValue: 100,
            autoValue: 0.5,
            saved: "100% Accuracy",
            icon: ShieldCheck,
            color: "text-blue-500",
            bg: "bg-blue-500/10",
            barColor: "bg-blue-500"
        },
        {
            title: "Report Generation",
            description: "Compiling weekly analytics and performance reports automatically.",
            manualTime: "4 hrs/wk",
            autoTime: "2 mins",
            manualValue: 100,
            autoValue: 5,
            saved: "40 hrs/mo Saved",
            icon: TrendingUp,
            color: "text-green-500",
            bg: "bg-green-500/10",
            barColor: "bg-green-500"
        }
    ];

    return (
        <section className="py-24 bg-gray-50/50 dark:bg-[#080808] relative overflow-hidden transition-colors duration-300">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px]"></div>
                <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-[100px]"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <SectionHeading
                    title="The ROI of Automation"
                    subtitle="Stop trading time for money. Build systems that work while you sleep."
                />

                <div className="grid lg:grid-cols-3 gap-8">
                    {metrics.map((item, index) => (
                        <ScrollReveal key={index} delay={index * 0.1}>
                            <div className="h-full bg-white dark:bg-[#121212] rounded-3xl p-8 border border-gray-100 dark:border-gray-800 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group flex flex-col justify-between">

                                <div>
                                    {/* Header */}
                                    <div className="flex items-start justify-between mb-6">
                                        <div className={`p-3 rounded-2xl ${item.bg} ${item.color}`}>
                                            <item.icon size={28} />
                                        </div>
                                        <span className={`text-xs font-bold px-3 py-1 rounded-full ${item.bg} ${item.color} uppercase tracking-wider`}>
                                            {item.saved}
                                        </span>
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                                    <p className="text-gray-500 dark:text-gray-400 text-sm mb-8 leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>

                                {/* Visualization */}
                                <div className="space-y-5">
                                    {/* Manual */}
                                    <div>
                                        <div className="flex justify-between text-xs font-semibold mb-2">
                                            <span className="text-gray-400">Manual Process</span>
                                            <span className="text-red-400">{item.manualTime}</span>
                                        </div>
                                        <div className="w-full h-2 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                                            <div className="h-full bg-gray-300 dark:bg-gray-700 w-full rounded-full"></div>
                                        </div>
                                    </div>

                                    {/* Auto */}
                                    <div>
                                        <div className="flex justify-between text-xs font-semibold mb-2">
                                            <span className="text-gray-900 dark:text-white">With Automation</span>
                                            <span className={item.color}>{item.autoTime}</span>
                                        </div>
                                        <div className="w-full h-2 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                                            <div
                                                className={`h-full ${item.barColor} rounded-full relative shadow-[0_0_10px_currentColor]`}
                                                style={{ width: `${item.autoValue}%` }}
                                            >
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </ScrollReveal>
                    ))}
                </div>

                {/* Bottom Callout */}
                <ScrollReveal delay={0.4}>
                    <div className="mt-16 bg-gray-900 dark:bg-white rounded-3xl p-8 md:p-12 text-center relative overflow-hidden group">
                        <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-8 text-white dark:text-black">
                            <div className="text-left md:max-w-lg">
                                <h4 className="text-2xl md:text-3xl font-bold mb-2">Reclaim 20+ Hours Weekly</h4>
                                <p className="opacity-80 text-lg">That's ~1,000 hours a year you can spend on growing your business instead of repetitive tasks.</p>
                            </div>
                            <div className="h-12 w-[1px] bg-white/20 dark:bg-black/20 hidden md:block"></div>
                            <a href="#contact" className="px-8 py-4 bg-primary text-black font-bold rounded-full hover:bg-white dark:hover:bg-gray-200 transition-all shadow-lg flex items-center gap-2 transform hover:scale-105">
                                Automate Now <ArrowRight size={20} />
                            </a>
                        </div>

                        {/* Decorative BG */}
                        <div className="absolute inset-0 opacity-20 dark:opacity-5 pointer-events-none">
                            <div className="absolute -right-20 -top-20 w-64 h-64 bg-primary rounded-full blur-3xl group-hover:bg-primary/80 transition-colors duration-700"></div>
                            <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-blue-500 rounded-full blur-3xl group-hover:bg-blue-400 transition-colors duration-700"></div>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
};

export default WhyAutomate;
