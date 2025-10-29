// Leetcode problem no. 160

// Took from Youtube O(m+n) T, O(1) S. Akshay stopped at below brute force approach. He had another brute force and this brute force approach as optimal
// Another version is also there - same approach. Find lengths and make both pointers start at a synchronised length. Needs more practice on this. Think about approach more and again. Try writing code for other approach

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  let temp1 = headA;
  let temp2 = headB;

  while (temp1 !== temp2) {
    temp1 = temp1 ? temp1.next : headB;
    temp2 = temp2 ? temp2.next : headA;
  }

  return temp2;
};

// Brute force - O(m+n) T, O(m) S

var getIntersectionNode = function (headA, headB) {
  const hashTable = new Set();
  let firstCurr = headA;
  let secondCurr = headB;

  while (firstCurr) {
    hashTable.add(firstCurr);
    firstCurr = firstCurr.next;
  }

  while (secondCurr) {
    if (hashTable.has(secondCurr)) return secondCurr;
    secondCurr = secondCurr.next;
  }

  return null;
};
