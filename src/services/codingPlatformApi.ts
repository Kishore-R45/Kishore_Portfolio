
// LeetCode API service
export const fetchLeetCodeStats = async (username: string) => {
  try {
    // Using a public LeetCode API endpoint
    const response = await fetch(`https://leetcode-stats-api.herokuapp.com/${username}`);
    if (!response.ok) throw new Error('Failed to fetch LeetCode data');
    const data = await response.json();
    
    // Fetch contest data using LeetCode GraphQL API
    let contestRating = null;
    let contestRanking = null;
    
    try {
      const contestResponse = await fetch('https://leetcode.com/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: `
            query userContestRankingInfo($username: String!) {
              userContestRanking(username: $username) {
                rating
                globalRanking
              }
            }
          `,
          variables: { username }
        })
      });
      
      if (contestResponse.ok) {
        const contestData = await contestResponse.json();
        if (contestData?.data?.userContestRanking) {
          contestRating = Math.round(contestData.data.userContestRanking.rating);
          contestRanking = contestData.data.userContestRanking.globalRanking;
        }
      }
    } catch (contestError) {
      console.log('Contest data fetch failed, using fallback');
    }
    
    return {
      totalSolved: data.totalSolved || 0,
      easySolved: data.easySolved || 0,
      mediumSolved: data.mediumSolved || 0,
      hardSolved: data.hardSolved || 0,
      acceptanceRate: data.acceptanceRate || 0,
      ranking: data.ranking || 'N/A',
      contributionPoints: data.contributionPoints || 0,
      reputation: data.reputation || 0,
      contestRating: contestRating,
      contestRanking: contestRanking
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
