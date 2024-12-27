import axios from 'axios';

export async function getCodeforcesRating(handle: string) {
  try {
    const response = await axios.get(
      `https://codeforces.com/api/user.rating?handle=${handle}`
    );
    return response.data.result.map((contest: any) => ({
      name: new Date(contest.ratingUpdateTimeSeconds * 1000).toLocaleDateString(),
      rating: contest.newRating,
    }));
  } catch (error) {
    console.error('Error fetching Codeforces rating:', error);
    return [];
  }
}

export async function getLeetCodeStats(username: string) {
  try {
    const query = `
      query userProfile($username: String!) {
        matchedUser(username: $username) {
          submitStats {
            acSubmissionNum {
              difficulty
              count
              submissions
            }
          }
          userContestRanking {
            rating
            attendedContestsCount
            topPercentage
          }
        }
      }
    `;

    const response = await axios.post('https://leetcode.com/graphql', {
      query,
      variables: { username },
    });

    return response.data.data.matchedUser;
  } catch (error) {
    console.error('Error fetching LeetCode stats:', error);
    return null;
  }
}