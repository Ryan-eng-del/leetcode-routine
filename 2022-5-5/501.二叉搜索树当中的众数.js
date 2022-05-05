// 501.二叉搜索树当中的众数
// 输入：root = [1,null,2,2]
// 输出：[2]
/* 普遍解法, 也可以用于二叉搜索树*/
var findMode = function (root) {
  if (root === null) return root;
  /* map记录次数 */
  const map = new Map();
  const result = [];
  const inOrder = (root) => {
    if (root === null) return root;
    inOrder(root.left);
    let mapValue = map.get(root.val) || 0;
    map.set(root.val, mapValue + 1);
    inOrder(root.right);
  };
  inOrder(root);
  /* 排序 */
  const mapArr = [...map].sort((a, b) => b[1] - a[1]);
  const firstCount = mapArr[0][1];
  result.push(mapArr[0][0]);
  /* 多个众数的情况 */
  for (let i = 1; i < mapArr.length; i++) {
    if (mapArr[i][1] === firstCount) {
      result.push(mapArr[i][0]);
    }
  }
  return result;
};
/* 二叉搜索树利用中序遍历特点，利用pre指针来求众数 */
var findMode = function (root) {
  let pre = null;
  /* 统计次数*/
  let count = 0;
  /* 统计最大次数 */
  let maxCount = 0;
  /* 统计结果 */
  let result = [];
  const inOrder = (cur) => {
    if (cur === null) return cur;
    inOrder(cur.left);
    /* 第一个节点 */
    if (pre === null) {
      count = 1;
      /* 中序遍历与前一个节点的值相等*/
    } else if (pre.val === cur.val) {
      count++;
      /* 中序遍历与前一个结点的值不相等 */
    } else {
      count = 1;
    }
    /* 更新前一个节点 */
    pre = cur;
    /* 最大次数 */
    if (maxCount === count) {
      result.push(cur.val);
    }
    if (count > maxCount) {
      maxCount = count;
      result.length = 0;
      result.push(cur.val);
    }
    inOrder(cur.right);
    return;
  };
  inOrder(root);
  return result;
};
/* 迭代模拟中序遍历求众数，思路同上*/
var findMode = function (root) {
  let pre = null;
  let count = 0;
  let maxCount = 0;
  let cur = root;
  const result = [];
  const stack = [];
  while (stack.length !== 0 || cur !== null) {
    if (cur !== null) {
      stack.push(cur);
      cur = cur.left;
    } else {
      cur = stack.pop();
      if (pre === null) {
        count = 1;
      } else if (pre.val === cur.val) {
        count++;
      } else {
        count = 1;
      }
      if (maxCount === count) {
        result.push(cur.val);
      }
      if (maxCount < count) {
        maxCount = count;
        result.length = 0;
        result.push(cur.val);
      }
      pre = cur;
      cur = cur.right;
    }
  }
  return result;
};
