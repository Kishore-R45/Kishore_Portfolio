import React from "react";

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: [
        {
          name: "Java",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
        },
        {
          name: "Python",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        },
        {
          name: "JavaScript",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        },
        {
          name: "SQL",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
        },
        {
          name: "C Programming",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
        },
        {
          name: "Tailwind CSS",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
        },
      ],
      color: "from-cyan-400 to-blue-500",
    },
    {
      title: "Frameworks",
      skills: [
        {
          name: "React",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        },
        {
          name: "Node.js",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        },
        {
          name: "Flask",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
        },
        {
          name: "Spring Boot",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
        },
        {
          name: "MongoDB",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
        },
        {
          name: "Flutter",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
        },
      ],
      color: "from-violet-400 to-purple-500",
    },
    {
      title: "Gen AI",
      skills: [
        {
          name: "LLM",
          icon: "https://www.svgrepo.com/show/306500/openai.svg",
        },
        {
          name: "RAG",
          icon: "https://cdn-icons-png.flaticon.com/512/9068/9068756.png",
        },
        {
          name: "Jupyter",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg",
        },
        {
          name: "LangChain",
          icon: "https://cdn.jsdelivr.net/gh/lobehub/lobe-icons@latest/packages/static-svg/icons/langchain.svg",
        },
        {
          name: "Vector DB",
          icon: "https://avatars.githubusercontent.com/u/54333248?s=200&v=4",
        },
        {
          name: "Hugging Face",
          icon: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg",
        },
      ],
      color: "from-blue-400 to-indigo-500",
    },
    {
      title: "Tools",
      skills: [
        {
          name: "Git",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        },
        {
          name: "AWS",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
        },
        {
          name: "VS Code",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
        },
        {
          name: "Docker",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
        },
        {
          name: "Postman",
          icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
        },
        {
          name: "Figma",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
        },
      ],
      color: "from-teal-400 to-cyan-500",
    },
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Space-themed background */}
      <div className="absolute inset-0 bg-transparent" />
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-violet-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/3 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
              Skills & Technologies
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of the technologies and tools I work with.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              data-aos="fade-up"
              data-aos-delay={categoryIndex * 100}
              className="group relative p-6 rounded-2xl bg-card/40 backdrop-blur-md shadow-lg shadow-cyan-500/5 hover:shadow-cyan-500/15 border border-white/10 hover:border-cyan-400/30 transition-all duration-500 hover:scale-105 hover:bg-card/60"
            >
              {/* Subtle glow on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/0 to-violet-500/0 group-hover:from-cyan-500/5 group-hover:to-violet-500/5 transition-all duration-500" />

              <h3
                className={`relative text-2xl font-bold mb-6 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}
              >
                {category.title}
              </h3>
              <div className="relative space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex items-center p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/5 hover:border-cyan-400/20 hover:bg-white/10 transition-all duration-300 hover:scale-105 cursor-pointer group/skill"
                  >
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-8 h-8 mr-3 group-hover/skill:scale-125 transition-transform duration-300 drop-shadow-[0_0_6px_rgba(6,182,212,0.3)]"
                    />
                    <span className="text-foreground/80 group-hover/skill:text-cyan-400 transition-colors duration-300">
                      {skill.name}
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
