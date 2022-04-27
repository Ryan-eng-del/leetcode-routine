// > 输入: nums = [1,1,1,2,2,3], k = 2
// > 输出: [1,2]

var topKFrequent = function (nums, k) {
  const queue = new PriorityQueue((a, b) => a[1] - b[1]);
  const map = new Map();
  const result = [];
  /* map统计元素出现次数 */
  for (const num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }
  /* 使得小顶堆中一直保持出现频率最高的k个元素 */
  for (const entry of map) {
    queue.push(entry);
    if (queue.getSize() > k) {
      queue.pop();
    }
  }
  /* 弹出小顶堆剩下的出现频率最高的k个元素 */
  for (let i = k - 1; i >= 0; i--) {
    result[i] = queue.pop()[0];
  }
  return result;
};
/* 实现小顶堆 */
class PriorityQueue {
  constructor(fn) {
    /* 堆的本质就是使用数组来表示一颗完全二叉树 */
    this.queue = [];
    /* 比较器 */
    this.comparator = fn;
  }
  compare(a, b) {
    if (this.queue[b] === undefined) {
      return -1;
    }
    if (this.queue[a] === undefined) {
      return 1;
    }
    return this.comparator(this.queue[a], this.queue[b]);
  }
  push(val) {
    this.queue.push(val);
    let index = this.queue.length - 1;
    let parent = Math.floor((index - 1) / 2);
    while (parent >= 0 && this.compare(parent, index) > 0) {
      [this.queue[parent], this.queue[index]] = [this.queue[index], this.queue[parent]];
      index = parent;
      parent = Math.floor((index - 1) / 2);
    }
  }
  pop() {
    let oldEntry = this.queue[0];
    this.queue[0] = this.queue.pop();
    let index = 0;
    let left = 2 * index + 1;
    let selectChild = this.compare(left, left + 1) > 0 ? left + 1 : left;
    while (selectChild !== undefined && this.compare(index, selectChild) > 0) {
      [this.queue[selectChild], this.queue[index]] = [this.queue[index], this.queue[selectChild]];
      index = selectChild;
      left = 2 * index + 1;
      selectChild = this.compare(left, left + 1) > 0 ? left + 1 : left;
    }
    return oldEntry;
  }
  getSize() {
    return this.queue.length;
  }
}

