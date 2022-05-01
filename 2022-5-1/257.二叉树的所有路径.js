// 257 二叉树的所有路径
// 输入：root = [1,2,3,null,5]
// 输出：["1->2->5","1->3"]

/* 递归 */
var binaryTreePaths = function (root) {
  if (root === null) return root;
  const result = [];
  const path = [];
  traversal(root, path, result);
  return result;
};
var traversal = function (root, path, result) {
  path.push(root.val);
  if (root.left === null && root.right === null) {
    let str = "";
    path.forEach((item, index) => {
      if (index !== path.length - 1) {
        str += item + "->";
      } else {
        str += item;
      }
    });
    result.push(str);
    return;
  }
  if (root.left) {
    /* 递归 */
    traversal(root.left, path, result);
    /* 回溯 */
    path.pop();
  }
  if (root.right) {
    /* 递归 */
    traversal(root.right, path, result);
    /* 回溯 */
    path.pop();
  }
};

/* 迭代 */
var binaryTreePaths = function (root) {
  if (root === null) return root;
  /* 保存遍历的树节点 */
  const stack = [];
  /* 保存树的路径结果 */
  const result = [];
  /* 保存树的路径集合 */
  const path = [];
  stack.push(root);
  /* 注意 [1] -> ['1']*/
  path.push(root.val + "");
  while (stack.length !== 0) {
    const node = stack.pop();
    let pathStr = path.pop();
    if (node.left === null && node.right === null) {
      result.push(pathStr);
    }
    if (node.right) {
      stack.push(node.right);
      path.push(pathStr + "->" + node.right.val);
    }
    if (node.left) {
      stack.push(node.left);
      path.push(pathStr + "->" + node.left.val);
    }
  }
  return result;
};
