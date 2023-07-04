const Node = require("./node");
class SingleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  enqueue(item) {
    this.length++;
    if (!this.tail) {
      this.tail = this.head = new Node(item);
      return;
    }
    this.tail.next = new Node(item);
    this.tail = new Node(item);
  }

  dequeue() {
    if (!this.head) return null;
    this.length--;
    const head = this.head;
    this.head = this.head.next;
    head.next = null;
    return head.value;
  }

  peek() {
    return this.head.value;
  }
}

const data = new SingleLinkedList();
data.enqueue(20);
data.enqueue(30);
data.enqueue(40);
data.enqueue(60);
data.enqueue(50);
data.dequeue(40);
console.log("data", data);
