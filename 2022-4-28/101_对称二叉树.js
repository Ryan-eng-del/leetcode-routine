//  101. 对称二叉树
// 输入：root = [1,2,2,3,4,4,3]
// 输出：true

/* 递归解法 */
var isSymmetric = function (root) {
  if (root === null) return true;
  return compare(root.left, root.right);
};
var compare = function (left, right) {
  /* 先判断为空的情况，避免空指针问题 */
  if (left === null && right === null) {
    return true;
  } else if (left === null && right !== null) {
    return false;
  } else if (left !== null && right === null) {
    return false;
  } else if (left.val !== right.val) {
    return false;
  }
  /* 先比较内侧 */
  const outSide = compare(left.left, right.right);
  /* 在比较外侧 */
  const isSide = compare(left.right, right.left);
  /* 内测和外侧相等才算对称 */
  const isSame = outSide && isSide;
  return isSame;
};

/* 迭代解法 */
/* 使用队列 */
var isSymmetric = function (root) {
  if (root === null) return root;
  /* 队列存储每一层的节点，如果是对称的，每弹出的两个就是相同的 */
  const queue = [];
  queue.push(root.left, root.right);
  while (queue.length != 0) {
    const leftNode = queue.shift();
    const rightNode = queue.shift();
    if (leftNode === null && rightNode === null) continue;
    if (leftNode === null || rightNode === null || leftNode.val !== rightNode.val) return false;
    queue.push(leftNode.left, rightNode.right, leftNode.right, rightNode.left);
  }
  return true;
};
