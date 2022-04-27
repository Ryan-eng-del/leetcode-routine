// 输入：height = [0,1,0,2,1,0,1,3,2,1,2,1]
// 输出：6

/* 双指针法 */
var trap = function (height) {
  let sum = 0;
  let leftMaxHeight;
  let rightMaxHeight;
  let h;
  /* 循环每根柱子，遍历到一根柱子就使用双指针来计算出该柱子左右两边最高的柱子 */
  for (let i = 0; i < height.length; i++) {
    if (i === 0 || i === height.length) continue;
    leftMaxHeight = height[i];
    rightMaxHeight = height[i];
    for (let j = i + 1; j < height.length; j++) {
      if (height[j] > rightMaxHeight) rightMaxHeight = height[j];
    }
    for (let k = i - 1; k >= 0; k--) {
      if (height[k] > leftMaxHeight) leftMaxHeight = height[k];
    }
    /* 每个柱子的装水量：短板效应 - 自身效应 （可以举例：柱子高度分别是： 3 1 2，中间柱子接雨水  Math.min(3, 2) - 1  = 1） */
    h = Math.min(leftMaxHeight, rightMaxHeight) - height[i];
    if (h > 0) sum += h;
  }
  return sum;
};

/* 动态规划 */
var trap = function (height) {
  let sum = 0;
  let leftMax = [];
  let rightMax = [];
  let count;
  leftMax[0] = height[0];
  rightMax[height.length - 1] = height[height.length - 1];
  /* 动态规划改进了双指针解法，数组保存了每一根柱子的左右最大高度值，避免了大量重复的计算 */
  for (let i = 1; i < height.length; i++) {
    leftMax[i] = Math.max(leftMax[i - 1], height[i]);
  }
  for (let j = height.length - 2; j > 0; j--) {
    rightMax[j] = Math.max(height[j], rightMax[j + 1]);
  }
  for (let k = 1; k < height.length - 1; k++) {
    /* 短板效应 - 自身效应 */
    count = Math.min(leftMax[k], rightMax[k]) - height[k];
    if (count > 0) {
      sum += count;
    }
  }
  return sum;
};

/* 单调栈 */
var trap = function (height) {
  if (height.length <= 2) return 0;
  const stack = [];
  let sum = 0;
  for (let i = 0; i < height.length; i++) {
    if (height[stack[stack.length - 1]] > height[i]) {
      stack.push(i);
    } else if (height[stack[stack.length - 1]] === height[i]) {
      stack.pop();
      stack.push(i);
    } else {
      while (stack.length !== 0 && height[stack[stack.length - 1]] < height[i]) {
        const mid = stack.pop();
        let w = i - stack[stack.length - 1] - 1;
        /* 短板效应 - 自身效应 */
        let h = Math.min(height[stack[stack.length - 1]], height[i]) - height[mid];
        if (w * h > 0) {
          sum += w * h;
        }
      }
      stack.push(i);
    }
  }
  return sum;
};
