// Leetcode problem no. 3541

// My solution - O(N) T, O(1) S
// Could be better - small optimizations, try again
// ChatGPT gave the optimizations

/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function (s) {
  const vowelMap = {};
  const consonantMap = {};
  const vowels = ['a', 'e', 'i', 'o', 'u'];

  for (let i = 0; i < s.length; i++) {
    if (vowels.includes(s[i]))
      vowelMap[s[i]] = vowelMap[s[i]] ? ++vowelMap[s[i]] : 1;
    else consonantMap[s[i]] = consonantMap[s[i]] ? ++consonantMap[s[i]] : 1;
  }

  const maxVowelFreq = Object.values(vowelMap).reduce(
    (acc, curr) => (curr > acc ? curr : acc),
    0
  );
  const maxConsonantFreq = Object.values(consonantMap).reduce(
    (acc, curr) => (curr > acc ? curr : acc),
    0
  );

  return maxVowelFreq + maxConsonantFreq;
};
