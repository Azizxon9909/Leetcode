//   Definition for singly-linked list.
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

function removeNthfromStart(head, k) {
  if (k == 0) {
    return head.next;
  }

  return new ListNode(head.val, removeNthfromStart(head.next, k - 1));
}

var removeNthFromEnd = function (head, n) {
  let list = head;
  let k = 1;

  while (list.next) {
    k++;
    list = list.next;
  }

  return removeNthfromStart(head, k - n);
};

console.log(
  removeNthFromEnd(new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))), 2)
);
