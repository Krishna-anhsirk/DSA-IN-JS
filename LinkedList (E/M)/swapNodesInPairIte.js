// Leetcode problem no. 24

// My solution - iterative approach - O(N) T, O(1) S
// Akshay's approach had sentinel node. That is also easy. It replaces the same operations I'm doing before loop - will have 1 extra node space

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
var swapPairs = function (head) {
  if (!head || !head.next) return head;

  let ans = head.next;
  head.next = head.next.next;
  ans.next = head;

  let curr = head.next;
  prev = head;
  let temp = null;
  while (curr && curr.next) {
    temp = curr.next;
    curr.next = curr.next.next;
    prev.next = temp;
    temp.next = curr;
    prev = curr;
    curr = curr.next;
  }
  return ans;
};
