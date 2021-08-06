function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
let tree = {};
var sortedArrayToBST = function (nums) {
  let index = nums.indexOf(Math.ceil(nums.length / 2));

  tree = new TreeNode(nums[0]);
  return tree;
};

console.log(sortedArrayToBST([1, 2, 3, 5, 6, 7]));
