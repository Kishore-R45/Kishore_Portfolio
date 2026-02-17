
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Education from '../components/Education';
import CodingPlatforms from '../components/CodingPlatforms';
import Certifications from '../components/Certifications';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import AnimatedBackground from '../components/AnimatedBackground';
import { ThemeProvider } from '../context/ThemeContext';

const Index = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      offset: 50,
      mirror: true,
    });
  }, []);

  return (
    <ThemeProvider>
      <div className="relative min-h-screen w-full overflow-x-hidden bg-background transition-all duration-500">
        <AnimatedBackground />
        <Navbar />
        <main className="relative z-10 w-full">
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Education />
          <CodingPlatforms />
          <Certifications />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Index;
