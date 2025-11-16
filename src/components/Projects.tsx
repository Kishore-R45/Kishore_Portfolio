
import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "AI-based Farmer Advisory & Support System",
      description: " Personalized crop advisory,Weather alerts,Market price updates,Fine-tuned chatbot,Expert connect",
      image: "/assets/Projects/farmer_advisory_system.png",
      technologies: ["Flutter", "REST APIs", "Node JS", "Express JS","MySQL","Mongo DB","Ex APIs","MicroServices"],
      github: "https://github.com/Kishore-R45/Smart_Agri",
      demo: "https://github.com/Kishore-R45/Smart_Agri"
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
      title: "Tamil Song Recommender",
      description: "Song similarity search, lyrics-based recommendation, Streamlit web app UI",
      image: "/assets/Projects/Tamil Song Recommender.png",
      technologies: ["Python", "Streamlit", "Pandas", "HuggingFace","Sentence Transformer"],
      github: "https://github.com/Kishore-R45/Tamil-Song-Recommender",
      demo: "https://tamil-song-recommender-45.streamlit.app/"
    },
    {
      title: "Quiz App",
      description: "Powerful user authentication, Instant result, Cool user interface",
      image: "/assets/Projects/Quiz App.png",
      technologies: ["Java", "JavaFX", "JDBC", "MySQL","Figma"],
      github: "https://github.com/Kishore-R45/Quiz-App--Final",
      demo: "https://github.com/Kishore-R45/Quiz-App--Final"
    },
    {
      title: "Waste Reduction Habit Tracker",
      description: "Authentication & Security, Visualization, Community Leaderboard, Export reports",
      image: "/assets/Projects/Waste Tracker.png",
      technologies: ["React JS", "Tailwind CSS", "Node JS", "Express JS","Mongo DB"],
      github: "https://github.com/Kishore-R45/Waste-Reduction-Habit-Tracker",
      demo: "https://waste-reduction-habit-tracker.netlify.app/"
    },
    {
      title: "Weather App",
      description: "Shows city-based weather details — current temperature, humidity, and wind speed at a glance.",
      image: "/assets/Projects/Weather App.png",
      technologies: ["HTML", "CSS", "JS", "Weather API"],
      github: "https://github.com/Kishore-R45/Weather-App",
      demo: "https://kishore-r45.github.io/Weather-App/"
    }
  ];

  return (
    <section id="projects" className="py-20 relative bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50 dark:from-gray-900 dark:via-purple-900/30 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A showcase of my recent work and technical achievements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="group relative overflow-hidden rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg hover:shadow-xl border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-500 transition-all duration-300 hover:scale-105"
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
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full border border-blue-200 dark:border-blue-800"
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
                    className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg border-2 border-transparent hover:from-blue-700 hover:to-purple-700 hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    <Github className="w-4 h-4" />
                    <span className="text-sm font-medium">Code</span>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-lg border-2 border-transparent hover:from-green-700 hover:to-teal-700 hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span className="text-sm font-medium">Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* More Projects Link */}
        <div className="text-center" data-aos="fade-up">
          <a
            href="https://github.com/Kishore-R45/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 hover:scale-105 hover:shadow-lg transition-all duration-300"
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
