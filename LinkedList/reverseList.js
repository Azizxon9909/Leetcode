//  Definition for singly-linked list.
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  if (!head || !head.next) {
    return head;
  }

  let newhead = reverseList(head.next);

  head.next.next = head;
  head.next = null;

  return newhead;
};

console.log(
  JSON.stringify(
    reverseList({
      val: 1,
      next: {
        val: 2,
        next: {
          val: 3,
          next: null,
        },
      },
    })
  )
);
