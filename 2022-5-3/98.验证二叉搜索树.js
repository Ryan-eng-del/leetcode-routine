// 98.验证二叉搜索树
// 输入：root = [2,1,3]
// 输出：true

/* 递归将二叉树转换为数组 */
var isValidBST = function (root) {
  const result = [];
  traversal(root, result);
  for (let i = 1; i < result.length; i++) {
    if (result[i] <= result[i - 1]) return false;
  }
  return true;
};
var traversal = function (root, result) {
  if (root == null) return root;
  traversal(root.left, result);
  result.push(root.val);
  traversal(root.right, result);
};

/* 前序遍历验证 */
var isValidBST = function (root) {
  let pre = null;
  const traversal = (root) => {
    if (root === null) return true;
    let left = traversal(root.left);
    if (pre !== null && pre.val >= root.val) return false;
    pre = root;
    let right = traversal(root.right);
    return left && right;
  };
  return traversal(root);
};
