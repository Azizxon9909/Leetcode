function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

var isSymmetric = function (root) {
  if (root === null) return true;
  return isMirror(root.left, root.right);
};

function isMirror(leftSub, rightSub) {
  if (leftSub === null && rightSub === null) {
    return true;
  } else if (leftSub === null || rightSub === null) {
    return false;
  }
  return (
    leftSub.val === rightSub.val &&
    isMirror(leftSub.left, rightSub.right) &&
    isMirror(leftSub.right, rightSub.left)
  );
}

const tree = new TreeNode(
  1,
  new TreeNode(2, new TreeNode(12), new TreeNode(10)),
  new TreeNode(2, new TreeNode(10), new TreeNode(12))
);
console.log(isSym(tree));
