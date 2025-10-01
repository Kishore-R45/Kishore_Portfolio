
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Certifications: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const certifications = [
    {
      title: "AWS Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2024",
      image: "/Certificate-Portfolio/Oracle-Java.png"
    },
    {
      title: "Google Cloud Professional",
      issuer: "Google Cloud",
      date: "2023",
      image: "/Certificate-Portfolio/Hackerrank-ProblemSolving.png"
    },
    {
      title: "Google Cloud Professional",
      issuer: "Google Cloud",
      date: "2023",
      image: "/Certificate-Portfolio/Hackerrank-ProblemSolving-Intermidiate.png"
    },
    {
      title: "React Developer Certification",
      issuer: "Meta",
      date: "2023",
      image: "/Certificate-Portfolio/Hackerrank-Java.jpg"
    },
    {
      title: "Docker Certified Associate",
      issuer: "Docker Inc.",
      date: "2022",
      image: "/Certificate-Portfolio/Udemy Full-Stack.jpg"
    },
    {
      title: "React Developer Certification",
      issuer: "Meta",
      date: "2023",
      image: "/Certificate-Portfolio/NPTEL-CompetetiveProgramming.jpg"
    },
    {
      title: "React Developer Certification",
      issuer: "Meta",
      date: "2023",
      image: "/Certificate-Portfolio/NPTEL-Education.png"
    },
    {
      title: "NPTEL Entrepernarship",
      issuer: "NPTEL",
      date: "2024",
      image: "/Certificate-Portfolio/NPTEL-Entrepernarship.png"
    },
    {
      title: "React Developer Certification",
      issuer: "Meta",
      date: "2023",
      image: "/Certificate-Portfolio/Introducction to IOT.png"
    },
    {
      title: "React Developer Certification",
      issuer: "Meta",
      date: "2023",
      image: "/Certificate-Portfolio/MongoDB.png"
    },
    {
      title: "React Developer Certification",
      issuer: "Meta",
      date: "2023",
      image: "/Certificate-Portfolio/Microsoft-AI.jpg"
    },
    {
      title: "React Developer Certification",
      issuer: "Meta",
      date: "2023",
      image: "/Certificate-Portfolio/Flipkart.jpg"
    },
    {
      title: "React Developer Certification",
      issuer: "Meta",
      date: "2023",
      image: "/Certificate-Portfolio/Datascience(Infosis).jpg"
    },
    {
      title: "React Developer Certification",
      issuer: "Meta",
      date: "2023",
      image: "/Certificate-Portfolio/Coursera-Cloud(SaaS).png"
    },
    {
      title: "React Developer Certification",
      issuer: "Meta",
      date: "2023",
      image: "/Certificate-Portfolio/Creasent-Figma.jpg"
    },
    {
      title: "React Developer Certification",
      issuer: "Meta",
      date: "2023",
      image: "/Certificate-Portfolio/Creasent-Sector.jpg"
    }
  ];

  useEffect(() => {
    if (!isPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === certifications.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [isPlaying, certifications.length]);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? certifications.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === certifications.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <section id="certifications" className="py-16 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Certifications
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Professional certifications and achievements in technology.
          </p>
        </div>

        <div 
          className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden max-w-2xl mx-auto"
          onMouseEnter={() => setIsPlaying(false)}
          onMouseLeave={() => setIsPlaying(true)}
          data-aos="fade-up"
        >
          <div className="relative h-96">
            <img
              src={certifications[currentIndex].image}
              alt={certifications[currentIndex].title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 
             p-2 rounded-full 
             bg-gradient-to-r from-blue-600 to-purple-600 
             text-white shadow-lg 
             hover:opacity-90 transition-all duration-300 "
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 
             p-2 rounded-full 
             bg-gradient-to-r from-purple-600 to-blue-600 
             text-white shadow-lg 
             hover:opacity-90 transition-all duration-300"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots Indicator */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {certifications.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-white' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
