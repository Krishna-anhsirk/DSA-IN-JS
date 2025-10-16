// Leetcode problem no. 231

// My solution with recursion

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
  if (n <= 0) return false;

  if (n === 1) return true;

  function divideByTwo(x) {
    if (x === 2) return 1;

    if (x % 2 === 1) return -1;

    return divideByTwo(x / 2);
  }

  if (divideByTwo(n) === -1) return false;

  return true;
};

// Akshay's version (Almost same)
var isPowerOfTwo = function (n) {
  if (n === 1) return true;

  if (n < 1 || n % 2 === 1) return false;

  return isPowerOfTwo(n / 2);
};

// Copied from previous submissions. Couldn't remember this
var isPowerOfTwo = function (n) {
  let setBits = 0;

  while (n > 0) {
    if (n & 1) {
      setBits++;
    }
    n = n >> 1;
  }

  if (setBits === 1) return true;

  return false;
};
