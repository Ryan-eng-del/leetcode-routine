// 51 N皇后问题

// 输入：n = 4
// 输出：[[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]
// 解释：如上图所示，4 皇后问题存在两个不同的解法。

var solveNQueens = function (n) {
  /* map方法中的函数只会对数组被赋值的元素（包括undefined）进行调用，new Array是空数组，如果不赋值，则map无效 */
  const result = new Array(n).fill().map((v) => new Array(n).fill("."));
  const path = [];
  /* 检查改行该列是否可以拜访皇后 */
  const isValid = (row, col) => {
    /* 检查列 */
    for (let i = 0; i < row; i++) {
      if (result[i][col] === "Q") return false;
    }
    /* 检查左上方45度对角线 */
    for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
      if (result[i][j] === "Q") return false;
    }
    /* 检查右上方135度对角线 */
    for (let i = row - 1, j = col + 1; i >= 0 && j <= n; i--, j++) {
      if (result[i][j] === "Q") return false;
    }
    return true;
  };
  /* 将结果格式化 */
  const deepArray = (arr) => {
    const result = [];
    arr.forEach((v) => {
      let str = "";
      v.forEach((k) => {
        str += k;
      });
      result.push(str);
    });
    return result;
  };
  const recurision = (row) => {
    if (row >= n) {
      path.push(deepArray(result));
      return;
    }
    for (let col = 0; col < n; col++) {
      /* 从上到下，一行一行去下皇后 */
      if (isValid(row, col)) {
        result[row][col] = "Q";
        recurision(row + 1);
        result[row][col] = ".";
      }
    }
  };
  recurision(0);
  return path;
};
