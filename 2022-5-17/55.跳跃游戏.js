// 55.跳跃游戏

// 输入：nums = [2,3,1,1,4]
// 输出：true

var canJump = function (nums) {
  if (nums.length === 1) return true;
  let cover = 0;
  for (let i = 0; i <= cover; i++) {
    cover = Math.max(nums[i] + i, cover);
    if (cover >= nums.length - 1) return true;
  }
  return false;
};
