//  Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  if (root === null) {
    return 0;
  } else {
    var leftDepth = maxDepth(root.left),
      rightDepth = maxDepth(root.right);
    var childDepth = leftDepth > rightDepth ? leftDepth : rightDepth;
    return 1 + childDepth;
  }
};

const tree = new TreeNode(
  1,
  new TreeNode(2, new TreeNode(12), new TreeNode(10)),
  new TreeNode(3)
);
console.log(maxDepth(tree));
