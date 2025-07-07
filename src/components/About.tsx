
import React from 'react';

const About: React.FC = () => {
  const cards = [
    {
      title: "Who Am I?",
      content: "I'm a passionate full-stack developer with 3+ years of experience creating digital solutions. I love turning complex problems into simple, beautiful, and intuitive designs.",
      icon: "👨‍💻"
    },
    {
      title: "How I Work",
      content: "I believe in clean code, agile methodologies, and continuous learning. My approach combines technical expertise with creative problem-solving to deliver exceptional results.",
      icon: "⚡"
    },
    {
      title: "What Drives Me",
      content: "Innovation and excellence drive everything I do. I'm passionate about emerging technologies, user experience, and creating solutions that make a real difference.",
      icon: "🚀"
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Get to know more about my journey, work style, and what motivates me as a developer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 200}
              className="group relative p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-purple-400/50 hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20"
            >
              <div className="text-4xl mb-4">{card.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-purple-400 transition-colors duration-300">
                {card.title}
              </h3>
              <p className="text-white/70 leading-relaxed">
                {card.content}
              </p>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-600/10 to-cyan-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
