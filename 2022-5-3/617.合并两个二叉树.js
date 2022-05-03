// 700.合并两个二叉树
// 输入：root1 = [1,3,2,5]
// root2 = [2, 1, 3, null, 4, null, 7]
// 输出：[3,4,5,5,4,null,7]

/*  递归修改树结构 */
var mergeTrees = function (root1, root2) {
  if (root1 === null) return root2;
  if (root2 === null) return root1;
  root1.val += root2.val;
  root1.left = mergeTrees(root1.left, root2.left);
  root1.right = mergeTrees(root1.right, root2.right);
  return root1;
};
/* 递归不修改树结构 */
var mergeTrees = function (root1, root2) {
  if (root1 === null) return root2;
  if (root2 === null) return root1;
  const root = new TreeNode(0);
  root.val = root1.val + root2.val;
  root.left = mergeTrees(root1.left, root2.left);
  root.right = mergeTrees(root1.right, root2.right);
  return root;
};
/* 迭代解法 */
var mergeTrees = function (root1, root2) {
  if (root1 === null) return root2;
  if (root2 === null) return root1;
  const queue = [];
  queue.push(root1);
  queue.push(root2);
  while (queue.length !== 0) {
    const root1 = queue.shift();
    const root2 = queue.shift();
    root1.val += root2.val;
    if (root1.left != null && root2.left != null) {
      queue.push(root1.left);
      queue.push(root2.left);
    }
    if (root1.right != null && root2.right != null) {
      queue.push(root1.right);
      queue.push(root2.right);
    }
    if (root1.right === null && root2.right !== nulll) {
      root1.right = roo2.right;
    }
    if (root1.left === null && root2.left !== nulll) {
      root1.left = roo2.left;
    }
  }
  return root1;
};
