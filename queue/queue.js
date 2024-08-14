// learning queue

// Defination: A queue is a linear data structure that follows the principle of First In First Out (FIFO). This means the first element inserted inside the queue is removed first.

// use cases
// 1. Printer queue
// 2. CPU scheduling
// 3. Call center phone systems
// 4. Breadth First Search algorithm

// queue operations:
// enqueue: Add an element to the end of the queue
// dequeue: Remove an element from the front of the queue
// isEmpty: Check if the queue is empty
// peek: Get the value of the front element without removing it
// queue full: Check if the queue is full

// Implementation of queue using class

class Queue {
  constructor() {
    this.size = 10;
    this.q = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    this.i = 0;
    this.o = 0;

    // empty check
    this.isEmpty = true;
    this.isFull = false;
  }

  // empty check
  isEmpty() {
    return this.items.length === 0;
  }

  // increment
  increment(element) {
    if (element + 1 === this.size) {
      return "Overflow";
    } else {
      return element + 1;
    }
  }

  // enqueue operation
  enqueue(element) {
    if (this.isFull) {
      return "Overflow";
    }
    this.q[this.i] = element;
    this.i = this.increment(this.i);
    if (this.i === this.o) {
      this.isFull = true;
    }
    this.isEmpty = false;
  }

  // dequeue operation
  dequeue() {
    if (this.isEmpty) {
      return "Underflow";
    }
    const element = this.q[this.o];
    this.o = this.increment(this.o);
    if (this.o === this.i) {
      this.isEmpty = true;
    }
    this.isFull = false;
    return element;
  }
}

const queueObject = new Queue();
queueObject.enqueue(1);
queueObject.enqueue(2);
queueObject.enqueue(3);
queueObject.enqueue(4);
queueObject.enqueue(5);

console.log(queueObject);
