import React, { useState, useRef } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { Github, Linkedin, ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const imageRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imageRef.current) return;
    const rect = imageRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const tiltX = (y - centerY) / centerY * 15;
    const tiltY = (centerX - x) / centerX * 15;
    setTilt({ x: tiltX, y: tiltY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openResume = () => {
    window.open('/assets/Kishore Resume Final.pdf', '_blank');
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Image */}
          <div className="flex justify-center lg:justify-start order-1 lg:order-1" data-aos="fade-right">
            <div 
              ref={imageRef}
              className="relative"
              style={{ perspective: '1000px' }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              {/* Subtle Background Glow */}
              <div 
                className="absolute inset-0 rounded-full pointer-events-none"
                style={{
                  background: 'linear-gradient(135deg, rgba(6,182,212,0.4), rgba(139,92,246,0.4))',
                  filter: 'blur(20px)',
                  transform: 'scale(1.08)',
                  animation: 'subtleGlow 4s ease-in-out infinite',
                }}
              />

              {/* Image Container */}
              <div 
                className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-cyan-500/30 hover:border-cyan-400/60 transition-all duration-300 group shadow-2xl shadow-cyan-500/20"
                style={{
                  transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(1.05)`,
                  transition: 'transform 0.1s ease-out',
                }}
              >
                <img
                  src="/assets/myimage.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="text-center lg:text-left order-2 lg:order-2" data-aos="fade-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-500 bg-clip-text text-transparent">
                Kishore R
              </span>
            </h1>

            <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-4 h-12 sm:h-14 md:h-16">
              <TypeAnimation
                sequence={[
                  'I am a Software Engineer',
                  2000,
                  'I am a Gen AI Enthusiast',
                  2000,
                  'I am a Problem Solver',
                  2000,
                  'I am a UI/UX designer',
                  2000,
                  'I am a Video Editor',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                className="text-muted-foreground"
                repeat={Infinity}
              />
            </div>

            <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 max-w-2xl mx-auto lg:mx-0">
              Passionate Software Engineer and Gen AI Enthusiast with expertise in Modern technologies. 
              I love creating innovative solutions and bringing ideas to life through code.
            </p>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start space-x-4 sm:space-x-6 mb-6">
              <a
                href="https://github.com/Kishore-R45"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 text-white hover:from-cyan-400 hover:to-violet-400 hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/kishore-r45"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 text-white hover:from-cyan-400 hover:to-violet-400 hover:scale-110 hover:shadow-lg hover:shadow-violet-500/25 transition-all duration-300"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <button
                onClick={scrollToContact}
                className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-cyan-500 to-violet-500 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-violet-400 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 text-sm sm:text-base"
              >
                Contact Me
              </button>
              <button
                onClick={openResume}
                className="px-6 sm:px-8 py-3 sm:py-4 bg-secondary/50 backdrop-blur-sm border-2 border-border text-foreground font-semibold rounded-lg hover:bg-secondary hover:border-primary/30 hover:scale-105 transition-all duration-300 text-sm sm:text-base"
              >
                View Resume
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Arrow */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2" data-aos="fade-up" data-aos-delay="1000">
          <div className="animate-bounce">
            <ArrowDown className="w-6 h-6 text-muted-foreground" />
          </div>
        </div>
      </div>

      {/* Subtle Glow Animation */}
      <style>{`
        @keyframes subtleGlow {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1.05);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.1);
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;