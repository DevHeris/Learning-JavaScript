// Class representing a Stack
class Stack {
  // Constructor initializes an empty array to store stack items and sets count to 0
  constructor() {
    this._items = [];
    this._count = 0;
  }

  // Method to add an item to the top of the stack
  push(item) {
    this._items[this._count] = item;
    this._count++;
  }

  // Method to remove and return the item from the top of the stack
  pop() {
    if (this.isEmpty()) {
      return "Underflow";
    }

    const item = this._items[this._count - 1];
    this._count--;

    // Shift remaining items to fill the gap
    for (let index = this._count; index < this._items.length; index++) {
      this._items[index] = this._items[index + 1];
    }

    // Adjust the length of the array
    this._items.length = this._count;
    return item;
  }

  // Method to return the item at the top of the stack without removing it
  peek() {
    if (this.isEmpty()) {
      return "No items in stack";
    }

    return this._items[this._count - 1];
  }

  // Method to get the current length of the stack
  length() {
    return this._count;
  }

  // Method to clear the stack by resetting count and creating a new empty array
  clear() {
    this._count = 0;
    this._items = [];
  }

  // Method to check if the stack is empty
  isEmpty() {
    return this._count === 0;
  }
}

// Create a new stack instance
const stack = new Stack();

// Push some items onto the stack
stack.push("Item 1");
stack.push("Item 2");
stack.push("Item 3");
stack.push("Item 4");
stack.push("Item 5");

// Pop an item from the stack
stack.pop();

// Display the top item and length of the stack
console.log("Top item: ", stack.peek());
console.log("Stack Length: ", stack.length());

// Clear the stack
stack.clear();

// Display the top item and length of the stack after clearing
console.log("Top item: ", stack.peek());
console.log("Stack Length: ", stack.length());
