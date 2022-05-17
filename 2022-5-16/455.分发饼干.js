// 455.分发饼干
var findContentChildren = function (g, s) {
  // g小孩的胃口
  g = g.sort((a, b) => a - b);
  // s饼干
  s = s.sort((a, b) => a - b);
  //贪心算法：将较多的饼干，分给胃口较大的小孩
  let index = s.length - 1;
  let result = 0;
  for (let i = g.length - 1; i >= 0; i--) {
    if (index >= 0 && s[index] >= g[i]) {
      index--;
      result++;
    }
  }
  return result;
};

console.log(findContentChildren([10, 9, 8, 7], [5, 6, 7, 8]));
