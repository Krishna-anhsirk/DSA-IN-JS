// Leetcode problem no. 2

// Could shorten the code after seeing my previous submissions.
// O(N+M) T, O(N+M) S

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let i = l1;
  let j = l2;
  const sumList = new ListNode();
  let currNode = sumList;
  let carry = 0;
  let currSum = 0;

  while (i || j || carry) {
    if (i) {
      currSum += i.val;
      i = i.next;
    }

    if (j) {
      currSum += j.val;
      j = j.next;
    }

    // You can also calculate carry everytime using Math.floor - Akshay's version
    if (carry) {
      currSum += carry;
      carry = 0;
    }

    if (currSum > 9) {
      currSum = currSum % 10;
      carry++;
    }

    currNode.next = new ListNode(currSum);
    currNode = currNode.next;
    currSum = 0;
  }

  return sumList.next;
};

// My solution - a bit lengthy code O(N+M) T, O(N+M) S

var addTwoNumbers = function (l1, l2) {
  let i = l1;
  let j = l2;
  const sumList = new ListNode();
  let currNode = sumList;
  let carry = 0;
  let currSum = 0;

  while (i && j) {
    currSum = i.val + j.val + carry;
    carry = 0; // Reset carry

    if (currSum > 9) {
      currSum = currSum % 10;
      carry++;
    }

    currNode.next = new ListNode(currSum);
    currNode = currNode.next;

    i = i.next;
    j = j.next;
  }

  while (i) {
    currSum = i.val + carry;
    carry = 0;

    if (currSum > 9) {
      currSum = currSum % 10;
      carry++;
    }

    currNode.next = new ListNode(currSum);
    currNode = currNode.next;

    i = i.next;
  }

  while (j) {
    currSum = j.val + carry;
    carry = 0;

    if (currSum > 9) {
      currSum = currSum % 10;
      carry++;
    }

    currNode.next = new ListNode(currSum);
    currNode = currNode.next;

    j = j.next;
  }

  if (carry) {
    currNode.next = new ListNode(carry);
  }

  return sumList.next;
};
