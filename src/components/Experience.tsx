
import React from 'react';

const Experience: React.FC = () => {
  const experiences = [
    {
      role: "Senior Full Stack Developer",
      company: "Tech Innovations Inc.",
      duration: "2022 - Present",
      description: "Led development of microservices architecture, mentored junior developers, and improved system performance by 40%.",
      technologies: ["React", "Node.js", "AWS", "Docker", "MongoDB"]
    },
    {
      role: "Full Stack Developer",
      company: "Digital Solutions Ltd.",
      duration: "2020 - 2022",
      description: "Developed and maintained web applications, implemented CI/CD pipelines, and collaborated with cross-functional teams.",
      technologies: ["Vue.js", "Express", "PostgreSQL", "Jenkins", "Git"]
    },
    {
      role: "Frontend Developer",
      company: "StartupXYZ",
      duration: "2019 - 2020",
      description: "Built responsive web interfaces, optimized user experience, and implemented modern JavaScript frameworks.",
      technologies: ["React", "JavaScript", "SASS", "Webpack", "Jest"]
    },
    {
      role: "Junior Developer",
      company: "Code Academy",
      duration: "2018 - 2019",
      description: "Learned fundamentals of web development, contributed to open source projects, and built personal portfolio projects.",
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"]
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
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
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
                  <div className="group relative p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-purple-400/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20">
                    <div className="mb-4">
                      <h3 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300">
                        {exp.role}
                      </h3>
                      <p className="text-lg text-purple-400 font-semibold">{exp.company}</p>
                      <p className="text-white/60">{exp.duration}</p>
                    </div>
                    
                    <p className="text-white/70 mb-4 leading-relaxed">
                      {exp.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 text-sm bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/30 hover:bg-purple-500/30 transition-colors duration-300"
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
