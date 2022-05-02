// 114.中序和后序遍历构造一棵二叉树

// 输入：inorder = [9,3,15,20,7], postorder = [9,15,7,20,3]
// 输出：[3,9,20,null,null,15,7]

var buildTree = function (inorder, postorder) {
  if (postorder.length === 0) return null;
  /* 后序遍历的最后一个节点就是中间节点 */
  let nodeValue = postorder[postorder.length - 1];
  let root = new TreeNode(nodeValue);
  if (postorder.length === 1) return root;
  /* 找中序遍历的分割点 */
  let index = inorder.indexOf(nodeValue);
  /* 左闭右开分割中序遍历 */
  let leftInorder = inorder.slice(0, index);
  let rightInorder = inorder.slice(index + 1);
  /* 根据中序划分的左右区间来划分后序遍历 */
  let leftPostorder = postorder.slice(0, leftInorder.length);
  let rightPostorder = postorder.slice(leftPostorder.length, leftPostorder.length + rightInorder.length);
  /* 递归 */
  root.left = buildTree(leftInorder, leftPostorder);
  root.right = buildTree(rightInorder, rightPostorder);
  return root;
};
