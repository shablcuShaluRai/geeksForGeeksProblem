class Queue {
  constructor() {
    this.items = [];
    this.frontIndex = 0;
    this.rearIndex = 0;
  }

  enqueue(element) {
    this.items[this.rearIndex] = element;
    this.rearIndex++;
    return this.rearIndex;
  }

  isEmpty() {
    return this.frontIndex === this.rearIndex;
  }

  dequeue() {
    if (this.isEmpty()) return null;
    const removedElement = this.items[this.frontIndex];
    this.frontIndex++;
    return removedElement;
    ``;
  }
  front() {
    if (this.isEmpty()) return null;
    return this.items[this.frontIndex];
  }
  size() {
    return this.rearIndex - this.frontIndex;
  }

  print() {
    let result;
    for (let i = this.frontIndex; i < this.rearIndex; i++) {
      result += this.items[i] + ",";
    }
    return result;
  }
}

const queue = new Queue();
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
console.log("queue size", queue.size());
console.log("dequeue", queue.dequeue());
console.log("queue", queue);
console.log("queue", queue.print());
