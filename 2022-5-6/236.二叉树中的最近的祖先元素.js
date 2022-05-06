// 236.二叉树当中最近的祖先元素

/* 递归后序遍历 */
var lowestCommonAncestor = function (root, p, q) {
  if (root === p || root === q || root === null) return root;
  const left = lowestCommonAncestor(root.left, p, q);
  const right = lowestCommonAncestor(root.right, p, q);
  if (left === null && right !== null) return right;
  else if (left !== null && right === null) return left;
  else if (left !== null && right !== null) return root;
  else return null;
};
