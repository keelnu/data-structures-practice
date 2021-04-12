/*
Stacks:
- LIFO (last in first out)
- utilize push and pop methods
- use case: undo/redo
- The simplest application of a stack is to reverse a word. You push a given word to stack - letter by letter - and then pop letters from the stack.

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

// const myQueue = new Queue();
// myQueue.enqueue('cat');
// myQueue;
// myQueue.enqueue('llama');
// myQueue.enqueue('giraffe');
// myQueue;

// myQueue.dequeue();
// myQueue;
// myQueue.dequeue();
// myQueue;
// myQueue.dequeue();
// myQueue;

// IMPLEMENT A QUEUE USING STACKS


/* WORD MACHINE 

- Return error (-1) if stack is empty after all operations complete, if addition causes overflow, or subtraction causes underflow, if not enough frames on the stack to support the current operation.
*/

function wordMachine(input) {
  // take string input and split into array
  const arr = input.split(' ');
  console.log(arr);
  // instantiate new stack in array format
  const stack = [];
  // define error messages
  const subError = 'Error: Stack requires minimum two frames to perform subtraction operation.';
  const addError = 'Error: Stack requires minimum two frames to perform addition operation.';
  // loop over array:
  for (let i = 0; i < arr.length; i++) {
    // check if arr[i] is a string that is a number
    if (!isNaN(arr[i])) {
      let parsedNum = parseInt(arr[i]);
      // console.log('parsedNum', parsedNum);
      stack.push(parsedNum);
      console.log('PUSH, stack is now: ', stack);
      // console.log('Last value pushed to stack: ', stack[stack.length - 1]);
    }
    // check if arr[i] is equal to 'DUP' -> push duplicate of last value pushed to stack array, to stack again
    else if (arr[i] === 'DUP') {
      stack.push(stack[stack.length - 1]);
      console.log('DUP, stack is now: ', stack);
    }
    // if arr[i] is equal to '+' and stack length > 2 -> pop off last two values added to stack, add them together, and push them back onto the stack array
    else if (arr[i] === '+') {
      console.log('stack is: ', stack);
      if (stack.length > 2) {
        let add1 = stack.pop();
        let add2 = stack.pop();
        console.log('popped last two vals off, stack = ', stack);
        let added = add1 + add2;
        stack.push(added);
        // console.log('after ADD, stack is now: ', stack);
      }
      if (stack.length < 2) return addError;
    }
    // if arr[i] is equal to '-' and stack length > 2 -> pop off last two values added to stack, subtract last from 2nd to last vals, and push them back onto the stack array
    else if (arr[i] === '+') {
      if (stack.length > 2) {
        let sub1 = stack.pop();
        let sub2 = stack.pop();
        console.log('popped last two vals off stack: ', stack);
        let subtracted = sub1 - sub2;
        stack.push(subtracted);
        // console.log('after SUBTRACT, stack is now: ', stack);
      }
      return subError;
    } 
    // console.log('STACK IS NOW: ', stack);
    // if (stack.length > 1) {
    //   const topMostVal = stack.length - 1;
    //   return topMostVal;
    // } else return -1;
  }
}

const arr1 = '5 4 DUP + -';
console.log(wordMachine(arr1));
const arr2 = '5 DUP 4 + 2';
// console.log(wordMachine(arr2));
