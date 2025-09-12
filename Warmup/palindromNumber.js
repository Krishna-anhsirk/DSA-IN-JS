// Leetcode problem 9. palindrome number

// My solution
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) return false;
  if (x < 10) return true;

  let num = x;
  let reverse_num = 0;

  while (num > 0) {
    let digit = num % 10;
    reverse_num = reverse_num * 10 + digit;
    num = Math.floor(num / 10);
  }

  return x === reverse_num;
};

// From leetcode comments (better and two more additions)
/**
 * @param {number} x
 * @return {boolean}
 */
// var isPalindrome = function(x) {
//     if(x < 0 || (x % 10 === 0 && x !== 0)) return false;
//     if(x < 10) return true;

//     let num_half = x
//     let reverse_num_half = 0

//     while(reverse_num_half < num_half){
//         let digit = num_half % 10
//         reverse_num_half = reverse_num_half * 10 + digit
//         num_half = Math.floor(num_half / 10)
//     }

//     return num_half === reverse_num_half || num_half === Math.floor(reverse_num_half / 10)
// };
