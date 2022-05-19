// 122.买卖股票的最佳时机

// 输入：prices = [7,1,5,3,6,4]
// 输出：7

var maxProfit = function (prices) {
  let result = 0;
  for (let i = 0; i < prices.length - 1; i++) {
    const profit = prices[i + 1] - prices[i];
    result += Math.max(0, profit);
  }
  return result;
};
console.log(maxProfit([1, 2, 3, 4, 5]));
