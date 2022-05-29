// 134.加油站
/* 暴力解法 */
var canCompleteCircuit = function (gas, cost) {
  for (let i = 0; i < gas.length; i++) {
    let rest = gas[i] - cost[i];
    let index = (i + 1) % gas.length;
    while (rest > 0 && i !== index) {
      rest += gas[index] - cost[index];
      index = (index + 1) % gas.length;
    }
    if (rest >= 0 && index === i) return i;
  }
  return -1;
};

/* 贪心解法 一 */
var canCompleteCircuit1 = function (gas, cost) {
  let sum = 0;
  let min = Number.MAX_VALUE;
  for (let i = 0; i < gas.length; i++) {
    sum += gas[i] - cost[i];
    if (min > sum) {
      min = sum;
    }
  }
  /* 第一种情况：如果总消耗大于总补给，那么一定到达不了目的地 */
  if (sum < 0) return -1;
  /* 第二种情况：如果消耗和补给的差值的最小值还要大于0，那么从0出发，一定可以到达目的地 */
  if (min >= 0) return 0;
  /* 第三种情况：如果是非0出发，从后向前找，将最小差值可以弥补回来的就是起点 */
  for (let i = gas.length - 1; i >= 0; i--) {
    min += gas[i] - cost[i];
    if (min >= 0) return i;
  }
  return -1;
};

/* 贪心解法 2 */
var canCompleteCircuit2 = function (gas, cost) {
  let curCount = 0;
  let tatalCount = 0;
  let index = 0;
  for (let i = 0; i < gas.length; i++) {
    curCount += gas[i] - cost[i];
    tatalCount += gas[i] - cost[i];
    /* 如果当前消耗和补给差值小于零，说明 index 不可以在此 (i) 以及在此之前的索引为起点，并重置curCount， 将index 改为 i + 1 */
    if (curCount < 0) {
      index = i + 1;
      curCount = 0;
    }
  }
  if (tatalCount < 0) return -1;
  return index;
};
console.log(canCompleteCircuit2([1, 2, 3, 4, 5], [3, 4, 5, 1, 2]));
