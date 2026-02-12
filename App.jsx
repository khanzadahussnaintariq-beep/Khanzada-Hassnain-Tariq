import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import TechnicalSkills from './components/TechnicalSkills';
import ToolsPlatforms from './components/ToolsPlatforms';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';
import SocialMedia from './pages/SocialMedia';
import BlogPage from './pages/BlogPage';
import PageTransition from './components/PageTransition';
import { useTheme } from './hooks/useTheme';
import Lenis from 'lenis';

const LandingPage = () => {
    return (
        <>
            <Hero />
            <About />
            <Experience />
            <TechnicalSkills />
            <ToolsPlatforms />
            <Services />
            <Projects />
            <Contact />
        </>
    );
};

const AppContent = ({ theme, toggleTheme }) => {
    const location = useLocation();
    const showNavbar = location.pathname !== '/social-media';

    return (
        <div className={`min-h-screen transition-colors duration-300 ${theme === 'dark' ? 'dark text-dark-text' : 'text-light-text'}`}>
            <ParticleBackground theme={theme} />
            {showNavbar && <Navbar theme={theme} toggleTheme={toggleTheme} />}
            <Routes>
                <Route path="/" element={<PageTransition><LandingPage /></PageTransition>} />
                <Route path="/blog/:projectId" element={<PageTransition><BlogPage /></PageTransition>} />
                <Route path="/social-media" element={<PageTransition><SocialMedia /></PageTransition>} />
            </Routes>
            {showNavbar && <Footer />}
        </div>
    );
};

const App = () => {
    const { theme, toggleTheme } = useTheme();

    // Initialize Smooth Scrolling
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Exponential easing
            direction: 'vertical',
            gestureDirection: 'vertical',
            smooth: true,
            mouseMultiplier: 1,
            smoothTouch: false,
            touchMultiplier: 2,
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);

    return (
        <Router>
            <AppContent theme={theme} toggleTheme={toggleTheme} />
        </Router>
    );
};

export default App;
