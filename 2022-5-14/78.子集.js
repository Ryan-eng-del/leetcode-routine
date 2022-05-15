// 78.子集
// 输入：nums = [1,2,3]
// 输出：[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
/* nums不能有重复元素 */
var subsets = function (nums) {
  const path = [];
  const result = [];
  const recursion = (start) => {
    /* 这里要在判断返回逻辑之外且 >= 之前加，防止漏掉最后一层，如果 >，可以放在之后 */
    result.push([...path]);
    if (start >= nums.length) return;
    for (let i = start; i < nums.length; i++) {
      path.push(nums[i]);
      recursion(i + 1);
      path.pop();
    }
  };
  recursion(0);
  return result;
};
console.log(subsets([1, 2, 3]));
