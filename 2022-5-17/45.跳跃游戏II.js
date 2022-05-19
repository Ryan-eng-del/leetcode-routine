//45.跳跃游戏II

// 输入: nums = [2,3,1,1,4]
// 输出: 2;

/* 版本1 */
var jump = function (nums) {
  let curDistance = 0;
  let nextDistance = 0;
  let ans = 0;
  for (let i = 0; i < nums.length; i++) {
    nextDistance = Math.max(nextDistance, nums[i] + i);
    if (curDistance === i) {
      if (curDistance !== nums.length - 1) {
        ans++;
        curDistance = nextDistance;
        if (curDistance >= nums.length - 1) break;
      } else break;
    }
  }
  return ans;
};
console.log(jump([2, 3, 1, 1, 4]));

/* 版本2 将版本1的特殊情况进行统一 */
var jump = function (nums) {
  let curDistance = 0;
  let nextDistance = 0;
  let ans = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    nextDistance = Math.max(nextDistance, nums[i] + i);
    if (i === curDistance) {
      ans++;
      curDistance = nextDistance;
      if (curDistance >= nums.length - 1) break;
    }
  }
  return ans;
};
console.log(jump([2, 3, 1, 1, 4]));
