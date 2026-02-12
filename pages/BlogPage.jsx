import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Tag, Share2, ExternalLink, Clock } from 'lucide-react';

const BlogPage = () => {
    const { projectId } = useParams();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [projectId]);

    const projectsData = [
        {
            id: 'the-cake-bar',
            title: "The Cake Bar",
            category: "Web Development",
            image: "/assets/images/the-cake-bar.jpg",
            date: "October 15, 2023",
            author: "Hassnain Tariq",
            readTime: "6 min read",
            content: `
                <p class="lead text-xl font-medium mb-8 text-gray-700 dark:text-gray-300">
                    Redefining the digital presence of a boutique bakery with a focus on sensory web design, seamless user experience, and conversion-optimized ordering flows.
                </p>

                <h2 class="text-3xl font-bold mb-6 mt-12 text-gray-900 dark:text-white">The Challenge</h2>
                <p class="mb-6">
                    In the competitive world of artisanal bakeries, visual appeal is everything. "The Cake Bar" approached us with a specific problem: their existing social-media-based ordering system was becoming unmanageable as they scaled. They missed orders, struggled with communicating customization options, and lacked a central hub that truly reflected their brand's premium aesthetic. 
                </p>
                <p class="mb-6">
                    The primary objective was to build a comprehensive web platform that could serve two distinct purposes: functioning as a high-end portfolio of their edible art and operating as a robust tool for capturing detailed custom orders. The client insisted on a design that felt "sweet but sophisticated," avoiding the clichéd pastel overloads often associated with bakery websites in favor of something more modern, sleek, and appetizing.
                </p>
                <p class="mb-6">
                    Furthermore, performance was key. With high-resolution imagery being central to the experience, we needed to ensure that the site loaded instantly on mobile devices, where 80% of their traffic originated. Balancing rich media with high performance scores was a technical hurdle we were eager to jump.
                </p>

                <h2 class="text-3xl font-bold mb-6 mt-12 text-gray-900 dark:text-white">The Solution: Sensory Web Design</h2>
                <p class="mb-6">
                    Our approach began with what we call "Sensory Web Design"—using visual cues to evoke a sense of taste and smell. We selected a color palette rich in creamy whites, dark chocolates, and gold accents to convey luxury. Typography played a huge role; we paired a modern serif font for headings to give an editorial look with a clean sans-serif for body text to maximize readability.
                </p>
                <p class="mb-6">
                    Technically, we chose <strong>React.js</strong> for its component-based architecture, allowing us to build reusable UI elements like product cards and gallery grids. To handle the styling, we utilized <strong>Tailwind CSS</strong>. Its utility-first approach enabled us to rapidly prototype and fine-tune spacing, typography, and responsive behaviors without fighting against a rigid framework.
                </p>
                
                <h3 class="text-2xl font-bold mb-4 mt-8 text-gray-900 dark:text-white">Custom Order Flow</h3>
                <p class="mb-6">
                    The crown jewel of the development was the custom order builder. Instead of a standard e-commerce cart, which didn't fit the bespoke nature of their cakes, we developed a multi-step guided form. This form asks the user about the occasion, flavor preferences, dietary restrictions, and visual themes.
                </p>
                <p class="mb-6">
                    Crucially, rather than complicating the backend with a full payment gateway integration immediately, we integrated the form with the WhatsApp Business API. When a user submits an inquiry, it formats the data into a clean message and opens a WhatsApp chat with the bakery owner. This kept the human connection alive—a vital part of their brand—while structuring the incoming data perfectly.
                </p>

                <h2 class="text-3xl font-bold mb-6 mt-12 text-gray-900 dark:text-white">Key Features & Technical Highlights</h2>
                <ul class="list-disc pl-6 space-y-3 mb-8 marker:text-primary">
                    <li><strong>Dynamic Gallery Filtering:</strong> Users can filter creations by Wedding, Birthday, Corporate, and more, using a custom hook that manages state without page reloads.</li>
                    <li><strong>Lazy Loading Images:</strong> Implemented progressive image loading to ensure the site becomes interactive immediately, swapping low-res placeholders for high-res assets as they enter the viewport.</li>
                    <li><strong>Dark Mode Support:</strong> A unique feature for a bakery site, the dark mode flips the aesthetic to a "Late Night Dessert" vibe, using deep cocoa tones that reduce eye strain.</li>
                    <li><strong>SEO Optimization:</strong> Since it's a single-page application (SPA), we used React Helmet to manage meta tags dynamically, ensuring each product category ranks well on local search results.</li>
                </ul>

                <h2 class="text-3xl font-bold mb-6 mt-12 text-gray-900 dark:text-white">Results and Impact</h2>
                <p class="mb-6">
                    Since the launch of the new website, The Cake Bar has reported a <strong>40% increase in inquiry volume</strong>. More importantly, the time spent going back and forth with customers to clarify order details has dropped by nearly 70%, thanks to the structured data provided by the new form.
                </p>
                <p class="mb-6">
                    The site also achieved a perfect 100 score on Google Lighthouse for Accessibility and SEO, proving that beautiful design does not have to come at the cost of technical excellence. This project stands as a testament to how modern web technologies like React and Tailwind can transform a small local business into a digital powerhouse.
                </p>
            `,
            tags: ["Java Script", "Tailwind", "React.js"]
        },
        {
            id: 'marriage-hall',
            title: "Marriage Hall",
            category: "Web Design",
            image: "/assets/images/marriage-hall.jpg",
            date: "November 20, 2023",
            author: "Hassnain Tariq",
            readTime: "5 min read",
            content: `
                <p class="lead text-xl font-medium mb-8 text-gray-700 dark:text-gray-300">
                    Merging elegance with efficiency: A design case study on transforming a physical venue's brand into a captivating digital experience.
                </p>

                <h2 class="text-3xl font-bold mb-6 mt-12 text-gray-900 dark:text-white">The Challenge</h2>
                <p class="mb-6">
                    The wedding industry is driven by emotion and trust. "The Grand Venue" (a generic name for the client) had a stunning physical location, but their digital presence was outdated and clunky. Potential clients would visit their website and leave unimpressed, assuming the venue itself was equally dated. The bounce rate was high, and the conversion rate for booking inquiries was alarmingly low.
                </p>
                <p class="mb-6">
                    Our challenge was twofold: Brand Repositioning and Conversion Optimization. We needed to create a website that not only looked breathtakingly beautiful—reflecting the actual venue—but also guided overwhelmed couples seamlessly towards scheduling a tour. The site had to convey trust, luxury, and capability, all within the first few seconds of landing.
                </p>

                <h2 class="text-3xl font-bold mb-6 mt-12 text-gray-900 dark:text-white">Design Philosophy & UI/UX Strategy</h2>
                <p class="mb-6">
                    We started with a "Mobile-First" strategy but with a "Desktop-First" aesthetic ambition. We knew that on desktop, we wanted cinematic, full-width visuals that immersed the user. Using <strong>Figma</strong>, we prototyped a User Interface that relied heavily on negative space (whitespace) to create a feeling of openness and luxury—mirroring the spaciousness of the halls themselves.
                </p>
                <p class="mb-6">
                    The typography selection was critical. We paired a high-contrast serif font for emotional headlines with a geometric sans-serif for functional text. This combination is classic yet modern, suggesting timeless elegance. The color palette was derived from the venue's actual interior design: soft creams, champagnes, and muted golds.
                </p>

                <h3 class="text-2xl font-bold mb-4 mt-8 text-gray-900 dark:text-white">Development Implementation (React.js)</h3>
                <p class="mb-6">
                    While the design was the star, the implementation had to be robust. We used <strong>React.js</strong> to ensure smooth, app-like transitions between sections. When a user explores the "Gallery," "Services," or "Contact" sections, the page doesn't jarringly reload; content glides in.
                </p>
                <p class="mb-6">
                    One specific technical solution was the "Virtual Tour" integration. We embedded 360-degree panoramic views using a custom React component that initializes only when the user interacts with it, preserving the initial page load speed. This allowed users to practically walk through the venue from their couch.
                </p>

                <h2 class="text-3xl font-bold mb-6 mt-12 text-gray-900 dark:text-white">Key Features</h2>
                <ul class="list-disc pl-6 space-y-3 mb-8 marker:text-primary">
                    <li><strong>Interactive Availability Calendar:</strong> A mock-up calendar widget allowing users to check for open dates instantly, reducing phone calls for booked-out days.</li>
                    <li><strong>Testimonial Slider:</strong> A custom-built, touch-enabled carousel showcasing love stories from past couples, building social proof.</li>
                    <li><strong>Smart Inquiry Form:</strong> A multi-conditional form that adapts questions based on the event type (Wedding vs. Corporate vs. Party).</li>
                </ul>

                <h2 class="text-3xl font-bold mb-6 mt-12 text-gray-900 dark:text-white">Impact</h2>
                <p class="mb-6">
                    The redesign transformed their sales funnel. Visual engagement increased by 200%, with the average session duration jumping from 45 seconds to nearly 3 minutes. The venue reported a 50% increase in tour bookings within the first month.
                </p>
                <p class="mb-6">
                    This project highlights the power of visual storytelling in web design. By aligning the digital experience with the physical reality of the luxury venue, we bridged the gap of trust and emotion, turning visitors into happy clients.
                </p>
            `,
            tags: ["UI/UX", "Figma", "React.js"]
        },
        {
            id: 'monthly-report-generator',
            title: "Monthly Report Generator",
            category: "Automation",
            image: "/assets/images/monthly-report-generator.jpg",
            date: "December 05, 2023",
            author: "Hassnain Tariq",
            readTime: "4 min read",
            content: `
                <p class="lead text-xl font-medium mb-8 text-gray-700 dark:text-gray-300">
                    Eliminating 120 hours of manual work annually through intelligent workflow automation using n8n and Airtable.
                </p>

                <h2 class="text-3xl font-bold mb-6 mt-12 text-gray-900 dark:text-white">The Challenge</h2>
                <p class="mb-6">
                    For many businesses, the end of the month is a nightmare of spreadsheets and manual data entry. Our client, a mid-sized marketing agency, was no exception. Their account managers were spending 2-5 hours per client every month manually copy-pasting data from their tracking tools into PDF reports for clients.
                </p>
                <p class="mb-6">
                    This manual process was not only expensive in terms of human hours but was also prone to errors. Typos in ad spend figures or ROI calculations were causing friction with clients. They needed a "Set it and Forget it" solution that was 100% accurate and required zero human intervention.
                </p>

                <h2 class="text-3xl font-bold mb-6 mt-12 text-gray-900 dark:text-white">The Automation Architecture</h2>
                <p class="mb-6">
                    We chose a Low-Code/No-Code stack for this solution to ensure it was maintainable by the client's internal team later. The core of the system is <strong>n8n</strong>, a powerful workflow automation tool.
                </p>
                
                <h3 class="text-2xl font-bold mb-4 mt-8 text-gray-900 dark:text-white">How it Works</h3>
                <ol class="list-decimal pl-6 space-y-3 mb-8 marker:text-primary">
                    <li><strong>Data Aggregation (Airtable):</strong> All campaign data is automatically synced into an Airtable base throughout the month via APIs. This acts as the single source of truth.</li>
                    <li><strong>Trigger Event:</strong> On the 1st of every month at 9:00 AM, the n8n workflow triggers.</li>
                    <li><strong>Data Fetching:</strong> The workflow queries Airtable for records matching the previous month.</li>
                    <li><strong>PDF Generation:</strong> n8n sends this data to a document generation API (like PDFMonkey or Google Docs templating), which populates a branded template with the dynamic charts and figures.</li>
                    <li><strong>Distribution:</strong> Finally, the generated PDF is attached to a personalized email using the Gmail node and sent directly to the client stakeholders.</li>
                </ol>

                <h2 class="text-3xl font-bold mb-6 mt-12 text-gray-900 dark:text-white">Technical Complexities</h2>
                <p class="mb-6">
                    One main challenge was formatting currency and dates correctly across different client regions. We used JavaScript snippets within n8n nodes to handle localization logic, ensuring European clients saw dates in DD/MM/YYYY format and US clients saw MM/DD/YYYY.
                </p>
                <p class="mb-6">
                    Error handling was another priority. We built a robust error branch in the workflow. If any step fails (e.g., the PDF generation API times out), the system logs the error to a Slack channel and pauses that specific client's report without stopping the entire batch.
                </p>

                <h2 class="text-3xl font-bold mb-6 mt-12 text-gray-900 dark:text-white">Business Impact</h2>
                <p class="mb-6">
                    The ROI on this project was immediate. The agency saved approximately 10 hours per month per account manager. With 5 account managers, that's 50 hours a month—literally a part-time employee's worth of work saved. 
                </p>
                <p class="mb-6">
                    Beyond the time savings, the client reporting became standardized and error-free, improving their professional image. This project demonstrates that automation isn't just about speed; it's about reliability and scalability.
                </p>
            `,
            tags: ["n8n", "Airtable", "Automation"]
        },
        {
            id: 'ai-voice-agent',
            title: "AI Voice Agent",
            category: "AI & Voice",
            image: "/assets/images/ai-voice-agent.jpg",
            date: "January 10, 2024",
            author: "Hassnain Tariq",
            readTime: "7 min read",
            content: `
                <p class="lead text-xl font-medium mb-8 text-gray-700 dark:text-gray-300">
                    Revolutionizing customer support with a human-like AI Voice Agent capable of handling complex booking queries and real-time conversation.
                </p>

                <h2 class="text-3xl font-bold mb-6 mt-12 text-gray-900 dark:text-white">The Challenge</h2>
                <p class="mb-6">
                    In the property management and hospitality sector, missing a call often means missing a sale. Our client managed a portfolio of 20 Airbnb properties and was overwhelmed by inquiry calls at all hours of the night. Hiring a 24/7 human support team was cost-prohibitive.
                </p>
                <p class="mb-6">
                    They needed an automated system that didn't <em>sound</em> automated. The typical "Press 1 for Sales" IVR systems were impersonal and frustrated potential guests. The goal was to build a Voice Agent that could understand natural language, answer specific questions about amenities ("Is there a coffee machine?"), and even check availability in real-time.
                </p>

                <h2 class="text-3xl font-bold mb-6 mt-12 text-gray-900 dark:text-white">The AI Stack</h2>
                <p class="mb-6">
                    This project required orchestrating several cutting-edge AI technologies to work in near real-time latency. A delay of more than 1 second breaks the illusion of conversation.
                </p>
                <ul class="list-disc pl-6 space-y-3 mb-8 marker:text-primary">
                    <li><strong>Telephony (Twilio):</strong> We used Twilio to handle the incoming phone line and manage the audio stream.</li>
                    <li><strong>Speech-to-Text (Deepgram):</strong> For transcribing the caller's voice instantly. Deepgram was chosen for its incredible speed and accuracy with accents.</li>
                    <li><strong>Intelligence (OpenAI GPT-4):</strong> The "brain" of the agent. We engineered detailed system prompts to give the AI a friendly, helpful persona and restricted its knowledge to the client's property database to prevent hallucinations.</li>
                    <li><strong>Text-to-Speech (ElevenLabs):</strong> Converting the AI's text response back into high-fidelity audio. ElevenLabs provided a warm, professional voice that is nearly indistinguishable from a human.</li>
                </ul>

                <h2 class="text-3xl font-bold mb-6 mt-12 text-gray-900 dark:text-white">Developing the Orchestrator</h2>
                <p class="mb-6">
                    Connecting these services was the real engineering feat. We used <strong>n8n</strong> as the backend logic layer (though for lower latency, a custom Node.js websocket server is often preferred, n8n was sufficient for the prototype phase).
                </p>
                <p class="mb-6">
                    We implemented "function calling" within the GPT-4 model. This meant if a user asked, "Is the downtown apartment available next Tuesday?", the AI wouldn't just guess. It would recognize it needed data, trigger a function to query the booking calendar API, get the result, and <em>then</em> formulate its spoken response: "Yes, the downtown apartment is available then. Would you like me to text you the booking link?"
                </p>

                <h2 class="text-3xl font-bold mb-6 mt-12 text-gray-900 dark:text-white">Results & Future</h2>
                <p class="mb-6">
                    The deployed Voice Agent now handles 100% of initial inbound calls. It successfully resolves about 60% of queries without any human involvement. For the other 40%—complex issues or angry customers—it intelligently routes the call to the property manager's cell phone with a summary of the conversation so far.
                </p>
                <p class="mb-6">
                    This system has reduced the client's "creation-to-response" time to zero, significantly boosting their booking conversion rate and allowing them to sleep through the night while their AI employee works the phones.
                </p>
            `,
            tags: ["ElevenLabs", "Twilio", "n8n"]
        }
    ];

    const project = projectsData.find(p => p.id === projectId) || projectsData[0];

    return (
        <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
            <Link to="/#projects" className="inline-flex items-center text-primary hover:underline mb-8 font-medium transition-transform hover:-translate-x-1">
                <ArrowLeft size={20} className="mr-2" /> Back to Projects
            </Link>

            <article className="animate-in fade-in slide-in-from-bottom-8 duration-700">
                <header className="mb-12">
                    <div className="flex flex-wrap gap-4 mb-6">
                        <span className="bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-bold border border-primary/20">
                            {project.category}
                        </span>
                        <span className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm">
                            <Clock size={16} /> {project.readTime}
                        </span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-8 leading-tight">{project.title}</h1>

                    <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 dark:text-gray-400 border-y border-gray-200 dark:border-gray-800 py-6">
                        <div className="flex items-center gap-2">
                            <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
                                <img src="https://picsum.photos/100/100" alt={project.author} className="w-full h-full object-cover" />
                            </div>
                            <span className="font-medium text-gray-900 dark:text-white">{project.author}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Calendar size={18} />
                            <span>{project.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Tag size={18} />
                            <span>{project.tags.join(', ')}</span>
                        </div>
                    </div>
                </header>

                <div className="relative h-[400px] md:h-[500px] w-full rounded-3xl overflow-hidden mb-16 shadow-2xl">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
                        onError={(e) => { e.target.src = `https://picsum.photos/1200/800?random=${Math.random()}`; }}
                    />
                </div>

                <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-300 leading-looose prose-headings:font-bold prose-headings:text-gray-900 dark:prose-headings:text-white prose-a:text-primary hover:prose-a:text-primary-dark prose-img:rounded-2xl"
                    dangerouslySetInnerHTML={{ __html: project.content }}
                />

                <div className="mt-20 pt-10 border-t border-gray-200 dark:border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-6">
                    <p className="text-lg font-bold text-gray-900 dark:text-white">Share this case study</p>
                    <div className="flex gap-4">
                        <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all font-medium text-gray-900 dark:text-white icon-hover-shake">
                            <Share2 size={20} /> Share
                        </button>
                        <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-white hover:bg-primary-dark transition-all font-medium shadow-lg shadow-primary/25 hover:shadow-primary/40 transform hover:-translate-y-1">
                            <ExternalLink size={20} /> View Live Project
                        </button>
                    </div>
                </div>
            </article>
        </main>
    );
};

export default BlogPage;
