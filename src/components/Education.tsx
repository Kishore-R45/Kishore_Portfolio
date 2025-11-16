
import React from 'react';

const Education: React.FC = () => {
  const education = [
    {
      degree: "Bachelor of Technology in Information Technology",
      institution: "Easwari Engineering College",
      duration: "2023 - 2027",
      details: "",
      achievements: ["CGPA: 8.3/10","SIH-2024 & 2025 College level Finalist"],
      location: "Chennai, Tamilnadu, India"
    },
    {
      degree: "Higher Secondary",
      institution: "NS Boys Higher Secondary School",
      duration: "2016 - 2023",
      details: "",
      achievements: ["88% in My 12th Board Exam - PCMB", "Secured first rank in both Tamil and Physics at the school level"],
      location: "Theni, Tamilnadu, India"
    }
  ];

  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Education
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-white/70 max-w-2xl mx-auto">
            My academic journey and the foundation that shaped my career.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-400 to-cyan-400 transform md:-translate-x-0.5" />

          <div className="space-y-12">
            {education.map((edu, index) => (
              <div
                key={index}
                data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                data-aos-delay={index * 200}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full transform md:-translate-x-2 z-10 animate-pulse" />
                
                {/* Content Card */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="group relative p-6 rounded-2xl bg-white/90 dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 hover:bg-white dark:hover:bg-white/10 hover:border-purple-400/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20">
                    <div className="mb-4">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-purple-400 transition-colors duration-300">
                        {edu.degree}
                      </h3>
                      <p className="text-lg text-cyan-600 dark:text-cyan-400 font-semibold">{edu.institution}</p>
                      <div className="flex justify-between items-center text-gray-600 dark:text-white/60 text-sm">
                        <span>{edu.duration}</span>
                        <span>{edu.location}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 dark:text-white/70 mb-4 leading-relaxed">
                      {edu.details}
                    </p>
                    
                    <div className="space-y-2">
                      <h4 className="text-gray-900 dark:text-white font-semibold text-sm">Key Achievements:</h4>
                      <ul className="space-y-1">
                        {/* {edu.achievements && edu.achievements.map((achievement, achIndex) => (
                          <li
                            key={achIndex}
                            className="text-gray-700 dark:text-white/70 text-sm flex items-center"
                          >
                            <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2" />
                            {achievement}
                          </li>
                        ))} */}
                        {edu.achievements && edu.achievements.map((cgpa, cgpaIndex) => (
                          <li
                            key={cgpaIndex}
                            className="text-gray-700 dark:text-white/70 text-sm flex items-center"
                          >
                            <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2" />
                            {cgpa}
                          </li>
                        ))}
                      </ul>
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

export default Education;
