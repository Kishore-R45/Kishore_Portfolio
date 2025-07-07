
import React from 'react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["JavaScript", "TypeScript", "Python", "Java", "C++", "Go"],
      color: "from-yellow-400 to-orange-500"
    },
    {
      title: "Frameworks",
      skills: ["React", "Node.js", "Express", "Next.js", "Django", "Spring Boot"],
      color: "from-blue-400 to-purple-500"
    },
    {
      title: "Tools",
      skills: ["Git", "VS Code", "Docker", "Postman", "Figma", "Jenkins"],
      color: "from-green-400 to-teal-500"
    },
    {
      title: "Databases",
      skills: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Firebase", "DynamoDB"],
      color: "from-purple-400 to-pink-500"
    }
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Skills & Technologies
            </span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            A comprehensive overview of the technologies and tools I work with.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              data-aos="fade-up"
              data-aos-delay={categoryIndex * 100}
              className="group relative p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-purple-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20"
            >
              <h3 className={`text-2xl font-bold mb-6 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex items-center p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 hover:scale-105 cursor-pointer group/skill"
                  >
                    <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${category.color} mr-3 group-hover/skill:scale-125 transition-transform duration-300`} />
                    <span className="text-white/80 group-hover/skill:text-white transition-colors duration-300">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
