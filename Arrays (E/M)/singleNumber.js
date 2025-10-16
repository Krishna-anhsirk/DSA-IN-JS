// Leetcode problem no. 136

// My solution - best with help of hint

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let mul = 0;
  for (let i = 0; i < nums.length; i++) {
    mul ^= nums[i];
  }
  return mul;
};

// Other approach - my code
var singleNumber = function (nums) {
  const frequencyTable = {};

  for (let i = 0; i < nums.length; i++) {
    if (frequencyTable[nums[i]]) frequencyTable[nums[i]]++;
    else frequencyTable[nums[i]] = 1;
  }

  for (const key in frequencyTable) {
    if (frequencyTable[key] === 1) return Number(key);
  }
  return 0;
};
