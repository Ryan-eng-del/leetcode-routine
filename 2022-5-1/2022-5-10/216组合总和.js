// 216组合总和
// 输入: k = 3, n = 7
// 输出: [[1,2,4]]

/* 回溯 非剪枝 */
var combinationSum3 = function (k, n) {
  const path = [];
  const result = [];
  const recursion = (k, n, sum, startIndex) => {
    if (path.length === k) {
      if (sum === n) result.push([...path]);
      return;
    }
    for (let i = startIndex; i <= 9; i++) {
      sum += i;
      path.push(i);
      recursion(k, n, sum, i + 1);
      sum -= i;
      path.pop(i);
    }
  };
  recursion(k, n, 0, 1);
  return result;
};

/* 回溯， 剪枝 */

var combinationSum3 = function (k, n) {
  const path = [];
  const result = [];
  const recursion = (k, n, sum, startIndex) => {
    if (path.length === k) {
      if (sum === n) result.push([...path]);
      return;
    }
    /* 剪枝 */
    for (let i = startIndex; i <= 9 - (k - path.length) + 1; i++) {
      /* 剪枝 */
      if (sum === n) return;
      sum += i;
      path.push(i);
      /* 剪枝不可以放在这里，会缺少一层的遍历 */
      recursion(k, n, sum, i + 1);
      sum -= i;
      path.pop(i);
    }
  };
  recursion(k, n, 0, 1);
  return result;
};
