// Leetcode problem no. 328

// My solution after listening to Akshay's approach. Very simple. I wrote complicated code for this in another ways below.

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
var oddEvenList = function (head) {
  if (!head || !head.next) return head;

  let odd = head;
  let even = (evenStart = head.next);

  while (odd.next && even.next) {
    odd.next = odd.next.next;
    even.next = even.next.next;
    odd = odd.next;
    even = even.next;
  }

  odd.next = evenStart;
  return head;
};

// My solution - simple. Completely on my own. O(N) T, O(1) S

var oddEvenList = function (head) {
  if (!head || !head.next || !head.next.next) return head;

  let evenHead = head.next;
  let curr = head;
  let currEven = evenHead;
  let temp = null;
  while (curr.next && curr.next.next) {
    temp = curr.next;
    curr.next = temp.next;
    curr = curr.next;
    currEven.next = temp;
    currEven = temp;
  }

  if (curr.next) {
    temp = curr.next;
    curr.next = temp.next;
    currEven.next = temp;
    currEven = temp;
  }

  currEven.next = null;
  curr.next = evenHead;

  return head;
};

// My solution. Completely on my own - Complex

var oddEvenList = function (head) {
  if (!head || !head.next || !head.next.next) return head;

  let lastNode = head;
  while (lastNode.next) {
    lastNode = lastNode.next;
  }

  const firstEvenNode = head.next;
  let currEvenNode = lastNode;
  let currOddNode = head;

  do {
    const temp = currOddNode.next;
    currOddNode.next = temp.next;
    temp.next = null;
    currOddNode = currOddNode.next;

    currEvenNode.next = temp;
    currEvenNode = temp;
  } while (currOddNode !== firstEvenNode && currOddNode.next !== firstEvenNode);

  return head;
};

// Brute force thinking
// Create two linked lists
// Add odd nodes in one and even in another and concat and return head
// Or create one list, add even, in original list remove even. Concat and return
