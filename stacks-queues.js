/*
Stacks:
- LIFO (last in first out)
- utilize push and pop methods
- use case: undo/redo

Queues:
- FIFO (first in first out)
- you can enqueue (push) and dequeue (shift)
- use case: printing queue on printer
*/

/* STACKS PRACTICE:
1. Make a class called Stack and set up the constructor function
2. Build the native JS methods push and pop from scratch
3. Declare a new instance of Stack
4. Practice pushing and popping values off of the stack
*/

class Stack {
  constructor() {
    // initialize this.storage to be an empty object and this.size to be 0
    this.storage = {};
    this.size = 0;
  }

  push(element) {
    // assign this.storage[this.size] to be key, and element to be value
    this.storage[this.size] = element;
    // increment this.size by 1
    this.size++;
  }

  pop() {
    // declare variable 'remove' and assign it to this.storage[this.size]
    const removed = this.storage[this.size];
    // delete this.storage[this.size]
    delete this.storage[this.size];
    // decrement this.size by 1
    this.size--;
    return removed;
  }
};

// let myStack = new Stack();
// myStack.push(2);
// myStack.push(3);
// myStack.push(4);
// myStack;
// myStack.pop();
// myStack;
// myStack.pop();
// myStack;


/* QUEUE PRACTICE: 
1. Declare a new class called Queue
2. Write methods for enqueue (push) and dequeue (shift)
3. Instantiate a new Queue and practice enqueueing and dequeueing 
*/

class Queue {
  constructor() {
    this.storage = {};
    this.head = 0;
    this.tail = 0;
  }

  // adds an element to the end (back) of your queue
  enqueue(element) {
    // assign this.tail as key and element as value inside this.storage object
    this.storage[this.tail] = element;
    // increment this.tail by 1
    this.tail++;
  }
  // removes the first element (the front) inside your queue and returns it 
  dequeue() {
    // store this.storage[this.head] inside a variable 'remove'
    // delete this.storage[this.head]
    // increment this.head by 1
    const removed = this.storage[this.head];
    delete this.storage[this.head];
    this.head++;
    return removed;
  }
}

const myQueue = new Queue();
myQueue.enqueue('cat');
myQueue.enqueue('llama');
myQueue.enqueue('giraffe');
myQueue;

myQueue.dequeue();
myQueue;
myQueue.dequeue();
myQueue;
myQueue.dequeue();
myQueue;