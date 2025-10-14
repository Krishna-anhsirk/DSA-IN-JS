// Leetcode problem no. 485

// My solution
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  let maxConsecutiveOnesSoFar = 0;
  let currentConsecutiveOnes = 0;
  const len = nums.length;

  for (let i = 0; i < len; i++) {
    if (nums[i] === 1) {
      currentConsecutiveOnes++;
    } else {
      currentConsecutiveOnes = 0;
    }

    if (currentConsecutiveOnes > maxConsecutiveOnesSoFar) {
      maxConsecutiveOnesSoFar = currentConsecutiveOnes;
    }
  }

  return maxConsecutiveOnesSoFar;
};

// Akshay's solution - a small tweak but same method
var findMaxConsecutiveOnes = function (nums) {
  let maxConsecutiveOnesSoFar = 0;
  let currentConsecutiveOnes = 0;
  const len = nums.length;

  for (let i = 0; i < len; i++) {
    if (nums[i] === 1) {
      currentConsecutiveOnes++;
    } else {
      if (currentConsecutiveOnes > maxConsecutiveOnesSoFar) {
        maxConsecutiveOnesSoFar = currentConsecutiveOnes;
      }
      currentConsecutiveOnes = 0;
    }
  }

  return Math.max(maxConsecutiveOnesSoFar, currentConsecutiveOnes);
};
