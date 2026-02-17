
import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "RAG Based Medical Chatbot",
      description: "Medical PDF ingestion, Semantic search, Hallucination-free responses, RAG-based chatbot, Context-aware medical Q&A, Cloud based VectorDB",
      image: "/assets/Projects/Medichat.png",
      technologies: ["Langchain", "Flask", "Pinecone", "Sentence-Transformers","Meta-Llama 3","HuggingFace","Docker"],
      github: "https://github.com/Kishore-R45/RAG-based-Medical-Chatbot",
      demo: "https://kishore200630-medical-chatbot.hf.space"
    },
    {
      title: "Real-Time Freshness Indicator",
      description: "AI-based image analysis system for predicting produce freshness and estimating shelf life under multiple storage conditions.",
      image: "/assets/Projects/Freshness_Indicator.png",
      technologies: ["React JS", "Tailwind CSS", "Flask", "REST APIs", "TensorFlow", "Keras","Docker","Hugging Face"],
      github: "https://github.com/Kishore-R45/Real-Time-Freshness-Indicator",
      demo: "https://kishore200630-freshness-indicator.hf.space/"
    },
    {
      title: "AI Code Reviewer-Code Lens",
      description: "Multi-language support, bug detection, code quality rating, auto-fix option",
      image: "/assets/Projects/AI Code Reviewer.png",
      technologies: ["React JS", "Tailwind CSS", "Monaco Editor", "Google Studio API"],
      github: "https://github.com/Kishore-R45/AI-Code-Reviewer",
      demo: "https://codelens-ai-code-reviewer.netlify.app/"
    },
    {
      title: "Smart Attendance Tracker App",
      description: "Authentication & Security, Geo-Fencing, WIFI Verification, Device Verification, Calendar View",
      image: "/assets/Projects/smart_attendance.jpg",
      technologies: ["Flutter", "Node JS", "Express JS","Neon(PostgreSQL)", "Geo-Fence + WIFI"],
      github: "https://github.com/Kishore-R45/Smart-Attendance-Frontend",
      demo: "https://github.com/Kishore-R45/Smart-Attendance-Frontend/tree/main/releases_apk"
    },
    {
      title: "Farmer Advisory & Support System",
      description: " Personalized crop advisory,Weather alerts,Market price updates,Fine-tuned chatbot,Expert connect",
      image: "/assets/Projects/farmer_advisory_system.png",
      technologies: ["Flutter", "REST APIs", "Node JS", "Express JS","MySQL","Mongo DB","Ex APIs","MicroServices"],
      github: "https://github.com/Kishore-R45/Smart_Agri",
      demo: "https://github.com/Kishore-R45/Smart_Agri"
    },
    {
      title: "Quiz App",
      description: "Powerful user authentication, Instant result, Cool user interface",
      image: "/assets/Projects/Quiz App.png",
      technologies: ["Java", "JavaFX", "JDBC", "MySQL","Figma"],
      github: "https://github.com/Kishore-R45/Quiz-App--Final",
      demo: "https://github.com/Kishore-R45/Quiz-App--Final"
    },
  ];

  return (
    <section id="projects" className="py-20 relative bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and technical achievements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="group relative overflow-hidden rounded-2xl bg-card/80 backdrop-blur-sm shadow-lg hover:shadow-xl border border-border hover:border-primary/30 transition-all duration-300 hover:scale-105"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-400 hover:to-blue-400 hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-cyan-500/20"
                  >
                    <Github className="w-4 h-4" />
                    <span className="text-sm font-medium">Code</span>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-violet-500 to-purple-500 text-white rounded-lg hover:from-violet-400 hover:to-purple-400 hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-violet-500/20"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span className="text-sm font-medium">Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center" data-aos="fade-up">
          <a
            href="https://github.com/Kishore-R45/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-violet-500 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-violet-400 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
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
