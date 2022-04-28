// 104. 二叉树的最大深度

/* 递归 */
var maxDepth = function (root) {
  if (root === null) return 0;
  let leftDeep = maxDepth(root.left);
  let rightDeep = maxDepth(root.right);
  return 1 + Math.max(leftDeep, rightDeep);
};

/* 迭代 - 层序遍历模板计算最大深度 */
var maxDepth = function (root) {
  if (root === null) return 0;
  const queue = [];
  let node = null;
  let size;
  let depth = 0;
  queue.push(root);
  while (queue.length !== 0) {
    size = queue.length;
    depth++;
    for (let i = 0; i < size; i++) {
      node = queue.shift();
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }
  return depth;
};
