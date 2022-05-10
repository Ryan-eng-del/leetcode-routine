// 77.组合
// 输入：n = 4, k = 2
// 输出：
// [
//   [2,4],
//   [3,4],
//   [2,3],
//   [1,2],
//   [1,3],
//   [1,4],
// ]

/* 回溯，非剪枝 */
var combine = function (n, k) {
  const path = [];
  const result = [];
  const recursion = (n, k, startIndex) => {
    if (path.length === k) {
      result.push([...path]);
      return;
    }
    /* for循环，横向遍历 [1,] [2,] [3.] [4.*/
    for (let i = startIndex; i <= n; i++) {
      path.push(i);
      /* 递归，纵向遍历 (层) [1,2] [1,3] [1,4] [1,5]*/
      recursion(n, k, i + 1);
      path.pop();
    }
  };
  recursion(n, k, 1);
  return result;
};

/* 回溯 剪枝 */
var combine = function (n, k) {
  const path = [];
  const result = [];
  const recursion = (n, k, startIndex) => {
    if (path.length === k) {
      result.push([...path]);
      return;
    }
    /* 剪枝 (n - i) + 1 >= k - path.length, 确保横向或者纵向遍历的区间元素，足够 path还需要的元素个数 */
    for (let i = startIndex; i <= n - (k - path.length) + 1; i++) {
      path.push(i);
      recursion(n, k, startIndex);
      path.pop();
    }
  };
  recursion(n, k, 1);
  return result;
};
