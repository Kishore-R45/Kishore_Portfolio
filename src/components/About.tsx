
import React from 'react';

const About: React.FC = () => {
  const cards = [
    {
      title: "Who Am I?",
      content: "Passionate B.Tech IT student constantly learning new technologies. Problem solver specializing in Data Structures and Algorithms. Creative thinker with deep interest in Artificial Intelligence.",
      icon: "👨‍💻"
    },
    {
      title: "How I Work",
      content: "Build full-stack applications transforming ideas into practical solutions. Explore emerging technologies to develop innovative and efficient solutions. Turn complex challenges into simple, elegant, and effective solutions.",
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
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Get to know more about my journey, work style, and what motivates me as a developer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 200}
              className="group relative p-8 rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-500 hover:scale-105 transition-all duration-300"
            >
              <div className="text-4xl mb-4">{card.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                {card.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {card.content}
              </p>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
