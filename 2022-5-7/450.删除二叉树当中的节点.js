// 450.删除二叉树当中的节点
// 输入: root = [5,3,6,2,4,null,7], key = 0
// 输出: [5,3,6,2,4,null,7]
// 解释: 二叉树不包含值为 0 的节点

/* 递归 -五种情况 */
var deleteNode = function (root, val) {
  /* 情况1：没找到删除节点，返回空 */
  if (root === null) return root;
  if (root.val === val) {
    /* 情况2：左右节点都为空 */
    /* 情况3：只有左节点为空，右节点补位 */
    if (root.left === null) return root.right;
    /* 情况4：只有右节点为空，左节点补位 */ else if (root.right === null) return root.left;
    /* 情况5：左右节点都不为空，则将删除节点的左子树，放在删除节点中序遍历的后继节点的左孩子,返回删除节点的右子树 */ else {
      /* 寻找后继节点，右左左左左…… */
      let node = root.right;
      while (node.left !== null) {
        node = node.left;
      }
      let rootLeft = root.left;
      root.left = null;
      node.left = rootLeft;
      return root.right;
    }
  }
  if (root.val > val) root.left = deleteNode(root.left, val);
  if (root.val < val) root.right = deleteNode(root.right, val);
  return root;
};
