// Leetcode problem no. 141

// My solution. Could solve everything based on previous years practice

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) return true;
  }
  return false;
};

// Brute force - O(N) T, O(N) S
var hasCycle = function (head) {
  let curr = head;
  const seenNodes = new Set();
  while (curr) {
    if (seenNodes.has(curr)) return true;
    else {
      seenNodes.add(curr);
      curr = curr.next;
    }
  }
  return false;
};
