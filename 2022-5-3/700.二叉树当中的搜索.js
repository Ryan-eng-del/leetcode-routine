// 700.二叉树当中的搜索
// 输入：root = [4,2,7,1,3], val = 2
// 输出：[2,1,3]

/* 递归 */
var searchBST = function (root, val) {
  if (root === null || root.val === val) return root;
  if (root.val > val) return searchBST(root.left, val);
  if (root.val < val) return searchBST(root.right, val);
  return null;
};
/* 迭代 */
var searchBST = function (root, val) {
  while (root != null) {
    if (root.val === val) return root;
    else if (root.val > val) root = root.left;
    else root = root.right;
  }
  return null;
};
