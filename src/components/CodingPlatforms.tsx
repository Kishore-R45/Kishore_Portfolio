
import React from 'react';

const CodingPlatforms: React.FC = () => {
  const platforms = [
    {
      name: "LeetCode",
      logo: "https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png",
      stats: {
        solved: 850,
        rank: "Guardian",
        streak: 45,
        rating: 2156
      },
      color: "from-orange-400 to-red-500",
      bgColor: "bg-orange-50 dark:bg-orange-900/20",
      borderColor: "border-orange-200 dark:border-orange-800"
    },
    {
      name: "GeeksforGeeks",
      logo: "https://media.geeksforgeeks.org/wp-content/cdn-uploads/gfg_200x200-min.png",
      stats: {
        solved: 650,
        rank: "Expert",
        streak: 30,
        rating: 1890
      },
      color: "from-green-400 to-emerald-500",
      bgColor: "bg-green-50 dark:bg-green-900/20",
      borderColor: "border-green-200 dark:border-green-800"
    },
    {
      name: "Codeforces",
      logo: "https://art.npanuhin.me/SVG/Codeforces/Codeforces.svg",
      stats: {
        solved: 420,
        rank: "Expert",
        streak: 25,
        rating: 1654
      },
      color: "from-blue-400 to-purple-500",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
      borderColor: "border-blue-200 dark:border-blue-800"
    }
  ];

  return (
    <section id="coding" className="py-20 relative bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Coding Platforms
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My competitive programming journey and achievements across various platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {platforms.map((platform, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 200}
              className={`group relative p-8 rounded-2xl ${platform.bgColor} backdrop-blur-sm border ${platform.borderColor} hover:scale-105 transition-all duration-300 hover:shadow-xl shadow-lg`}
            >
              <div className="text-center mb-6">
                <div className="w-16 h-16 mx-auto mb-4 p-2">
                  <img src={platform.logo} alt={platform.name} className="w-full h-full object-contain" />
                </div>
                <h3 className={`text-3xl font-bold bg-gradient-to-r ${platform.color} bg-clip-text text-transparent`}>
                  {platform.name}
                </h3>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 rounded-lg bg-white/50 dark:bg-gray-700/50 hover:bg-white/70 dark:hover:bg-gray-700/70 transition-colors duration-300">
                  <span className="text-gray-700 dark:text-gray-300">Problems Solved</span>
                  <span className={`font-bold text-lg bg-gradient-to-r ${platform.color} bg-clip-text text-transparent`}>
                    {platform.stats.solved}
                  </span>
                </div>
                
                <div className="flex justify-between items-center p-3 rounded-lg bg-white/50 dark:bg-gray-700/50 hover:bg-white/70 dark:hover:bg-gray-700/70 transition-colors duration-300">
                  <span className="text-gray-700 dark:text-gray-300">Current Rank</span>
                  <span className={`font-bold text-lg bg-gradient-to-r ${platform.color} bg-clip-text text-transparent`}>
                    {platform.stats.rank}
                  </span>
                </div>
                
                <div className="flex justify-between items-center p-3 rounded-lg bg-white/50 dark:bg-gray-700/50 hover:bg-white/70 dark:hover:bg-gray-700/70 transition-colors duration-300">
                  <span className="text-gray-700 dark:text-gray-300">Current Streak</span>
                  <span className={`font-bold text-lg bg-gradient-to-r ${platform.color} bg-clip-text text-transparent`}>
                    {platform.stats.streak} days
                  </span>
                </div>
                
                <div className="flex justify-between items-center p-3 rounded-lg bg-white/50 dark:bg-gray-700/50 hover:bg-white/70 dark:hover:bg-gray-700/70 transition-colors duration-300">
                  <span className="text-gray-700 dark:text-gray-300">Max Rating</span>
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
      </div>
    </section>
  );
};

export default CodingPlatforms;
