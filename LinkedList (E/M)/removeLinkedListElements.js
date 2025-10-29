// Leetcode problem no. 203

// Akshay's solution - a bit clean.
// Remember - how many variables you add, those many you have to take care of
// Try reducing the number of variables

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  const sentinelNode = new ListNode();

  let prev = sentinelNode;
  prev.next = head;

  while (prev && prev.next) {
    if (prev.next.val === val) {
      prev.next = prev.next.next;
    } else {
      prev = prev.next;
    }
  }
  return sentinelNode.next;
};

// My solution - a bit complex code

var removeElements = function (head, val) {
  if (!head) return head;

  while (head && head.val === val) {
    head = head.next;
  }

  let prev = head;
  let curr = head;

  while (curr) {
    if (curr.val === val) {
      prev.next = curr.next;
      curr.next = null;
      curr = prev.next;
    } else {
      prev = curr;
      curr = curr.next;
    }
  }

  return head;
};

// My another version - seeing Akshay's solution
var removeElements = function (head, val) {
  while (head && head.val === val) {
    head = head.next;
  }

  let prev = head;

  while (prev && prev.next) {
    if (prev.next.val === val) {
      prev.next = prev.next.next;
    } else {
      prev = prev.next;
    }
  }
  return head;
};
