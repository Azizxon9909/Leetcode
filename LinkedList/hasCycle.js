function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var hasCycle = function (head) {
  if (head === null || head.next === null) {
    return false;
  }

  let slow = head.next;
  let fast = head.next.next;

  while (slow !== fast) {
    slow = slow.next;
    if (fast == null || fast.next === null) {
      return false;
    }
    fast = fast.next.next;
  }
  
  return true;
};

const head = new ListNode(1, new ListNode(2, new ListNode(1, new ListNode(2))));

const a = head.next;
head.next.next.next.next = a;

console.log(hasCycle(head));
