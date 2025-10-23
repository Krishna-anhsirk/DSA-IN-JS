// Leetcode problem no. 876

// My solution
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
};

// Brute force
var middleNode = function (head) {
  let length = 0;
  let curr = head;
  while (curr) {
    curr = curr.next;
    length++;
  }
  const mid = Math.floor(length / 2);
  curr = head;
  for (let i = 0; i < mid; i++) {
    curr = curr.next;
  }
  return curr;
};
