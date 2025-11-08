// Leetcode problem no. 2942

/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */

// My solution without built in methods. Was very easy
// T O(N*M) where N is length of words array and M is maximum length of each word
// S O(1) - Because in question, they are asking to return a new array - Interviewers might have different take. Tell them, I'm using O(N) but it is asked to return a new array in question. This is just to store the answer
// Can use includes instead of inner loop

var findWordsContaining = function (words, x) {
  const containsArray = [];
  words.forEach((word, index) => {
    const n = word.length;
    for (let i = 0; i < word.length; i++) {
      if (word[i] === x) {
        containsArray.push(index);
        break;
      }
    }
  });
  return containsArray;
};
