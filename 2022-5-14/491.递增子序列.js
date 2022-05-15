// 491.递增子序列
// 输入：nums = [4,6,7,7]
// 输出：[[4,6],[4,6,7],[4,6,7,7],[4,7],[4,7,7],[6,7],[6,7,7],[7,7]]

var findSubsequences = function (nums) {
  const path = [];
  const result = [];
  const recursion = (start) => {
    if (path.length > 1) result.push([...path]);
    /* 建立每一层的set */
    const set = new Set();
    for (let i = start; i < nums.length; i++) {
      if ((path.length > 0 && nums[i] < path[path.length - 1]) || set.has(nums[i])) continue;
      path.push(nums[i]);
      set.add(nums[i]);
      recursion(i + 1);
      path.pop();
    }
  };
  recursion(0);
  return result;
};
console.log(findSubsequences([4, 6, 7, 7]));
