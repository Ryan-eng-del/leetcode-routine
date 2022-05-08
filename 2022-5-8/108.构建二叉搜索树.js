// 108.构建二叉搜索树
// 输入：root = [1,0,2], low = 1, high = 2
// 输出：[1,null,2]

/* 递归 */
var sortedArrayToBST = function (nums) {
  if (nums.length === 0) return nums;
  const traversal = (nums, left, right) => {
    if (left > right) return null;
    const mid = Math.floor(left + (right - left) / 2);
    const root = new TreeNode(nums[mid]);
    root.left = traversal(nums, left, mid - 1);
    root.right = traversal(nums, mid + 1, right);
    return root;
  };
  return traversal(nums, 0, nums.length - 1);
};

/* 迭代 */
var sortedArrayToBST = function (nums) {
  /* 存储节点的队列 */
  const nodeQueue = [];
  /* 存储左下标的队列 */
  const leftNode = [];
  /* 存储右下标的队列 */
  const rightNode = [];
  const root = new TreeNode(0);
  nodeQueue.push(root);
  leftNode.push(0);
  rightNode.push(nums.length - 1);
  while (nodeQueue.length !== 0) {
    /* 节点赋值 */
    const curNode = nodeQueue.shift();
    const left = leftNode.shift();
    const right = rightNode.shift();
    const mid = Math.floor(left + (right - left) / 2);
    curNode.val = nums[mid];
    /* 处理左区间 */
    if (left <= mid - 1) {
      curNode.left = new TreeNode(0);
      nodeQueue.push(curNode.left);
      leftNode.push(left);
      rightNode.push(mid - 1);
    }
    /* 处理右区间 */
    if (right >= mid + 1) {
      curNode.right = new TreeNode(0);
      nodeQueue.push(curNode.right);
      leftNode.push(mid + 1);
      rightNode.push(right);
    }
  }
  return root;
};
