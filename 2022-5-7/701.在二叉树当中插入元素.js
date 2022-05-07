// 701.在二叉树当中插入元素
// 输入：root = [4,2,7,1,3], val = 5
// 输出：[4,2,7,1,3,5]

/* 递归有返回值 */
var insertIntoBST = function (root, val) {
  if (root === null) {
    const node = new TreeNode(val);
    return node;
  }
  if (root.val > val) root.left = insertIntoBST(root.left, val);
  if (root.val < val) root.right = insertIntoBST(root.right, val);
  return root;
};

/* 递归无返回值 */
var insertIntoBST = function (root, val) {
  /* 记录父节点 */
  let parent = null;
  if (root === null) {
    return new TreeNode(val);
  }
  const traversal = (cur, val) => {
    if (cur === null) {
      const node = new TreeNode(val);
      if (val > parent.val) parent.right = node;
      if (val < parent.val) parent.left = node;
      return;
    }
    parent = cur;
    if (cur.val > val) traversal(cur.left, val);
    if (cur.val < val) traversal(cur.right, val);
    return;
  };
  traversal(root, val);
  return root;
};

/* 迭代 */
var insertIntoBST = function (root, val) {
  const node = new TreeNode(val);
  if (root === null) {
    return node;
  }
  /* 记录父节点 */
  const parent = null;
  const cur = root;
  while (cur !== null) {
    parent = cur;
    if (cur.val > val) cur = cur.left;
    else cur = cur.right;
  }
  if (val > parent.val) parent.right = node;
  if (val < parent.val) parent.left = node;
  return root;
};
