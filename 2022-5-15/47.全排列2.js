// 47.全排列
// nums当中有重复元素
// 输入：nums = [1,1,2]
// 输出：
// [[1,1,2],
//  [1,2,1],
//  [2,1,1]]

var permuteUnique = function (nums) {
  const path = [];
  const result = [];
  const used = new Array(nums.length).fill(false);
  nums = nums.sort((a, b) => a - b);
  const recursion = (used) => {
    if (path.length === nums.length) {
      result.push([...path]);
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      /* 树层去重 */
      if (i > 0 && nums[i - 1] === nums[i] && used[i - 1] === false) continue;
      /* 树枝去重 */
      if (used[i] === true) continue;
      used[i] = true;
      path.push(nums[i]);
      recursion(used);
      used[i] = false;
      path.pop();
    }
  };
  recursion(used);
  return result;
};
