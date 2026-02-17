import React from 'react';

const Experience: React.FC = () => {
  const experiences = [
    {
      role: "Software Developer Intern",
      company: "Ethical Intelligent Technologies LLP",
      duration: "Dec/2025 - Present",
      type: "Internship",
      present: true,
      description: " Built an AI-based industrial safety solution utilizing OpenCV and deep learning for PPE compliance, fall, and fire detection, with real-time monitoring via a frontend interface and scalable deployment on AWS Cloud. ",
      technologies: ["OpenCV", "Deep Learning", "ResNet", "React JS", "RTSP", "Flask","Insightface"]
    },
    {
      role: "Student Intern",
      company: "1M1B (1 Million for 1 Billion)",
      duration: "Aug/2025 - Oct/2025",
      type: "Internship",
      present: false,
      description: " Worked on MERN stack to build a Waste Reduction Habit Tracker for logging daily waste and tracking reduction trends. Integrated analytics dashboards, leaderboards, and gamification to promote eco-friendly habits and community impact.",
      technologies: ["Tableau", "Node JS", "Express JS", "React JS", "Mongo DB"]
    },
    {
      role: "Java Full Stack Developer Intern",
      company: "Zidio Development", 
      duration: "Jan/2025 - Apr/2025",
      type: "Internship",
      present: false,
      description: "Worked on Core Java and Spring Framework. Built scalable web apps with REST APIs,frontend integration, and deployed projects like an Expense Tracker with role-based access",
      technologies: ["Core Java", "Springboot", "React JS", "MongoDB"]
    }
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
              Work Experience
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My professional journey and the impact I've made along the way.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 to-violet-500 transform md:-translate-x-0.5" />

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
                <div className={`absolute left-4 md:left-1/2 w-4 h-4 rounded-full transform md:-translate-x-2 z-10 ${
                  exp.present 
                    ? 'bg-green-500 shadow-lg shadow-green-500/50 animate-pulse' 
                    : 'bg-gradient-to-r from-cyan-400 to-violet-500'
                }`} />
                
                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="group relative p-6 rounded-2xl bg-card/80 backdrop-blur-sm border border-border hover:border-primary/30 hover:bg-card transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/10">
                    
                    <div className="absolute top-4 right-4 px-3 py-1 text-xs font-semibold rounded-full bg-primary/10 text-primary border border-primary/20">
                      {exp.type}
                    </div>

                    <div className="mb-4">
                      <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                        {exp.role}
                      </h3>
                      <p className="text-lg text-cyan-400 font-semibold">{exp.company}</p>
                      <p className="text-muted-foreground">{exp.duration}</p>
                    </div>
                    
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {exp.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full border border-primary/20 hover:bg-primary/20 transition-colors duration-300"
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
