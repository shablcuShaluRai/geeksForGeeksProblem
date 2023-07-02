// Implement queue using js

class Queue {
  constructor() {
    (this.items = {}), (this.count = 0);
    this.lowestCount = 0;
  }

  // Enqueue: It add new element back of th queue or it adds element in the beginning of the array
  // and returns length of the array
  enqueue(element) {
    this.items[this.count] = element;
    this.count++;
    return this.count;
  }
  // Dequeue: This methods removes first element from queue, it also return removed element

  dequeue() {
    if (this.isEmpty()) return undefined;
    const result = this.items[this.lowestCount];
    delete this.items[this.lowestCount];
    this.lowestCount++;
    return result;
  }

  // peek or front: this method returns first element in the queue

  peek() {
    if (this.isEmpty()) return undefined;
    return this.items[this.lowestCount];
  }

  // it returns true if there is no element in the queue otherwise returns false

  isEmpty() {
    return this.count - this.lowestCount === 0;
  }

  //size or length: returns number of elements in the queue

  size() {
    if (this.isEmpty()) return [];
    return this.count - this.lowestCount;
  }

  clear() {
    this.items = {};
    this.count = 0;
    this.lowestCount = 0;
  }

  toStrings() {
    if (this.isEmpty()) return "";
    let str = this.items[this.lowestCount];
    for (let i = this.lowestCount + 1; i < this.count; i++) {
      str = `${str}, ${this.items[i]}`;
    }
    return str;
  }
}

const queue = new Queue();
console.log("queue is empty", queue.isEmpty());
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(60);
// queue.clear();
queue.enqueue(80);
queue.enqueue(50);
console.log("dequeue", queue.dequeue());

console.log("queue", queue);
console.log("queue is empty", queue.isEmpty());
console.log("queue", queue.peek());
console.log("queue", queue.size());
console.log("queue toString", queue.toStrings());
