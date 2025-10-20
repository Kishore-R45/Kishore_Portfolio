
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
import DotGrid from '../components/DotGrid';
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
      <div className="relative min-h-screen w-full overflow-x-hidden bg-white dark:bg-gray-950 transition-all duration-500">
        <DotGrid baseColor="#5227FF" activeColor="#40ffaa" proximity={150} dotSize={12} gap={28} />
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
