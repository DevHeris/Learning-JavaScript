// Class representing a Queue
class Queue {
  // Constructor initializes an empty array to store queue items, count, and front index
  constructor() {
    this._items = [];
    this._count = 0;
    this._front = 0;
  }

  // Method to add an item to the back of the queue
  enqueue(item) {
    this._items[this._count] = item;
    this._count++;
  }

  // Method to remove and return the item from the front of the queue
  dequeue() {
    if (this.isEmpty()) {
      return undefined;
    }

    const item = this._items[this._front];

    // Shift remaining items to fill the gap
    for (let index = this._front; index < this._count - 1; index++) {
      this._items[index] = this._items[index + 1];
    }

    // Adjust the count and length of the array
    this._count--;
    this._items.length = this._count;

    return item;
  }

  // Method to return the item at the front of the queue without removing it
  peek() {
    if (this.isEmpty()) {
      return "No items in the queue";
    }

    return this._items[this._front];
  }

  // Method to get the current length of the queue
  length() {
    return this._items.length;
  }

  // Method to check if the queue is empty
  isEmpty() {
    return this._count === 0;
  }
}

// Create a new queue instance
const q = new Queue();

// Enqueue some tasks into the queue
q.enqueue("Task 1");
q.enqueue("Task 2");
q.enqueue("Task 3");

// Dequeue two tasks from the front of the queue
q.dequeue();
q.dequeue();

// Display the front item and length of the queue
console.log("Front Item: ", q.peek());
console.log("Queue length: ", q.length());
console.log(q);
