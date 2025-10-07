// Leetcode problem number 27.

// My code - a bit complex
// I think I understood these problems in a complex way. There is a simple way to solve this
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  const len = nums.length;

  if (len === 0) return 0;
  if (len === 1) {
    if (nums[0] === val) return 0;
    else return 1;
  }

  let curr = 0;
  for (let i = 0; i < len; i++) {
    if (nums[curr] === val && nums[i] !== val) {
      nums[curr] = nums[i];
      nums[i] = val;
      curr++;
    } else if (nums[curr] !== val) {
      curr++;
    }
  }

  if (curr === 0 && nums[curr] === val) return 0;

  return curr;
};

// Akshay's solution
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  const len = nums.length;
  let curr = 0;
  for (let i = 0; i < len; i++) {
    if (nums[i] !== val) {
      nums[curr] = nums[i];
      curr++;
    }
  }

  return curr;
};
