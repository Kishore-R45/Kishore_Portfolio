
import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { Github, Linkedin, ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openResume = () => {
    window.open('../public/assets/Resume-Final.pdf', '_blank');
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Side - Image */}
          <div className="flex justify-center lg:justify-start order-1" data-aos="fade-right">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-blue-200 dark:border-blue-400/30 hover:border-blue-400 dark:hover:border-blue-400/60 transition-all duration-500 hover:scale-105 group shadow-2xl">
                <img
                  src="../public/assets/myimage.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 animate-pulse" />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="text-center lg:text-left order-2" data-aos="fade-left">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Kishore R
              </span>
            </h1>

            <div className="text-2xl md:text-3xl font-semibold mb-4 h-16">
              <TypeAnimation
                sequence={[
                  'I am a Developer',
                  2000,
                  'I am a Problem Solver',
                  2000,
                  'I am a Gen AI Enthusiast',
                  2000,
                  'I am a UI/UX designer',
                  2000,
                  'I am a Video Editor',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                className="text-gray-700 dark:text-gray-300"
                repeat={Infinity}
              />
            </div>

            <p className="text-xl text-gray-600 dark:text-gray-400 mb-6 max-w-2xl">
              Passionate Full-Stack Developer and Gen AI Enthusiast with expertise in Modern technologies. 
              I love creating innovative solutions and bringing ideas to life through code.
            </p>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start space-x-6 mb-6">
              <a
                href="https://github.com/Kishore-R45"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 hover:scale-110 hover:shadow-lg transition-all duration-300"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/kishore-r45"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 hover:scale-110 hover:shadow-lg transition-all duration-300"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col md:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={scrollToContact}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 hover:scale-105 hover:shadow-lg transition-all duration-300"
              >
                Contact Me
              </button>
              <button
                onClick={openResume}
                className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-blue-200 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800 hover:scale-105 transition-all duration-300"
              >
                View Resume
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Arrow */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2" data-aos="fade-up" data-aos-delay="1000">
          <div className="animate-bounce">
            <ArrowDown className="w-6 h-6 text-gray-500 dark:text-gray-400" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
