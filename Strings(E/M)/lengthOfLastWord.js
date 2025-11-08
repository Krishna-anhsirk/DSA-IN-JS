// Leetcode problem no. 58

/**
 * @param {string} s
 * @return {number}
 */

// Did this when Akshay showed approach where was just keeping track of count and not the whole word
// T O(N), S O(1)
var lengthOfLastWord = function (s) {
  let lastWordLength = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === ' ' && lastWordLength > 0) return lastWordLength;
    if (s[i] !== ' ') lastWordLength++;
  }

  return lastWordLength;
};

// Had to do this when Akshay said you can't use trim and we can loop from back

var lengthOfLastWord = function (s) {
  let lastWord = '';
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === ' ' && lastWord.length > 0) return lastWord.length;
    if (s[i] !== ' ') lastWord = s[i] + lastWord;
  }

  return lastWord.length;
};

// My solution. Could do it completely on my own. T O(N) S O(N)

var lengthOfLastWord = function (s) {
  const inputCopy = s.trim();
  const len = inputCopy.length;
  let currWord = '';

  for (let i = 0; i < len; i++) {
    if (inputCopy[i] === ' ') currWord = '';
    else currWord += inputCopy[i];
  }

  return currWord.length;
};

// Split method - 100% beats Leetcode // S - O(N)
var lengthOfLastWord = function (s) {
  const inputArr = s.trim().split(' ');
  return inputArr[inputArr.length - 1].length;
};
