function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

var isValidBST = function(root) {
    return validateBst(root, -Infinity, Infinity)
};

function validateBst(root, minValue, maxValue) {
    if(root == null) return true;

     if(root.val >= maxValue || root.val <= minValue) return false;
     
    return validateBst(root.right, root.val, maxValue) &&
            validateBst(root.left, minValue, root.val)
}




const tree = new TreeNode(
  1,
  new TreeNode(2, new TreeNode(12), new TreeNode(10)),
  new TreeNode(3)
);
console.log(isValidBST(tree));
