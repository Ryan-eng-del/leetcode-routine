// 90.子集 II

/* nums可以有重复元素 */
var subsetsWithDup = function (nums) {
  const path = [];
  const result = [];
  const used = new Array().fill(false);
  /* 注意去重前，先要对数组进行排序，这样数组当中相等的两个元素才是挨在一起的 */
  nums = nums.sort((a, b) => a - b);
  const recursion = (start, used) => {
    result.push([...path]);
    if (start >= nums.length) return;
    for (let i = start; i < nums.length; i++) {
      /* 去重 */
      if (i > 0 && used[i - 1] === false && nums[i] === nums[i - 1]) continue;
      path.push(nums[i]);
      used[i] = true;
      recursion(i + 1, used);
      used[i] = false;
      path.pop();
    }
  };
  recursion(0, used);
  return result;
};
