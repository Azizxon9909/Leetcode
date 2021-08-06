function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

var levelOrder = function (root) {
  const arr = [];

  if (!root) {
    return arr;
  }

  function traversal(root, level = 0) {
    if (!root) return;

    arr[level] = arr[level] ?? [];
    arr[level].push(root.val);

    traversal(root.left, level + 1);
    traversal(root.right, level + 1);
  }

  traversal(root);
  return arr;
};

const tree = new TreeNode(
  1,
  new TreeNode(2, new TreeNode(12), new TreeNode(10)),
  new TreeNode(2, new TreeNode(10), new TreeNode(12))
);
console.log(levelOrder(tree));
