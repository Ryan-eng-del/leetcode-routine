// 530. 二叉搜索树的最小差值
// 输入：root = [4,2,6,1,3]
// 输出：1

/* 中序遍历为数组求差值 */
var getMinimumDifference = function (root) {
  const result = [];
  traversal(root, result);
  let minValue = Number.MAX_VALUE;
  for (let i = 1; i < result.length; i++) {
    let value = result[i] - result[i - 1];
    minValue = Math.min(value, minValue);
  }
};
var traversal = function (root, result) {
  if (root === null) return root;
  traversal(root.left);
  result.push(root.val);
  traversal(root.right);
};
/* 中序遍历存取pre求差值 */
var getMinimumDifference = function (root) {
  let preNode = null;
  let minValue = Number.MAX_VALUE;
  const inorder = function (root) {
    if (root === null) return root;
    inorder(root.left);
    if (preNode !== null) {
      minValue = Math.min(root.val - preNode.val, minValue);
    }
    preNode = root;
    inorder(root.right);
  };
  inorder(root);
  return minValue;
};
/* 迭代 - 模拟中序遍历求差值 */
var getMinimumDifference = function (root) {
  const stack = [];
  let result = Number.MAX_VALUE;
  let cur = root;
  while (stack.length !== 0 || cur !== null) {
    if (cur !== null) {
      /* 左 */
      stack.push(cur);
      cur = cur.left;
    } else {
      cur = stack.pop();
      /* 中 */
      if (pre !== null) {
        result = Math.min(result, cur.val - pre.val);
      }
      pre = cur;
      /* 右 */
      cur = cur.right;
    }
  }
  return result;
};
