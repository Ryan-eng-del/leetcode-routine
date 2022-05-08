// 669.修建二叉树
// 输入：root = [1,0,2], low = 1, high = 2
// 输出：[1,null,2]

/* 递归 */
var trimBST = function (root, low, high) {
  if (root === null) return null;
  /* 修建二叉树的逻辑：直接返回要删除节点的孩子给删除节点的父节点 */
  if (root.val > high) return trimBST(root.left, low, high);
  if (root.val < low) return trimBST(root.right, low, high);
  /* 遍历 */
  root.left = trimBST(root.left);
  root.right = trimBST(root.right);
  return root;
};

/* 迭代 */
var trimBST = function (root, low, high) {
  if (root === null) return root;
  /* 处理头节点 */
  while (root !== null && (root.val < low || root.val > high)) {
    if (root.val > high) root = root.left;
    else root = root.right;
  }
  /* 头节点处理完毕 */
  let cur = root;
  /* 处理头节点的左子树 */
  while (cur !== null) {
    while (cur.left !== null && cur.left.val < low) {
      /* 修剪 */
      cur.left = cur.left.right;
    }
    cur = cur.left;
  }
  /* 处理头节点的右子树 */
  cur = root;
  while (cur !== null) {
    while (cur.right !== null && cur.right.val > high) {
      /* 修剪 */
      cur.right = cur.right.left;
    }
    cur = cur.right;
  }
  return root;
};
