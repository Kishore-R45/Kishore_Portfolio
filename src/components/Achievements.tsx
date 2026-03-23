import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';

interface Achievement {
  title: string;
  description: string;
  image: string;
}

const achievements: Achievement[] = [
  {
    title: "Sample Achievement 1",
    description: "Replace with your achievement description. Add details about what you accomplished.",
    image: "/placeholder.svg",
  },
  {
    title: "Sample Achievement 2",
    description: "Replace with your achievement description. Add details about what you accomplished.",
    image: "/placeholder.svg",
  },
  {
    title: "Sample Achievement 3",
    description: "Replace with your achievement description. Add details about what you accomplished.",
    image: "/placeholder.svg",
  },
];

const certifications = [
  { title: "Oracle SE 17 Java Developer", image: "/Certificate-Portfolio/Oracle SE 17 Java Developer.png" },
  { title: "Cisco - CCNA Level 1", image: "/Certificate-Portfolio/CCNA-1.png" },
  { title: "Cisco - CCNA Level 2", image: "/Certificate-Portfolio/CCNA-2.png" },
  { title: "Cisco - CCNA Level 3", image: "/Certificate-Portfolio/CCNA-3.png" },
  { title: "Innovate - Inspire Season 13 Winner", image: "/Certificate-Portfolio/Innovate & Inspire - Season 13.png" },
  { title: "CodeHolic - Hackathon", image: "/Certificate-Portfolio/CodeHolic- Hackathon.png" },
  { title: "Udemy Full stack", image: "/Certificate-Portfolio/Udemy Full-Stack.jpg" },
  { title: "Hackerrank Problem solving basic", image: "/Certificate-Portfolio/Hackerrank-ProblemSolving.png" },
  { title: "Hackerrank Problem solving intermidiate", image: "/Certificate-Portfolio/Hackerrank-ProblemSolving-Intermidiate.png" },
  { title: "Hackerrank Java", image: "/Certificate-Portfolio/Hackerrank-Java.jpg" },
  { title: "December of Algorithms", image: "/Certificate-Portfolio/DOA.png" },
  { title: "NPTEL Competetive Programming", image: "/Certificate-Portfolio/NPTEL-CompetetiveProgramming.jpg" },
  { title: "NPTEL Education Sustainable Development", image: "/Certificate-Portfolio/NPTEL-Education.png" },
  { title: "NPTEL Entrepernarship", image: "/Certificate-Portfolio/NPTEL-Entrepernarship.png" },
  { title: "NPTEL IOT", image: "/Certificate-Portfolio/Introducction to IOT.png" },
  { title: "Python Essentials-1", image: "/Certificate-Portfolio/Python Essentials-1.png" },
  { title: "Python Essentials-2", image: "/Certificate-Portfolio/Python Essentials-2.png" },
  { title: "Modern AI-Cisco", image: "/Certificate-Portfolio/Modern AI.png" },
  { title: "Mongo DB", image: "/Certificate-Portfolio/MongoDB.png" },
  { title: "IT - Workshop", image: "/Certificate-Portfolio/IT-Workshop.png" },
  { title: "Microsoft AI Certification", image: "/Certificate-Portfolio/Microsoft-AI.jpg" },
  { title: "Flipkart GRID", image: "/Certificate-Portfolio/Flipkart.jpg" },
  { title: "Oracle Java", image: "/Certificate-Portfolio/Oracle-Java.png" },
  { title: "Infosis Data science", image: "/Certificate-Portfolio/Datascience(Infosis).jpg" },
  { title: "Coursera Cloud computing", image: "/Certificate-Portfolio/Coursera-Cloud(SaaS).png" },
  { title: "Cresent - Figma", image: "/Certificate-Portfolio/Creasent-Figma.jpg" },
  { title: "Cresent - Sector", image: "/Certificate-Portfolio/Creasent-Sector.jpg" },
  { title: "Code Sprint", image: "/Certificate-Portfolio/Code Sprint - Jerusalem College.jpeg" },
];

const Achievements: React.FC = () => {
  // Achievement slider state
  const [achIndex, setAchIndex] = useState(0);
  const [achTransitioning, setAchTransitioning] = useState(false);

  // Certification carousel state
  const [certIndex, setCertIndex] = useState(0);
  const [certPlaying, setCertPlaying] = useState(true);
  const [certTransitioning, setCertTransitioning] = useState(false);

  // Auto-advance achievements
  useEffect(() => {
    const interval = setInterval(() => {
      if (!achTransitioning) {
        setAchTransitioning(true);
        setTimeout(() => {
          setAchIndex((prev) => (prev + 1) % achievements.length);
          setAchTransitioning(false);
        }, 400);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [achTransitioning]);

  // Auto-advance certifications
  useEffect(() => {
    if (!certPlaying) return;
    const interval = setInterval(() => {
      if (!certTransitioning) {
        setCertTransitioning(true);
        setTimeout(() => {
          setCertIndex((prev) => (prev + 1) % certifications.length);
          setCertTransitioning(false);
        }, 300);
      }
    }, 4000);
    return () => clearInterval(interval);
  }, [certPlaying, certTransitioning]);

  const certPrev = () => {
    if (certTransitioning) return;
    setCertTransitioning(true);
    setTimeout(() => {
      setCertIndex((prev) => (prev === 0 ? certifications.length - 1 : prev - 1));
      setCertTransitioning(false);
    }, 300);
  };

  const certNext = () => {
    if (certTransitioning) return;
    setCertTransitioning(true);
    setTimeout(() => {
      setCertIndex((prev) => (prev === certifications.length - 1 ? 0 : prev + 1));
      setCertTransitioning(false);
    }, 300);
  };

  const getPrevCert = (i: number) => (i === 0 ? certifications.length - 1 : i - 1);
  const getNextCert = (i: number) => (i === certifications.length - 1 ? 0 : i + 1);

  return (
    <section id="achievements" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
              Achievements
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-violet-500 mx-auto rounded-full" />
        </div>

        {/* Achievements Slider */}
        <div className="mb-20" data-aos="fade-up">
          <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">
            <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
              Highlights
            </span>
          </h3>

          <div className="relative max-w-4xl mx-auto overflow-hidden">
            <div
              className={`flex items-center gap-6 md:gap-10 bg-card/60 backdrop-blur-sm rounded-2xl border border-border p-6 md:p-8 transition-all duration-500 ${
                achTransitioning ? 'opacity-0 translate-x-4' : 'opacity-100 translate-x-0'
              }`}
            >
              <div className="w-40 h-32 sm:w-56 sm:h-40 md:w-72 md:h-48 flex-shrink-0 rounded-xl overflow-hidden">
                <img
                  src={achievements[achIndex].image}
                  alt={achievements[achIndex].title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-lg md:text-xl font-bold text-foreground mb-2">
                  {achievements[achIndex].title}
                </h4>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed line-clamp-3">
                  {achievements[achIndex].description}
                </p>
              </div>
            </div>

            {/* Dots */}
            <div className="flex justify-center mt-4 gap-2">
              {achievements.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    if (achTransitioning) return;
                    setAchTransitioning(true);
                    setTimeout(() => { setAchIndex(i); setAchTransitioning(false); }, 400);
                  }}
                  className={`transition-all duration-300 rounded-full ${
                    i === achIndex
                      ? 'w-8 h-2 bg-gradient-to-r from-cyan-500 to-violet-500'
                      : 'w-2 h-2 bg-muted-foreground/30 hover:bg-muted-foreground/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Certifications Carousel */}
        <div data-aos="fade-up">
          <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">
            <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
              Certifications
            </span>
          </h3>

          <div className="relative" onMouseEnter={() => setCertPlaying(false)} onMouseLeave={() => setCertPlaying(true)}>
            <div className="flex items-center justify-center gap-4 md:gap-8 px-16">
              {/* Previous */}
              <div className={`relative transition-all duration-500 ${certTransitioning ? 'opacity-0 scale-90' : 'opacity-100 scale-100'}`}>
                <div className="hidden md:block w-64 lg:w-80">
                  <div className="relative group cursor-pointer" onClick={certPrev}>
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-violet-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative bg-card/60 backdrop-blur-sm rounded-2xl shadow-lg border border-border overflow-hidden transform scale-90 opacity-60 hover:scale-95 hover:opacity-80 transition-all duration-300">
                      <img src={certifications[getPrevCert(certIndex)].image} alt={certifications[getPrevCert(certIndex)].title} className="w-full h-48 lg:h-56 object-cover" />
                      <div className="p-3"><p className="text-xs text-muted-foreground truncate">{certifications[getPrevCert(certIndex)].title}</p></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Current */}
              <div className={`relative transition-all duration-500 ${certTransitioning ? 'scale-95' : 'scale-100'}`}>
                <div className="w-80 md:w-96 lg:w-[28rem]">
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-violet-500 rounded-2xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-300" />
                    <div className="relative bg-card rounded-2xl shadow-2xl border border-border overflow-hidden transform hover:scale-[1.02] transition-all duration-300">
                      <div className="absolute top-2 right-2 z-10 bg-gradient-to-r from-cyan-500 to-violet-500 text-white text-xs px-3 py-1 rounded-full">
                        {certIndex + 1} / {certifications.length}
                      </div>
                      <img src={certifications[certIndex].image} alt={certifications[certIndex].title} className="w-full h-64 md:h-72 lg:h-80 object-cover" />
                      <div className="p-4">
                        <h4 className="text-lg font-semibold text-foreground">{certifications[certIndex].title}</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Next */}
              <div className={`relative transition-all duration-500 ${certTransitioning ? 'opacity-0 scale-90' : 'opacity-100 scale-100'}`}>
                <div className="hidden md:block w-64 lg:w-80">
                  <div className="relative group cursor-pointer" onClick={certNext}>
                    <div className="absolute inset-0 bg-gradient-to-r from-violet-500/20 to-cyan-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative bg-card/60 backdrop-blur-sm rounded-2xl shadow-lg border border-border overflow-hidden transform scale-90 opacity-60 hover:scale-95 hover:opacity-80 transition-all duration-300">
                      <img src={certifications[getNextCert(certIndex)].image} alt={certifications[getNextCert(certIndex)].title} className="w-full h-48 lg:h-56 object-cover" />
                      <div className="p-3"><p className="text-xs text-muted-foreground truncate">{certifications[getNextCert(certIndex)].title}</p></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <button onClick={certPrev} className="absolute left-0 top-1/2 -translate-y-1/2 p-3 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 text-white shadow-lg hover:scale-110 transition-all duration-300 disabled:opacity-50 z-10" disabled={certTransitioning}>
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button onClick={certNext} className="absolute right-0 top-1/2 -translate-y-1/2 p-3 rounded-full bg-gradient-to-r from-violet-500 to-cyan-500 text-white shadow-lg hover:scale-110 transition-all duration-300 disabled:opacity-50 z-10" disabled={certTransitioning}>
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          <div className="mt-8 flex flex-col items-center space-y-4">
            <button onClick={() => setCertPlaying(!certPlaying)} className="p-2 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 text-white shadow-lg hover:scale-110 transition-all duration-300">
              {certPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
            </button>
            <div className="flex space-x-2 overflow-x-auto max-w-full px-4">
              {certifications.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    if (certTransitioning) return;
                    setCertTransitioning(true);
                    setTimeout(() => { setCertIndex(i); setCertTransitioning(false); }, 300);
                  }}
                  className={`transition-all duration-300 rounded-full ${
                    i === certIndex
                      ? 'w-8 h-2 bg-gradient-to-r from-cyan-500 to-violet-500'
                      : 'w-2 h-2 bg-muted-foreground/30 hover:bg-muted-foreground/50'
                  }`}
                  disabled={certTransitioning}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
