// 53.最大子数组的和
// 暴力解法  (超出时间限制)
var maxSubArray = function (nums) {
  let sum = 0;
  /* 注意JavaScript当中的Number.MIN_VALUE > 0,所以使用最大数的负数作为最小数 */
  let result = -Number.MAX_VALUE;
  for (let i = 0; i < nums.length; i++) {
    sum = 0;
    for (let j = i; j < nums.length; j++) {
      sum += nums[j];
      result = result < sum ? sum : result;
    }
  }
  return result;
};
// 贪心解法
let maxSubArray1 = function (nums) {
  /* 注意JavaScript当中的Number.MIN_VALUE > 0,所以使用最大数的负数作为最小数 */
  let result = -Number.MAX_VALUE;
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    count += nums[i];
    if (count > result) {
      result = count;
    }

    if (count <= 0) count = 0;
  }
  return result;
};
console.log(Number.MAX_VALUE);
