// 235.二叉搜索树当中最近的祖先元素
// 输入: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
// 输出: 6
// 解释: 节点 2 和节点 8 的最近公共祖先是 6。

/* 递归后序遍历遍历整棵树，适用于二叉搜索树和普通二叉树 */
var lowestCommonAncestor = function (root, p, q) {
  if (root === p || root === q || root === null) return root;
  const left = lowestCommonAncestor(root.left, p, q);
  const right = lowestCommonAncestor(root.right, p, q);
  if (left === null && right !== null) return right;
  else if (left !== null && right === null) return left;
  else if (left !== null && right !== null) return root;
  else return null;
};

/* 按照搜索树特性来递归二叉搜索树 */
var lowestCommonAncestor = function (root, p, q) {
  if (root === null) return root;
  if (root.val > p.val && root.val > q.val) {
    const left = lowestCommonAncestor(root.left, p, q);
    if (left !== null) return left;
  }
  if (root.val < p.val && root.val < q.val) {
    const right = lowestCommonAncestor(root.right, p, q);
    if (right !== null) return right;
  }
  return root;
};

/* 迭代  二叉搜索树 */
var lowestCommonAncestor = function (root, p, q) {
  while (root !== null) {
    if (root.val > p.val && root.val > q.val) {
      root = root.left;
    } else if (root.val < p.val && root.val < q.val) {
      root = root.right;
    } else {
      return root;
    }
  }
};
