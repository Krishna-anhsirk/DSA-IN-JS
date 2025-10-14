// Leetcode problem no. 268

// My solution with help of variable peeking in old submission. Should practice
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  let sum = 0;
  const len = nums.length;
  for (let i = 0; i < len; i++) {
    sum += nums[i];
  }

  return (len * (len + 1)) / 2 - sum;
};
