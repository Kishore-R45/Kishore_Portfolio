
import React from 'react';

const CodingPlatforms: React.FC = () => {
  const platforms = [
    {
      name: "LeetCode",
      logo: "🔥",
      stats: {
        solved: 850,
        rank: "Guardian",
        streak: 45,
        rating: 2156
      },
      color: "from-orange-400 to-red-500",
      bgColor: "bg-orange-500/10",
      borderColor: "border-orange-500/30"
    },
    {
      name: "GeeksforGeeks",
      logo: "💚",
      stats: {
        solved: 650,
        rank: "Expert",
        streak: 30,
        rating: 1890
      },
      color: "from-green-400 to-emerald-500",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/30"
    },
    {
      name: "Codeforces",
      logo: "⭐",
      stats: {
        solved: 420,
        rank: "Expert",
        streak: 25,
        rating: 1654
      },
      color: "from-blue-400 to-purple-500",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/30"
    }
  ];

  return (
    <section id="coding" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Coding Platforms
            </span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            My competitive programming journey and achievements across various platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {platforms.map((platform, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 200}
              className={`group relative p-8 rounded-2xl ${platform.bgColor} backdrop-blur-sm border ${platform.borderColor} hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/25`}
            >
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">{platform.logo}</div>
                <h3 className={`text-3xl font-bold bg-gradient-to-r ${platform.color} bg-clip-text text-transparent`}>
                  {platform.name}
                </h3>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors duration-300">
                  <span className="text-white/70">Problems Solved</span>
                  <span className={`font-bold text-lg bg-gradient-to-r ${platform.color} bg-clip-text text-transparent`}>
                    {platform.stats.solved}
                  </span>
                </div>
                
                <div className="flex justify-between items-center p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors duration-300">
                  <span className="text-white/70">Current Rank</span>
                  <span className={`font-bold text-lg bg-gradient-to-r ${platform.color} bg-clip-text text-transparent`}>
                    {platform.stats.rank}
                  </span>
                </div>
                
                <div className="flex justify-between items-center p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors duration-300">
                  <span className="text-white/70">Current Streak</span>
                  <span className={`font-bold text-lg bg-gradient-to-r ${platform.color} bg-clip-text text-transparent`}>
                    {platform.stats.streak} days
                  </span>
                </div>
                
                <div className="flex justify-between items-center p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors duration-300">
                  <span className="text-white/70">Max Rating</span>
                  <span className={`font-bold text-lg bg-gradient-to-r ${platform.color} bg-clip-text text-transparent`}>
                    {platform.stats.rating}
                  </span>
                </div>
              </div>

              <div className="mt-6 text-center">
                <button className={`px-6 py-3 bg-gradient-to-r ${platform.color} text-white font-semibold rounded-lg hover:scale-105 transition-all duration-300 hover:shadow-lg`}>
                  View Profile
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center" data-aos="fade-up">
          <p className="text-white/70 text-lg">
            🏆 Total Problems Solved: <span className="text-purple-400 font-bold">1,920+</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default CodingPlatforms;
