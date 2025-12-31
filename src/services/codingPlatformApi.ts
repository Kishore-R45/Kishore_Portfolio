
// LeetCode API service using alfa-leetcode-api
export const fetchLeetCodeStats = async (username: string) => {
  try {
    // Fetch profile, solved stats and contest data in parallel using alfa-leetcode-api
    const [profileResponse, statsResponse, contestResponse] = await Promise.all([
      fetch(`https://alfa-leetcode-api.onrender.com/${username}`),
      fetch(`https://alfa-leetcode-api.onrender.com/${username}/solved`),
      fetch(`https://alfa-leetcode-api.onrender.com/${username}/contest`)
    ]);
    
    // Parse profile data for overall global ranking
    let globalRanking = null;
    
    if (profileResponse.ok) {
      try {
        const profileData = await profileResponse.json();
        globalRanking = profileData.ranking || null;
      } catch (parseError) {
        console.log('Profile data parse failed');
      }
    }
    
    // Parse solved data
    let totalSolved = 0, easySolved = 0, mediumSolved = 0, hardSolved = 0;
    
    if (statsResponse.ok) {
      try {
        const solvedData = await statsResponse.json();
        totalSolved = solvedData.solvedProblem || 0;
        easySolved = solvedData.easySolved || 0;
        mediumSolved = solvedData.mediumSolved || 0;
        hardSolved = solvedData.hardSolved || 0;
      } catch (parseError) {
        console.log('Solved data parse failed');
      }
    }
    
    // Parse contest data
    let contestRating = null;
    let contestRanking = null;
    
    if (contestResponse.ok) {
      try {
        const contestData = await contestResponse.json();
        if (contestData?.contestRating) {
          contestRating = Math.round(contestData.contestRating);
        }
        if (contestData?.contestGlobalRanking) {
          contestRanking = contestData.contestGlobalRanking;
        }
      } catch (parseError) {
        console.log('Contest data parse failed');
      }
    }
    
    return {
      totalSolved,
      easySolved,
      mediumSolved,
      hardSolved,
      ranking: globalRanking || 'N/A',
      contestRating,
      contestRanking
    };
  } catch (error) {
    console.error('LeetCode API Error:', error);
    return null;
  }
};

// GeeksforGeeks API service (using web scraping approach as they don't have public API)
export const fetchGeeksforGeeksStats = async (username: string) => {
  try {
    // Note: This is a mock implementation as GFG doesn't have a public API
    // In a real scenario, you'd need to use a backend service to scrape data
    const response = await fetch(`https://auth.geeksforgeeks.org/user/${username}/practice/`);
    
    // For now, returning mock data - you'll need backend scraping for real data
    return {
      totalSolved: 650,
      schoolSolved: 150,
      basicSolved: 200,
      easySolved: 180,
      mediumSolved: 120,
      hardSolved: 50,
      score: 1890,
      rank: 'Expert'
    };
  } catch (error) {
    console.error('GeeksforGeeks API Error:', error);
    return null;
  }
};

// CodeChef API service
export const fetchCodeChefStats = async (username: string) => {
  try {
    // CodeChef doesn't have a public API, using mock data
    // In production, you'd need backend scraping
    return {
      totalSolved: 245,
      easySolved: 120,
      mediumSolved: 95,
      hardSolved: 30,
      rating: 1650,
      maxRating: 1750,
      rank: '3 Star',
      globalRank: 15420
    };
  } catch (error) {
    console.error('CodeChef API Error:', error);
    return null;
  }
};

// Codeforces API service
export const fetchCodeforcesStats = async (username: string) => {
  try {
    const [userResponse, submissionsResponse] = await Promise.all([
      fetch(`https://codeforces.com/api/user.info?handles=${username}`),
      fetch(`https://codeforces.com/api/user.status?handle=${username}&from=1&count=10000`)
    ]);

    if (!userResponse.ok || !submissionsResponse.ok) {
      throw new Error('Failed to fetch Codeforces data');
    }

    const userData = await userResponse.json();
    const submissionsData = await submissionsResponse.json();

    if (userData.status !== 'OK' || submissionsData.status !== 'OK') {
      throw new Error('Codeforces API returned error');
    }

    const user = userData.result[0];
    const submissions = submissionsData.result;

    // Count solved problems by difficulty
    const solvedProblems = new Set();
    const difficultyCount = { easy: 0, medium: 0, hard: 0 };

    submissions.forEach((submission: any) => {
      if (submission.verdict === 'OK') {
        const problemId = `${submission.problem.contestId}-${submission.problem.index}`;
        if (!solvedProblems.has(problemId)) {
          solvedProblems.add(problemId);
          const rating = submission.problem.rating || 0;
          if (rating <= 1200) difficultyCount.easy++;
          else if (rating <= 1800) difficultyCount.medium++;
          else difficultyCount.hard++;
        }
      }
    });

    return {
      totalSolved: solvedProblems.size,
      easySolved: difficultyCount.easy,
      mediumSolved: difficultyCount.medium,
      hardSolved: difficultyCount.hard,
      rating: user.rating || 0,
      maxRating: user.maxRating || 0,
      rank: user.rank || 'Unrated',
      maxRank: user.maxRank || 'Unrated'
    };
  } catch (error) {
    console.error('Codeforces API Error:', error);
    return null;
  }
};
