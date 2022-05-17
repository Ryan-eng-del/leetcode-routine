// 376.摆动序列
// 输入：nums = [1,7,4,9,2,5]
// 输出：6
// 解释：整个序列均为摆动序列，各元素之间的差值为 (6, -3, 5, -7, 3) 。

/* 贪心解法 */
var wiggleMaxLength = function (nums) {
  let result = 1;
  let curDiff = 0;
  let preDiff = 0;
  for (let i = 0; i < nums.length; i++) {
    curDiff = nums[i + 1] - nums[i];
    /* curdiff 为 0无法进入, preDiff只有第一次才为0, 才可以进入,去除重复元素的情况*/
    if ((curDiff > 0 && preDiff <= 0) || (curDiff < 0 && preDiff >= 0)) {
      result++;
      preDiff = curDiff;
    }
  }
  return result;
};
