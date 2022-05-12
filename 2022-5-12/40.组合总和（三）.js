//40.组合总和
// 输入: candidates = [10,1,2,7,6,1,5], target = 8,
// 输出:
// [
// [1,1,6],
// [1,2,5],
// [1,7],
// [2,6]
// ]
// 有重复元素
var combinationSum2 = function (candidates, target) {
  const path = [];
  const result = [];
  candidates = candidates.sort((a, b) => a - b);
  const l = candidates.length;
  const used = new Array(l).fill(false);
  const recursion = (candidates, index, used) => {
    /* 剪枝 */
    if (target < 0) return;
    if (target === 0) {
      result.push([...path]);
      return;
    }
    /* 剪枝 */
    for (let i = index; i < candidates.length && target - candidates[i] >= 0; i++) {
      /* 树层去重，树枝不去重 */
      if (i > 0 && candidates[i - 1] === candidates[i] && used[i - 1] === false) continue;
      const k = candidates[i];
      path.push(k);
      target -= k;
      used[i] = true;
      /* 每个数字不可以多次使用 */
      recursion(candidates, i + 1, used);
      target += k;
      path.pop();
      used[i] = false;
    }
  };
  recursion(candidates, 0, used);
  return result;
};
