// implement stack using inbuilt methods

class Stack {
  constructor() {
    this.items = [];
  }
  push(element) {
    return this.items.push(element);
    // return this.items.length;
  }

  pop() {
    return this.items.pop();
  }

  isEmpty() {
    return this.items.length === 0;
  }

  peek() {
    return this.items[this.items.length];
  }
  clear() {
    return (this.items = []);
  }
  size() {
    return this.items.length;
  }
  toStrings() {
    return this.items.toString();
  }
}

const stacks = new Stack();
stacks.push(20);
stacks.push(30);
stacks.push(50);
stacks.pop();

console.log("stacks", stacks, stacks.size());
console.log("stacks", stacks.toStrings());
