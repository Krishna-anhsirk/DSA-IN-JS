// Leetcode problem no. 234

// My solution (blatantly took from Akshay's code but works)
// Have to dry run and then practice

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  if (!head.next) return true;

  let slow = (fast = head);
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  let prev = (next = null);
  let curr = slow;
  while (curr) {
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  let firstCurr = head;
  let secondCurr = prev;

  while (secondCurr) {
    if (firstCurr.val !== secondCurr.val) return false;
    firstCurr = firstCurr.next;
    secondCurr = secondCurr.next;
  }
  return true;
};

// Brute force - O(N) T, O(N) S

var isPalindrome = function (head) {
  const convArray = [];
  while (head) {
    convArray.push(head.val);
    head = head.next;
  }

  let i = 0;
  let j = convArray.length - 1;
  console.log(convArray);
  while (i <= j) {
    if (convArray[i] !== convArray[j]) return false;
    i++;
    j--;
  }

  return true;
};
