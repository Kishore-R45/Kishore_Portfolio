
import React, { useState, useEffect } from 'react';

const Certifications: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const certifications = [
    {
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2023",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop",
      credential: "AWS-SA-2023-001"
    },
    {
      title: "Google Cloud Professional Developer",
      issuer: "Google Cloud",
      date: "2023",
      image: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=400&h=300&fit=crop",
      credential: "GCP-PD-2023-002"
    },
    {
      title: "Meta React Developer Certificate",
      issuer: "Meta (Facebook)",
      date: "2022",
      image: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=400&h=300&fit=crop",
      credential: "META-RD-2022-003"
    },
    {
      title: "MongoDB Certified Developer",
      issuer: "MongoDB University",
      date: "2022",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop",
      credential: "MDB-CD-2022-004"
    },
    {
      title: "Docker Certified Associate",
      issuer: "Docker Inc.",
      date: "2021",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=300&fit=crop",
      credential: "DOC-CA-2021-005"
    }
  ];

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % certifications.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isPlaying, certifications.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % certifications.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + certifications.length) % certifications.length);
  };

  return (
    <section id="certifications" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Certifications
            </span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Professional certifications that validate my expertise and commitment to learning.
          </p>
        </div>

        <div className="relative" data-aos="fade-up">
          <div 
            className="relative h-96 overflow-hidden rounded-2xl"
            onMouseEnter={() => setIsPlaying(false)}
            onMouseLeave={() => setIsPlaying(true)}
          >
            {certifications.map((cert, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
                  index === currentSlide ? 'translate-x-0' : 
                  index < currentSlide ? '-translate-x-full' : 'translate-x-full'
                }`}
              >
                <div className="relative h-full group">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover rounded-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent rounded-2xl" />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <h3 className="text-3xl font-bold mb-2 group-hover:text-purple-400 transition-colors duration-300">
                      {cert.title}
                    </h3>
                    <p className="text-xl text-cyan-400 mb-2">{cert.issuer}</p>
                    <div className="flex justify-between items-center">
                      <p className="text-white/80">Issued: {cert.date}</p>
                      <p className="text-white/60 text-sm">ID: {cert.credential}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-110"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-110"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-8 space-x-3">
            {certifications.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-purple-400 scale-125' 
                    : 'bg-white/30 hover:bg-white/50'
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
