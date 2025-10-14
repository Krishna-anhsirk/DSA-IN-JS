// Leetcode problem no. 283

// My solution - a bit complx and different way to solve
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let p1 = 0;
  let p2 = 0;
  const len = nums.length;

  while (p2 < len) {
    if (nums[p1] !== 0 && nums[p2] !== 0) {
      p1++;
      p2++;
    } else if (nums[p1] === 0 && nums[p2] !== 0) {
      nums[p1] = nums[p2];
      nums[p2] = 0;
      p1++;
      p2++;
    } else if (nums[p1] !== 0) p1++;
    else if (nums[p2] === 0) p2++;
  }
};

// Akshay's solution - simpler but more iterations
var moveZeroes = function (nums) {
  let x = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[x] = nums[i];
      x++;
    }
  }

  while (x < nums.length) {
    nums[x] = 0;
    x++;
  }
};

// Another version seeing comments - more readable but a bit complex than Akshay's
var moveZeroes = function (nums) {
  let x = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      const temp = nums[x];
      nums[x] = nums[i];
      nums[i] = temp;
      x++;
    }
  }
};
