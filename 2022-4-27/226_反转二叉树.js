// 226.反转二叉树
// 输入：root = [4,2,7,1,3,6,9]
// 输出：[4,7,2,9,6,3,1]

/* 递归 - 前序遍历反转二叉树 */
var invertTree = function (root) {
  if (root == null) return [];
  const temp = root.left;
  root.left = root.right;
  root.right = temp;
  invertTree(root.left);
  invertTree(root.right);
  return root;
};
/* 迭代 - 层序遍历反转二叉树 */
var invertTree = function (root) {
  if (root === null) return root;
  const queue = [];
  let cur;
  let temp;
  queue.push(root);
  while (queue.length !== 0) {
    let length = queue.length;
    for (let i = 0; i < length; i++) {
      cur = queue.shift();
      temp = cur.left;
      cur.left = cur.right;
      cur.right = temp;
      if (cur.left) queue.push(cur.left);
      if (cur.right) queue.push(cur.right);
    }
  }
  return root;
};
/* 迭代 - 二叉树的前序遍历反转二叉树 */
var invertTree = function (root) {
  if (root === null) return [];
  const stack = [];
  let cur;
  stack.push(root);
  while (stack.length !== 0) {
    cur = stack.pop();
    temp = cur.left;
    cur.left = cur.right;
    cur.right = temp;
    if (cur.left) stack.push(cur.right);
    if (cur.right) stack.push(cur.left);
  }
  return root;
};
