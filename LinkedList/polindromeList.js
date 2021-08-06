function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  let arr = [];
  while (head.next !== null) {
    arr.push(head.val);
    head = head.next;
  }
  arr.push(head.val);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[arr.length - 1 - i]) {
      return false;
    }
  }
  return true;
};

console.log(
  isPalindrome(
    new ListNode(
      1,
      new ListNode(2, new ListNode(36, new ListNode(2, new ListNode(1))))
    )
  )
);
