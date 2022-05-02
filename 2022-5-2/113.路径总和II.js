// 113.路径总和 II

// 输入：root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22
// 输出：[[5,4,11,2],[5,8,4,5]]

const path = [];
const result = [];
var pathSum = function (root, targetSum) {
  if (root === null) return result;
  /* 清空数组缓存 */
  path.length = 0;
  result.length = 0;
  path.push(root.val);
  traversal(root, targetSum - root.val);
  return result;
};
var traversal = function (root, targetSum) {
  if (root.left === null && root.right === null && targetSum === 0) {
    /* 注意引用类型需要展开添加 */
    result.push([...path]);
    return;
  }
  if (root.left === null && root.right === null) return;
  if (root.left) {
    path.push(root.left.val);
    targetSum -= root.left.val;
    /* 递归 */
    traversal(root.left, targetSum);
    /* 回溯 */
    targetSum += root.left.val;
    path.pop();
  }
  if (root.right) {
    path.push(root.right.val);
    targetSum -= root.right.val;
    /* 递归 */
    traversal(root.right, targetSum);
    /* 回溯 */
    targetSum += root.right.val;
    path.pop();
  }
  return;
};
