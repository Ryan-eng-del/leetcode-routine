// 二叉树的层序遍历
// 输入：root = [3,9,20,null,null,15,7]
// 输出：[[3],[9,20],[15,7]]

var levelOrder = function (root) {
  if (root == null) return [];
  /* 队列 */
  const queue = [];
  /* 结果数组 */
  const result = [];
  /* 每一层的结果数组 */
  let level = [];
  /* 数组pop的节点指针 */
  let cur;
  /* 每一层的数量 */
  let size = 0;
  queue.push(root);
  while (queue.length != 0) {
    size = queue.length;
    level = [];
    for (let i = 0; i < size; i++) {
      cur = queue.shift();
      level.push(cur.val);
      if (cur.left) queue.push(cur.left);
      if (cur.right) queue.push(cur.right);
    }
    result.push(level);
  }
  return result;
};
