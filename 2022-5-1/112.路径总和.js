// 257.二叉树的所有路径
// 输入：root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22
// 输出：true

/* 递归 */
var hasPathSum = function (root, targetSum) {
  if (root === null) return root;
  targetSum -= root.val;
  return traversal(root, targetSum);
};
var traversal = function (root, targetSum) {
  /* 遇到叶子节点，false就回溯，true直接返回 */
  if (root.left === null && root.right === null && targetSum === 0) return true;
  if (root.left === null && root.right === null) return false;
  if (root.left !== null) {
    targetSum -= root.left.val;
    /* true 直接返回 */
    if (traversal(root.left, targetSum)) return true;
    /* false 回溯 */
    targetSum += root.left.val;
  }
  if (root.right !== null) {
    targetSum -= root.right.val;
    /* true 直接返回 */
    if (traversal(root.right, targetSum)) return true;
    /* false 回溯 */
    targetSum += root.right.val;
  }
  return false;
};

/* 迭代 */
var hasPathSum = function (root, targetSum) {
  if (root === null) return false;
  const stack = [];
  stack.push({
    node: root,
    targetSum: root.val,
  });
  while (stack.length !== 0) {
    const stackNode = stack.pop();
    if (stackNode.node.left === null && stackNode.node.right === null && stackNode.targetSum === targetSum) return true;
    if (stackNode.node.right) {
      node = stackNode.node.right;
      stack.push({
        node: stackNode.node.right,
        targetSum: node.val + stackNode.targetSum,
      });
    }
    if (stackNode.node.left) {
      node = stackNode.node.left;
      stack.push({
        node: stackNode.node.left,
        targetSum: node.val + stackNode.targetSum,
      });
    }
  }
  return false;
};
