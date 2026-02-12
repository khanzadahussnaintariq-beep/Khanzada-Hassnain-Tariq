import React, { useState } from 'react';
import { Mail, Send, CheckCircle, X } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import SectionHeading from './SectionHeading';
import { LinkedInIcon, InstagramIcon, FacebookIcon, TwitterIcon, GithubIcon } from './BrandIcons';
import Dock from './Dock';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate sending message
        console.log('Message Sent:', formData);

        // Show success popup
        setIsSubmitted(true);

        // Reset form
        setFormData({ name: '', email: '', message: '' });

        // Hide popup after 3 seconds
        setTimeout(() => {
            setIsSubmitted(false);
        }, 3000);
    };

    return (
        <section id="contact" className="py-20 bg-gray-50 dark:bg-black/50 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <SectionHeading
                    title="Get In Touch"
                    subtitle="Have a project in mind or want to discuss AI automations? I'm just a click away."
                />

                <div className="grid md:grid-cols-2 gap-12 items-start">
                    {/* Contact Info */}
                    <AnimatedSection delay={0.2} className="h-full">
                        <div className="space-y-8 h-full flex flex-col justify-between">
                            <div>
                                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Let's chat. <br /> <span className="text-primary">Tell me about your project.</span></h3>
                                <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-8">
                                    Whether you have a question, a project proposal, or just want to say hi, I’ll try my best to get back to you!
                                </p>

                                <div className="flex items-center gap-4 text-gray-600 dark:text-gray-300 mb-8">
                                    <div className="w-14 h-14 bg-white dark:bg-dark-card rounded-full flex items-center justify-center shadow-lg border border-gray-100 dark:border-gray-800 text-primary">
                                        <Mail size={28} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 font-semibold uppercase tracking-wider">Mail me at</p>
                                        <a href="mailto:khanzadahussnaintariq@gmail.com" className="text-lg font-bold hover:text-primary transition-colors">khanzadahussnaintariq@gmail.com</a>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-8 border-t border-gray-200 dark:border-gray-800">
                                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Connect on Socials</h4>
                                <Dock />
                            </div>
                        </div>
                    </AnimatedSection>

                    {/* Contact Form */}
                    <AnimatedSection delay={0.4}>
                        <div className="bg-white dark:bg-dark-card p-8 md:p-10 rounded-3xl shadow-2xl border border-gray-100 dark:border-gray-800 relative overflow-hidden group">
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Send a Message</h3>

                            <form className="space-y-6" onSubmit={handleSubmit}>
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-[#121212] border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-[#121212] border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
                                    <textarea
                                        id="message"
                                        rows={4}
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-[#121212] border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full py-4 bg-primary hover:bg-primary-dark text-white dark:text-black font-bold rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all flex items-center justify-center gap-2 group/btn"
                                >
                                    Send Message <Send size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                                </button>
                            </form>

                            {/* Decorative BG */}
                            <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
                        </div>
                    </AnimatedSection>
                </div>
            </div>

            {/* Success Popup Modal */}
            {isSubmitted && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 animate-in fade-in duration-300">
                    <div className="bg-white dark:bg-zinc-900 rounded-3xl p-8 max-w-sm w-full shadow-2xl transform transition-all scale-100 animate-in zoom-in-95 duration-300 text-center relative border border-gray-200 dark:border-gray-800">
                        <button
                            onClick={() => setIsSubmitted(false)}
                            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
                        >
                            <X size={20} />
                        </button>

                        <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6 text-green-500 animate-bounce-subtle">
                            <CheckCircle size={40} />
                        </div>

                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Message Sent!</h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-6">
                            Thanks for reaching out, {formData.name || 'friend'}! I'll get back to you soon.
                        </p>

                        <button
                            onClick={() => setIsSubmitted(false)}
                            className="w-full py-3 bg-primary hover:bg-primary-dark text-white dark:text-black font-semibold rounded-xl transition-colors"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Contact;
