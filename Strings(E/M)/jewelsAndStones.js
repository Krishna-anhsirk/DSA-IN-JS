// Leetcode problem no. 771

/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */

// Using Hashmap or set
// T O(max(N, M)), S O(N) where N is length of jewels and M is length of stones
// You can also think like this - since, it is mentioned that jewels are only english letters and are unique - so 52 at max and it can also be said as O(1)
var numJewelsInStones = function (jewels, stones) {
  const jewelSet = new Set();

  for (let i = 0; i < jewels.length; i++) {
    jewelSet.add(jewels[i]);
  }

  let jewelCount = 0;

  for (let i = 0; i < stones.length; i++) {
    if (jewelSet.has(stones[i])) jewelCount++;
  }

  return jewelCount;
};

// Brute force
// My solution. Could solve it both with built in method and without. Very easy
// T O(N*M) N is length of jewels, M is length of stones
// S O(1)

var numJewelsInStones = function (jewels, stones) {
  let jewelCount = 0;
  for (let i = 0; i < stones.length; i++) {
    for (let j = 0; j < jewels.length; j++) {
      if (stones[i] === jewels[j]) {
        jewelCount++;
        break;
      }
    }
    // if(jewels.includes(stones[i])) jewelCount++
  }

  return jewelCount;
};
