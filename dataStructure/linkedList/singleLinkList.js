const Node = require("./node");

class SingleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(element) {
    const node = new Node(element);
    if (this.head == null) {
      this.head = node;
      this.tail = this.head;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.head) {
      return null;
    }

    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }
}

const linkList = new SingleLinkedList();
linkList.push(20);
// linkList.push(40);
// linkList.push(60);
// linkList.push(80);
// linkList.push(90);
console.log("linkList pop", linkList.pop());
console.log("linkList pop", linkList.pop());
console.log("linkList", linkList);
