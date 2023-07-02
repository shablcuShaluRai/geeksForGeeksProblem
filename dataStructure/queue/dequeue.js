// implement dequeue: dequeue is also known as double ended queue
// it allows adding and removing element from both ends

class Dequeue {
  constructor() {
    this.items = {};
    this.count = 0;
    this.lowestCount = 0;
  }
  // this methods adds element from the front of dequeue
  addFront(element) {
    if (this.isEmpty()) {
      this.addBack(element);
    } else if (this.lowestCount > 0) {
      this.lowestCount--;
      this.items[this.lowestCount] = element;
    } else {
      for (let i = this.count; i > 0; i--) {
        this.items[i] = this.items[i - 1];
      }
      this.count++;
      this.lowestCount = 0;
      this.items[0] = element;
      return this.count;
    }
  }
  // this methods adds elements from the rear of dequeue
  addBack(element) {
    this.items[this.count] = element;
    this.count++;
    return this.count;
  }

  //removeFront: remove first element from dequeue, and returns removed element
  removeFront() {
    if (this.isEmpty()) return undefined;
    const result = this.items[this.lowestCount];
    delete this.items[this.lowestCount];
    this.lowestCount++;
    return result;
  }

  //remove back: it removes element from the back of queue

  removeBack() {
    if (this.isEmpty()) {
      return undefined;
    }
    this.count--;
    const result = this.items[this.count];
    delete this.items[this.count];
    return result;
  }
  // return first element from front of the dequeue
  peekFront() {
    if (this.isEmpty()) return undefined;
    return this.items[this.lowestCount];
  }

  // return last element fo dequeue

  peekBack() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.count - 1];
  }

  isEmpty() {
    return this.count - this.lowestCount === 0;
  }
}

const dequeue = new Dequeue();
dequeue.addFront(20);
dequeue.addFront(60);
dequeue.addBack(30);
dequeue.addBack(40);
dequeue.addFront(50);
dequeue.addFront(150);
dequeue.addFront(90);
dequeue.addBack(350);
console.log("dequeue", dequeue.peekBack());
console.log("dequeue", dequeue.peekFront());
console.log("dequeue", dequeue.removeBack());
console.log("dequeue", dequeue.removeFront());
console.log("dequeue", dequeue);
