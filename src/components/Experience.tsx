
import React from 'react';

const Experience: React.FC = () => {
  const experiences = [
    {
      role: "Student Intern",
      company: "1M1B (1 Million for 1 Billion)",
      duration: "Aug/2025 - Oct/2025",
      description: "Waste Reduction Habit Tracker – A web-based sustainability platform built with MERN stack that enables users to log daily waste, track reduction trends, and receive personalized eco-tips. Integrated leaderboards, analytics dashboards, and gamification features to motivate eco-friendly habits and measure community impact.",
      technologies: ["Tableau", "Node JS", "Express JS", "React JS", "Mongo DB"]
    },
    {
      role: "Java Full Stack Developer Intern",
      company: "Zidio Development", 
      duration: "Jan/2025 - Apr/2025",
      description: "Built a Expense tracker management with excellent features, Improved application performance by 25% through code optimization",
      technologies: ["Core Java", "Springboot", "React JS", "MongoDB"]
    }
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Work Experience
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-white/70 max-w-2xl mx-auto">
            My professional journey and the impact I've made along the way.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-400 to-cyan-400 transform md:-translate-x-0.5" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                data-aos-delay={index * 200}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full transform md:-translate-x-2 z-10" />
                
                {/* Content Card */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="group relative p-6 rounded-2xl bg-white/90 dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 hover:bg-white dark:hover:bg-white/10 hover:border-purple-400/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20">
                    <div className="mb-4">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-purple-400 transition-colors duration-300">
                        {exp.role}
                      </h3>
                      <p className="text-lg text-purple-500 dark:text-purple-400 font-semibold">{exp.company}</p>
                      <p className="text-gray-600 dark:text-white/60">{exp.duration}</p>
                    </div>
                    
                    <p className="text-gray-700 dark:text-white/70 mb-4 leading-relaxed">
                      {exp.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 text-sm bg-purple-100 dark:bg-purple-500/20 text-purple-700 dark:text-purple-300 rounded-full border border-purple-300 dark:border-purple-500/30 hover:bg-purple-200 dark:hover:bg-purple-500/30 transition-colors duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
