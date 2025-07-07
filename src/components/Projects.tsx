
import React from 'react';
import { Github } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React, Node.js, and MongoDB",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "https://github.com"
    },
    {
      title: "Task Management App",
      description: "Real-time collaborative task management with WebSocket integration",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop",
      technologies: ["Vue.js", "Express", "Socket.io", "PostgreSQL"],
      github: "https://github.com"
    },
    {
      title: "AI Chat Application",
      description: "Intelligent chatbot with natural language processing capabilities",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop",
      technologies: ["React", "Python", "FastAPI", "OpenAI"],
      github: "https://github.com"
    },
    {
      title: "Weather Dashboard",
      description: "Beautiful weather app with detailed forecasts and interactive maps",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=300&fit=crop",
      technologies: ["Next.js", "TypeScript", "Tailwind", "Weather API"],
      github: "https://github.com"
    },
    {
      title: "Cryptocurrency Tracker",
      description: "Real-time crypto price tracking with portfolio management",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=300&fit=crop",
      technologies: ["React", "Redux", "Chart.js", "CoinGecko API"],
      github: "https://github.com"
    },
    {
      title: "Social Media Analytics",
      description: "Comprehensive analytics dashboard for social media metrics",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
      technologies: ["Angular", "D3.js", "Node.js", "MySQL"],
      github: "https://github.com"
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            A showcase of my recent work and technical achievements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-purple-400/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-white/70 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 text-xs bg-purple-500/20 text-purple-300 rounded border border-purple-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors duration-300"
                >
                  <Github className="w-4 h-4" />
                  <span className="text-sm">View Code</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* More Projects Link */}
        <div className="text-center" data-aos="fade-up">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold rounded-lg hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
          >
            <Github className="w-5 h-5" />
            <span>More Projects on GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
