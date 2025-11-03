// Leetcode problem no. 61

// My solution on Akshay's approach. Basically same approach but with fast and slow instead
// More simple code - same method - O(N) T, O(1) S

// Approach - I didn't try - make it a circular list and then loop k times, break the list and return

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
  if (!head || !head.next || k === 0) return head;

  let curr = head;
  let len = 0;
  while (curr) {
    curr = curr.next;
    len++;
  }

  let numOfRotations = k % len;

  if (numOfRotations === 0 || numOfRotations === len) return head;

  let fast = head;
  let slow = head;
  while (numOfRotations--) {
    fast = fast.next;
  }

  while (fast.next) {
    slow = slow.next;
    fast = fast.next;
  }

  fast.next = head;
  const ans = slow.next;
  slow.next = null;
  return ans;
};

// My solution - a bit complex code, but less traversal because tail is stored starting only

var rotateRight = function (head, k) {
  // Empty list or list with only 1 item
  if (!head || !head.next || k == 0) return head;

  let len = 1;
  let tail = head;
  while (tail.next) {
    len++;
    tail = tail.next;
  }

  if (len === k) return head;

  const numOfRotations = k % len;

  if (!numOfRotations) return head;

  let curr = head;
  for (let i = 1; i < len - numOfRotations; i++) {
    curr = curr.next;
  }

  const temp = curr.next;
  curr.next = null;
  tail.next = head;
  return temp;
};
