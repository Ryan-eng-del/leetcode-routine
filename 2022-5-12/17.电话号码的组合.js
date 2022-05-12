// 17.电话号码的组合
// 输入：digits = "23"
// 输出：["ad","ae","af","bd","be","bf","cd","ce","cf"]

var letterCombinations = function (digits) {
  const map = ["", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];
  const result = [];
  const path = [];
  const k = digits.length;
  if (!k) return result;
  if (k === 1) return map[digits].split("");
  const recursion = (index) => {
    if (path.length === k) {
      result.push(path.join(""));
      return;
    }
    for (const v of map[digits[index]]) {
      path.push(v);
      recursion(index + 1);
      path.pop();
    }
  };
  recursion(0);
  return result;
};
