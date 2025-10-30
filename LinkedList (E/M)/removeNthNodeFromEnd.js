// Leetcode problem no. 19

// My solution - One pass, O(N) T, O(1) S
// Akshay's version had sentinel node

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let slow = (fast = head);

  for (let i = 0; i < n; i++) {
    fast = fast.next;
  }

  // You can disconnect head and then return as below in 2nd version
  if (!fast) return head.next;

  while (fast.next) {
    slow = slow.next;
    fast = fast.next;
  }

  // You can disconnect node and return as below in 2nd version
  slow.next = slow.next.next;

  return head;
};

// My solution Brute force - Two pass O(N) T, O(1) S
// Akshay's version had sentinel node

var removeNthFromEnd = function (head, n) {
  let len = 0;
  let curr = head;

  while (curr) {
    len++;
    curr = curr.next;
  }

  if (len === n) return head.next;
  // You can cut connection and return from second node
  //   {
  //     const temp = head;
  //     head = head.next;
  //     temp.next = null;
  //     return head;
  //   }

  curr = head;

  for (let i = 1; i < len - n; i++) {
    curr = curr.next;
  }
  // You can cut connection as above
  curr.next = curr.next.next;
  return head;
};
