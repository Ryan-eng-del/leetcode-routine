// 93. 复原IP地址
var restoreIpAddresses = function (s) {
  const result = [];
  const path = [];
  function recursion(i) {
    if (path.length > 4) return;
    /* i以及遍历完字符串，且字符串并分成4份 */
    if (path.length === 4 && i === s.length) {
      result.push(path.join("."));
      return;
    }
    for (let j = i; j < s.length; j++) {
      const str = s.substr(i, j - i + 1);
      /* 有前导0，跳过本层循环 */

      if (str.length > 1 && str[0] === "0") break;
      /* str > 255 或者 以及超过4位数，跳出本层循环 */
      if (str.length > 3 || +str > 255) break;
      path.push(str);
      recursion(j + 1);
      path.pop();
    }
  }
  recursion(0);
  return result;
};
console.log(restoreIpAddresses("25525511135"));
