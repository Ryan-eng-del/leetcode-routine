// 46.全排列
// nums当中没有重复元素
// 输入：nums = [1,2,3]
// 输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

var permute = function (nums) {
  const path = [];
  const result = [];
  const used = new Array(nums.length).fill(false);
  const recursion = (used) => {
    if (path.length === nums.length) {
      result.push([...path]);
    }
    for (let i = 0; i < nums.length; i++) {
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
console.log(permute([1, 2, 3]));
