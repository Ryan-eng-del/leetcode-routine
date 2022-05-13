// 131.分割字符串
// 输入：s = "aab"
// 输出：[["a","a","b"],["aa","b"]]

var partition = function (s) {
  const path = [];
  const result = [];
  /* 双指针 判断是否为回文字符串 */
  const isPalindrome = (s, startIndex, i) => {
    let first = startIndex;
    let end = i;
    for (; first < end; first++, end--) {
      if (s[first] !== s[end]) return false;
    }
    return true;
  };
  const recursion = (s, startIndex) => {
    if (startIndex >= s.length) {
      result.push([...path]);
      return;
    }
    /* 横向遍历从 startIndex 到 本次的i 来切割*/
    for (let i = startIndex; i < s.length; i++) {
      /* 判断s 从 startIndex 到 本次的i 是否为回文字符串 */
      if (isPalindrome(s, startIndex, i)) {
        path.push(s.substr(startIndex, i - startIndex + 1));
        /* 如果不是就跳过本层的本次循环，也不在进行纵向切割 */
      } else continue;
      /* 纵向遍历进行切割 */
      recursion(s, i + 1);
      path.pop();
    }
  };
  recursion(s, 0);
  return result;
};
