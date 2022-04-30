// 110. 平衡二叉树
// 输入：root = [3,9,20,null,null,15,7]
// 输出：true

/* 递归 */
var isBalanced = function (root) {
  return getDepth(root) === -1 ? false : true;
};
var getDepth = function (root) {
  if (root === null) return 0;
  /* 检查左子树是否平衡 */
  let leftDepth = getDepth(root.left);
  if (leftDepth === -1) return -1;
  /* 检查右子树是否平衡 */
  let rightDepth = getDepth(root.right);
  if (rightDepth === -1) return -1;
  /* 中 */
  return Math.abs(leftDepth - rightDepth) > 1 ? -1 : Math.max(rightDepth, leftDepth) + 1;
};

/* 迭代 */
var isBalanced = function (root) {
  if (root === null) return true;
  const queue = [];
  queue.push(root);
  while (queue.length != 0) {
    const size = queue.length;
    for (let i = 0; i < size; i++) {
      const node = queue.pop();
      if (Math.abs(getDepth(node.right) - getDepth(node.left)) > 1) {
        return false;
      }
      if (node.left) queue.push(root.left);
      if (node.right) queue.push(root.right);
    }
  }
};
var getDepth = function (root) {
  const stack = [];
  let result = 0;
  let depth = 0;
  if (root !== null) stack.push(root);
  /* 使用栈，模拟后序遍历 */
  while (stack.length !== 0) {
    const topNode = stack[stack.length - 1];
    if (topNode !== null) {
      depth++;
      stack.push(null);
      if (topNode.right) stack.push(topNode.right);
      if (topNode.left) stack.push(topNode.left);
    } else {
      depth--;
      stack.pop();
      stack.pop();
    }
    result = depth > result ? depth : result;
  }
  return result;
};
