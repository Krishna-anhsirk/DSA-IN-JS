// Leetcode problem no. 26

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  const len = nums.length;
  let currIndex = 0;
  for (let i = 1; i < len; i++) {
    if (nums[i] > nums[currIndex] && i !== currIndex - 1) {
      currIndex++;
      nums[currIndex] = nums[i];
    }
  }

  return currIndex + 1;
};
