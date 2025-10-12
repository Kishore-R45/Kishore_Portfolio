import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Award, Pause, Play } from 'lucide-react';

const Certifications: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const certifications = [
    {
      title: "Oracle Java",
      image: "/Certificate-Portfolio/Oracle-Java.png"
    },
    {
      title: "Cisco Networking Basics",
      image: "/Certificate-Portfolio/Networking Basics.png"
    },
    {
      title: "Innovate - Inspire Season 13 Winner",
      image: "/Certificate-Portfolio/Innovate & Inspire - Season 13.png"
    },
    {
      title: "Hackerrank Problem solving basic",
      image: "/Certificate-Portfolio/Hackerrank-ProblemSolving.png"
    },
    {
      title: "Hackerrank Problem solving intermidiate",
      image: "/Certificate-Portfolio/Hackerrank-ProblemSolving-Intermidiate.png"
    },
    {
      title: "Hackerrank Java",
      image: "/Certificate-Portfolio/Hackerrank-Java.jpg"
    },
    {
      title: "Udemy Full stack",
      image: "/Certificate-Portfolio/Udemy Full-Stack.jpg"
    },
    {
      title: "NPTEL Competetive Programming",
      image: "/Certificate-Portfolio/NPTEL-CompetetiveProgramming.jpg"
    },
    {
      title: "NPTEL Education Sustainable Development",
      image: "/Certificate-Portfolio/NPTEL-Education.png"
    },
    {
      title: "NPTEL Entrepernarship",
      image: "/Certificate-Portfolio/NPTEL-Entrepernarship.png"
    },
    {
      title: "NPTEL IOT",
      image: "/Certificate-Portfolio/Introducction to IOT.png"
    },
    {
      title: "Mongo DB",
      image: "/Certificate-Portfolio/MongoDB.png"
    },
    {
      title: "IT - Workshop",
      image: "/Certificate-Portfolio/IT-Workshop.png"
    },
    {
      title: "Microsoft AI Certification",
      image: "/Certificate-Portfolio/Microsoft-AI.jpg"
    },
    {
      title: "Flipkart GRID",
      image: "/Certificate-Portfolio/Flipkart.jpg"
    },
    {
      title: "Infosis Data science",
      image: "/Certificate-Portfolio/Datascience(Infosis).jpg"
    },
    {
      title: "Coursera Cloud computing",
      image: "/Certificate-Portfolio/Coursera-Cloud(SaaS).png"
    },
    {
      title: "Cresent - Figma",
      image: "/Certificate-Portfolio/Creasent-Figma.jpg"
    },
    {
      title: "Cresent - Sector",
      image: "/Certificate-Portfolio/Creasent-Sector.jpg"
    }
  ];

  // Get the three certificates to display
  const getPrevIndex = (index: number) => 
    index === 0 ? certifications.length - 1 : index - 1;
  
  const getNextIndex = (index: number) => 
    index === certifications.length - 1 ? 0 : index + 1;

  useEffect(() => {
    if (!isPlaying) return;
    
    const interval = setInterval(() => {
      handleNext();
    }, 4000);

    return () => clearInterval(interval);
  }, [isPlaying, currentIndex]);

  const handlePrevious = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex(getPrevIndex(currentIndex));
      setIsTransitioning(false);
    }, 300);
  };

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex(getNextIndex(currentIndex));
      setIsTransitioning(false);
    }, 300);
  };

  const handleDotClick = (index: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setIsTransitioning(false);
    }, 300);
  };

  return (
    <section id="certifications" className="py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12" data-aos="fade-up">
          <div className="flex justify-center items-center mb-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Certifications
              </span>
            </h2>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Professional certifications and achievements in technology
          </p>
        </div>

        {/* Carousel Container */}
        <div 
          className="relative"
          onMouseEnter={() => setIsPlaying(false)}
          onMouseLeave={() => setIsPlaying(true)}
        >
          <div className="flex items-center justify-center gap-4 md:gap-8 px-16">
            {/* Previous Certificate */}
            <div 
              className={`relative transform transition-all duration-500 ease-in-out ${
                isTransitioning ? 'opacity-0 scale-90' : 'opacity-100 scale-100'
              }`}
            >
              <div className="hidden md:block w-64 lg:w-80">
                <div className="relative group cursor-pointer" onClick={handlePrevious}>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200/50 dark:border-gray-700/50 overflow-hidden transform scale-90 opacity-60 hover:scale-95 hover:opacity-80 transition-all duration-300">
                    <img
                      src={certifications[getPrevIndex(currentIndex)].image}
                      alt={certifications[getPrevIndex(currentIndex)].title}
                      className="w-full h-48 lg:h-56 object-cover"
                    />
                    <div className="p-3 bg-gradient-to-t from-gray-100 dark:from-gray-900 to-transparent">
                      <p className="text-xs text-gray-600 dark:text-gray-400 truncate">
                        {certifications[getPrevIndex(currentIndex)].title}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Current Certificate - Center */}
            <div 
              className={`relative transform transition-all duration-500 ease-in-out ${
                isTransitioning ? 'scale-95' : 'scale-100'
              }`}
            >
              <div className="w-80 md:w-96 lg:w-[28rem]">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                  <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden transform hover:scale-[1.02] transition-all duration-300">
                    <div className="absolute top-2 right-2 z-10 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs px-3 py-1 rounded-full">
                      {currentIndex + 1} / {certifications.length}
                    </div>
                    <img
                      src={certifications[currentIndex].image}
                      alt={certifications[currentIndex].title}
                      className="w-full h-64 md:h-72 lg:h-80 object-cover"
                    />
                    <div className="p-4 bg-gradient-to-t from-white dark:from-gray-800 to-transparent">
                      <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                        {certifications[currentIndex].title}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Next Certificate */}
            <div 
              className={`relative transform transition-all duration-500 ease-in-out ${
                isTransitioning ? 'opacity-0 scale-90' : 'opacity-100 scale-100'
              }`}
            >
              <div className="hidden md:block w-64 lg:w-80">
                <div className="relative group cursor-pointer" onClick={handleNext}>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200/50 dark:border-gray-700/50 overflow-hidden transform scale-90 opacity-60 hover:scale-95 hover:opacity-80 transition-all duration-300">
                    <img
                      src={certifications[getNextIndex(currentIndex)].image}
                      alt={certifications[getNextIndex(currentIndex)].title}
                      className="w-full h-48 lg:h-56 object-cover"
                    />
                    <div className="p-3 bg-gradient-to-t from-gray-100 dark:from-gray-900 to-transparent">
                      <p className="text-xs text-gray-600 dark:text-gray-400 truncate">
                        {certifications[getNextIndex(currentIndex)].title}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrevious}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 
              p-3 rounded-full 
              bg-gradient-to-r from-blue-600 to-purple-600 
              text-white shadow-lg 
              hover:scale-110 transition-all duration-300 
              disabled:opacity-50 z-10"
            disabled={isTransitioning}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 
              p-3 rounded-full 
              bg-gradient-to-r from-purple-600 to-blue-600 
              text-white shadow-lg 
              hover:scale-110 transition-all duration-300 
              disabled:opacity-50 z-10"
            disabled={isTransitioning}
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Controls and Dots */}
        <div className="mt-8 flex flex-col items-center space-y-4">
          {/* Play/Pause Button */}
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="p-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg hover:scale-110 transition-all duration-300"
          >
            {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
          </button>

          {/* Dots Indicator */}
          <div className="flex space-x-2 overflow-x-auto max-w-full px-4">
            {certifications.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`transition-all duration-300 ${
                  index === currentIndex 
                    ? 'w-8 h-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600' 
                    : 'w-2 h-2 rounded-full bg-gray-400 dark:bg-gray-600 hover:bg-gray-500 dark:hover:bg-gray-500'
                }`}
                disabled={isTransitioning}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;