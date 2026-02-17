
import React from 'react';
import { useCodingStats } from '../hooks/useCodingStats';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

const CodingPlatforms: React.FC = () => {
  const usernames = {
    leetcode: 'Kishore2006_30',
    geeksforgeeks: 'kishore45',
    codeforces: 'kishoreramesh302006',
    codechef: 'kishore_r_2006'
  };

  const { stats, loading, errors } = useCodingStats(usernames);

  const manualGeeksforGeeksData = {
    totalSolved: 246,
    score: 581,
    easySolved: 99,
    mediumSolved: 84,
    hardSolved: 2,
    InstitutionRanking: 12,
    Language: "Java"
  };

  const platforms = [
    {
      name: "LeetCode",
      logo: "https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png",
      data: stats.leetcode,
      loading: loading.leetcode,
      error: errors.leetcode,
      color: "from-orange-400 to-red-500",
      accentColor: "text-orange-400",
      profileUrl: `https://leetcode.com/${usernames.leetcode}`
    },
    {
      name: "GeeksforGeeks",
      logo: "https://media.geeksforgeeks.org/wp-content/cdn-uploads/gfg_200x200-min.png",
      data: manualGeeksforGeeksData,
      loading: false,
      error: null,
      color: "from-green-400 to-emerald-500",
      accentColor: "text-green-400",
      profileUrl: `https://auth.geeksforgeeks.org/user/${usernames.geeksforgeeks}`
    },
    {
      name: "CodeChef",
      logo: "https://cdn.codechef.com/images/cc-logo.svg",
      data: stats.codechef,
      loading: loading.codechef,
      error: errors.codechef,
      color: "from-amber-400 to-orange-500",
      accentColor: "text-amber-400",
      profileUrl: `https://www.codechef.com/users/${usernames.codechef}`
    },
    {
      name: "Codeforces",
      logo: "https://art.npanuhin.me/SVG/Codeforces/Codeforces.svg",
      data: stats.codeforces,
      loading: loading.codeforces,
      error: errors.codeforces,
      color: "from-blue-400 to-purple-500",
      accentColor: "text-blue-400",
      profileUrl: `https://codeforces.com/profile/${usernames.codeforces}`
    }
  ];

  const renderLeetCodeStats = (data: any, accentColor: string) => (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <Card className="bg-secondary/50 border-border">
          <CardHeader className="pb-2"><CardTitle className="text-lg">Total Solved</CardTitle></CardHeader>
          <CardContent><div className={`text-2xl font-bold ${accentColor}`}>{data.totalSolved}</div></CardContent>
        </Card>
        <Card className="bg-secondary/50 border-border">
          <CardHeader className="pb-2"><CardTitle className="text-lg">Global Rank</CardTitle></CardHeader>
          <CardContent><div className={`text-2xl font-bold ${accentColor}`}>{data.ranking?.toLocaleString()}</div></CardContent>
        </Card>
      </div>
      <Tabs defaultValue="difficulty" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="difficulty">By Difficulty</TabsTrigger>
          <TabsTrigger value="stats">Other Stats</TabsTrigger>
        </TabsList>
        <TabsContent value="difficulty" className="mt-4">
          <div className="grid grid-cols-3 gap-2">
            <div className="text-center"><Badge variant="secondary" className="bg-green-500/20 text-green-400 border-green-500/30">Easy</Badge><div className="text-xl font-bold mt-1">{data.easySolved}</div></div>
            <div className="text-center"><Badge variant="secondary" className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">Medium</Badge><div className="text-xl font-bold mt-1">{data.mediumSolved}</div></div>
            <div className="text-center"><Badge variant="secondary" className="bg-red-500/20 text-red-400 border-red-500/30">Hard</Badge><div className="text-xl font-bold mt-1">{data.hardSolved}</div></div>
          </div>
        </TabsContent>
        <TabsContent value="stats" className="mt-4">
          <div className="space-y-2">
            <div className="flex justify-between"><span>Contest Rating:</span><span className="font-bold">{data.contestRating || 'N/A'}</span></div>
            <div className="flex justify-between"><span>Contest Ranking:</span><span className="font-bold">{data.contestRanking ? `${data.contestRanking.toLocaleString()}` : 'N/A'}</span></div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );

  const renderGeeksforGeeksStats = (data: any, accentColor: string) => (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <Card className="bg-secondary/50 border-border">
          <CardHeader className="pb-2"><CardTitle className="text-lg">Total Solved</CardTitle></CardHeader>
          <CardContent><div className={`text-2xl font-bold ${accentColor}`}>{data.totalSolved}</div></CardContent>
        </Card>
        <Card className="bg-secondary/50 border-border">
          <CardHeader className="pb-2"><CardTitle className="text-lg">Total Score</CardTitle></CardHeader>
          <CardContent><div className={`text-2xl font-bold ${accentColor}`}>{data.score}</div></CardContent>
        </Card>
      </div>
      <Tabs defaultValue="difficulty" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="difficulty">By Difficulty</TabsTrigger>
          <TabsTrigger value="category">By Category</TabsTrigger>
        </TabsList>
        <TabsContent value="difficulty" className="mt-4">
          <div className="grid grid-cols-3 gap-2">
            <div className="text-center"><Badge variant="secondary" className="bg-green-500/20 text-green-400 border-green-500/30">Easy</Badge><div className="text-xl font-bold mt-1">{data.easySolved}</div></div>
            <div className="text-center"><Badge variant="secondary" className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">Medium</Badge><div className="text-xl font-bold mt-1">{data.mediumSolved}</div></div>
            <div className="text-center"><Badge variant="secondary" className="bg-red-500/20 text-red-400 border-red-500/30">Hard</Badge><div className="text-xl font-bold mt-1">{data.hardSolved}</div></div>
          </div>
        </TabsContent>
        <TabsContent value="category" className="mt-4">
          <div className="grid grid-cols-2 gap-2">
            <div className="text-center"><Badge variant="outline">Institution Rank</Badge><div className="text-lg font-bold mt-1">{data.InstitutionRanking}</div></div>
            <div className="text-center"><Badge variant="outline">Language</Badge><div className="text-lg font-bold mt-1">{data.Language}</div></div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );

  const renderCodeforcesStats = (data: any, accentColor: string) => (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <Card className="bg-secondary/50 border-border">
          <CardHeader className="pb-2"><CardTitle className="text-lg">Total Solved</CardTitle></CardHeader>
          <CardContent><div className={`text-2xl font-bold ${accentColor}`}>{data.totalSolved}</div></CardContent>
        </Card>
        <Card className="bg-secondary/50 border-border">
          <CardHeader className="pb-2"><CardTitle className="text-lg">Current Rating</CardTitle></CardHeader>
          <CardContent><div className={`text-2xl font-bold ${accentColor}`}>{data.rating}</div></CardContent>
        </Card>
      </div>
      <Tabs defaultValue="difficulty" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="difficulty">By Difficulty</TabsTrigger>
          <TabsTrigger value="rating">Rating Info</TabsTrigger>
        </TabsList>
        <TabsContent value="difficulty" className="mt-4">
          <div className="grid grid-cols-3 gap-2">
            <div className="text-center"><Badge variant="secondary" className="bg-green-500/20 text-green-400 border-green-500/30">Easy</Badge><div className="text-xl font-bold mt-1">{data.easySolved}</div></div>
            <div className="text-center"><Badge variant="secondary" className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">Medium</Badge><div className="text-xl font-bold mt-1">{data.mediumSolved}</div></div>
            <div className="text-center"><Badge variant="secondary" className="bg-red-500/20 text-red-400 border-red-500/30">Hard</Badge><div className="text-xl font-bold mt-1">{data.hardSolved}</div></div>
          </div>
        </TabsContent>
        <TabsContent value="rating" className="mt-4">
          <div className="space-y-2">
            <div className="flex justify-between"><span>Current Rank:</span><span className="font-bold">{data.rank}</span></div>
            <div className="flex justify-between"><span>Max Rating:</span><span className="font-bold">{data.maxRating}</span></div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );

  const renderCodeChefStats = (data: any, accentColor: string) => (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <Card className="bg-secondary/50 border-border">
          <CardHeader className="pb-2"><CardTitle className="text-lg">Total Solved</CardTitle></CardHeader>
          <CardContent><div className={`text-2xl font-bold ${accentColor}`}>{data.totalSolved}</div></CardContent>
        </Card>
        <Card className="bg-secondary/50 border-border">
          <CardHeader className="pb-2"><CardTitle className="text-lg">Current Rating</CardTitle></CardHeader>
          <CardContent><div className={`text-2xl font-bold ${accentColor}`}>{data.rating}</div></CardContent>
        </Card>
      </div>
      <Tabs defaultValue="difficulty" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="difficulty">By Difficulty</TabsTrigger>
          <TabsTrigger value="stats">Stats</TabsTrigger>
        </TabsList>
        <TabsContent value="difficulty" className="mt-4">
          <div className="grid grid-cols-3 gap-2">
            <div className="text-center"><Badge variant="secondary" className="bg-green-500/20 text-green-400 border-green-500/30">Easy</Badge><div className="text-xl font-bold mt-1">{data.easySolved}</div></div>
            <div className="text-center"><Badge variant="secondary" className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">Medium</Badge><div className="text-xl font-bold mt-1">{data.mediumSolved}</div></div>
            <div className="text-center"><Badge variant="secondary" className="bg-red-500/20 text-red-400 border-red-500/30">Hard</Badge><div className="text-xl font-bold mt-1">{data.hardSolved}</div></div>
          </div>
        </TabsContent>
        <TabsContent value="stats" className="mt-4">
          <div className="space-y-2">
            <div className="flex justify-between"><span>Star Rating:</span><span className="font-bold">{data.rank}</span></div>
            <div className="flex justify-between"><span>Global Rank:</span><span className="font-bold">{data.globalRank}</span></div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );

  return (
    <section id="coding" className="py-20 relative bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
              Coding Platforms
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My competitive programming journey and achievements across various platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {platforms.map((platform, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 200}
              className="group relative p-6 rounded-2xl bg-card/80 backdrop-blur-sm border border-border hover:border-primary/30 hover:scale-105 transition-all duration-300 hover:shadow-xl shadow-lg"
            >
              <div className="text-center mb-6">
                <div className="w-16 h-16 mx-auto mb-4 p-2">
                  <img src={platform.logo} alt={platform.name} className="w-full h-full object-contain" />
                </div>
                <h3 className={`text-2xl font-bold bg-gradient-to-r ${platform.color} bg-clip-text text-transparent`}>
                  {platform.name}
                </h3>
              </div>

              {platform.loading ? (
                <div className="text-center py-8">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
                  <p className="mt-4 text-muted-foreground">Loading stats...</p>
                </div>
              ) : platform.error ? (
                <div className="text-center py-8">
                  <p className="text-red-400">Failed to load stats</p>
                  <p className="text-sm text-muted-foreground mt-2">{platform.error}</p>
                </div>
              ) : platform.data ? (
                <>
                  {platform.name === 'LeetCode' && renderLeetCodeStats(platform.data, platform.accentColor)}
                  {platform.name === 'GeeksforGeeks' && renderGeeksforGeeksStats(platform.data, platform.accentColor)}
                  {platform.name === 'Codeforces' && renderCodeforcesStats(platform.data, platform.accentColor)}
                  {platform.name === 'CodeChef' && renderCodeChefStats(platform.data, platform.accentColor)}
                </>
              ) : (
                <div className="text-center py-8"><p className="text-muted-foreground">No data available</p></div>
              )}

              <div className="mt-6 text-center">
                <a
                  href={platform.profileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-block px-6 py-3 bg-gradient-to-r ${platform.color} text-white font-semibold rounded-lg hover:scale-105 transition-all duration-300 hover:shadow-lg`}
                >
                  View Profile
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CodingPlatforms;
