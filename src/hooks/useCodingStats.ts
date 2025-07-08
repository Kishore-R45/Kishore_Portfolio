
import { useState, useEffect } from 'react';
import { fetchLeetCodeStats, fetchGeeksforGeeksStats, fetchCodeforcesStats } from '../services/codingPlatformApi';

export interface PlatformStats {
  leetcode?: any;
  geeksforgeeks?: any;
  codeforces?: any;
}

export interface LoadingState {
  leetcode: boolean;
  geeksforgeeks: boolean;
  codeforces: boolean;
}

export const useCodingStats = (usernames: { leetcode: string; geeksforgeeks: string; codeforces: string }) => {
  const [stats, setStats] = useState<PlatformStats>({});
  const [loading, setLoading] = useState<LoadingState>({
    leetcode: false,
    geeksforgeeks: false,
    codeforces: false
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    const fetchAllStats = async () => {
      // Fetch LeetCode stats
      if (usernames.leetcode) {
        setLoading(prev => ({ ...prev, leetcode: true }));
        try {
          const leetcodeData = await fetchLeetCodeStats(usernames.leetcode);
          setStats(prev => ({ ...prev, leetcode: leetcodeData }));
        } catch (error) {
          setErrors(prev => ({ ...prev, leetcode: 'Failed to fetch LeetCode stats' }));
        } finally {
          setLoading(prev => ({ ...prev, leetcode: false }));
        }
      }

      // Fetch GeeksforGeeks stats
      if (usernames.geeksforgeeks) {
        setLoading(prev => ({ ...prev, geeksforgeeks: true }));
        try {
          const gfgData = await fetchGeeksforGeeksStats(usernames.geeksforgeeks);
          setStats(prev => ({ ...prev, geeksforgeeks: gfgData }));
        } catch (error) {
          setErrors(prev => ({ ...prev, geeksforgeeks: 'Failed to fetch GeeksforGeeks stats' }));
        } finally {
          setLoading(prev => ({ ...prev, geeksforgeeks: false }));
        }
      }

      // Fetch Codeforces stats
      if (usernames.codeforces) {
        setLoading(prev => ({ ...prev, codeforces: true }));
        try {
          const codeforcesData = await fetchCodeforcesStats(usernames.codeforces);
          setStats(prev => ({ ...prev, codeforces: codeforcesData }));
        } catch (error) {
          setErrors(prev => ({ ...prev, codeforces: 'Failed to fetch Codeforces stats' }));
        } finally {
          setLoading(prev => ({ ...prev, codeforces: false }));
        }
      }
    };

    fetchAllStats();
  }, [usernames.leetcode, usernames.geeksforgeeks, usernames.codeforces]);

  return { stats, loading, errors };
};
