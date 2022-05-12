//39.组合总和
// 输入：candidates = [2, 3, 6, 7], target = 7
// 输出：[[2,2,3],[7]]
// 无重复元素

var combinationSum = function (candidates, target) {
  const path = [];
  const result = [];
  /* 排序 */
  candidates = candidates.sort((a, b) => a - b);
  const recursion = (candidates, target, index) => {
    /* 剪枝 */
    if (target < 0) return;
    if (target === 0) {
      result.push([...path]);
    }
    /* 剪枝，如果在当前层的某一次横向遍历target < 0，直接跳出该层 又因candiates数组由小到大排序 */
    for (let i = index; i < candidates.length && target - candidates[i] >= 0; i++) {
      const k = candidates[i];
      path.push(k);
      target -= k;
      /* 每个数字可以多次使用 */
      recursion(candidates, target, i);
      target += k;
      path.pop();
    }
  };
  recursion(candidates, target, 0);
  return result;
};
