// Definition for singly-linked list.
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  if (l1 == null) {
    return l2;
  } else if (l2 == null) {
    return l1;
  } else {
    if (l1.val > l2.val) {
      return new ListNode(l2.val, mergeTwoLists(l1, l2.next));
    } else {
      return new ListNode(l1.val, mergeTwoLists(l1.next, l2));
    }
  }
};

console.log(
  JSON.stringify(
    mergeTwoLists(
      {
        val: 1,
        next: {
          val: 2,
          next: {
            val: 5,
            next: null,
          },
        },
      },
      {
        val: 1,
        next: {
          val: 3,
          next: {
            val: 4,
            next: null,
          },
        },
      }
    )
  )
);
