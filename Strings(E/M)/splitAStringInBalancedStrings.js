// Leetcode problem no. 1221

// My solution - O(N) T, O(1) S
// Askhay's one of the soluton variants - Use only 2 variables instead of 3
// So, instead of R, L counts use a single count to balance out

/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function (s) {
  let countOfR = 0;
  let countOfL = 0;
  let balancedStrings = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'R') countOfR++;
    else countOfL++;

    if (countOfR === countOfL) {
      balancedStrings++;
      // Optional: Even if it starts from 0 or some number the base will be same.
      // countOfR = 0
      // countOfL = 0
    }
  }

  return balancedStrings;
};
