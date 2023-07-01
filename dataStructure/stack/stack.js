class Stack {
  constructor() {
    this.items = [];
    this.count = 0;
  }

  // push an elements in the array and returns the length of the array
  push(element) {
    this.items[this.count] = element;
    this.count++;
    return this.count;
  }
  // remove all elements of the array
  isEmpty() {
    return this.count === 0;
  }
  // remove last element from the array and return last element
  pop() {
    if (this.isEmpty()) {
      return undefined;
    }
    this.count--;
    const result = this.items[this.count];
    delete this.items[this.count];
    return result;
  }

  // return last element

  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.count - 1];
  }

  // remove all element of the stack
  clear() {
    this.items = [];
    this.count = 0;
    return [];
  }

  // return all elements of stack with comma separated

  toStrings() {
    if (this.isEmpty()) {
      return "";
    }
    let str = `${this.items[0]}`;
    for (let i = 1; i < this.count; i++) {
      str = `${str}, ${this.items[i]}`;
    }
    return str;
  }
}

const stack = new Stack();
stack.push(10);
console.log("stack clear", stack.clear());
stack.push(20);
stack.push(90);
console.log("stack push", stack.push(30));
console.log("stack pop", stack.pop());
stack.push(1000);
console.log("stack", stack);

console.log("peek", stack.peek());
console.log("isEmpty", stack.isEmpty());
console.log("stack toStrings", stack.toStrings());
