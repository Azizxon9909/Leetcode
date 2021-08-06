/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function (node) {
  node.val = node.next.val;
  node.next = node.next.next;
  return node;
};

console.log(
  JSON.stringify(
    deleteNode({
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
