// 111.二叉树的最小深度
// 输入：root = [3,9,20,null,null,15,7]
// 输出：2

/* 递归 */
var minDepth = function (root) {
  if (root === null) return 0;
  /* 后序遍历 */
  let leftDepth = minDepth(root.left);
  let rightDepth = minDepth(root.right);
  /* 不是最小深度， 非叶子节点 */
  if (root.left === null && root.right !== null) return rightDepth + 1;
  /* 不是最小深度   非叶子节点*/
  if (root.right === null && root.left !== null) return leftDepth + 1;
  return Math.min(leftDepth, rightDepth) + 1;
};

/* 迭代 层序遍历模板*/
var minDepth = function (root) {
  if (root === null) return 0;
  const queue = [];
  let depth = 0;
  queue.push(root);
  while (queue.length !== 0) {
    depth++;
    let size = queue.length;
    for (let i = 0; i < size; i++) {
      const node = queue.shift();
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
      if (node.left === null && node.right === null) {
        return depth;
      }
    }
  }
  return depth;
};
