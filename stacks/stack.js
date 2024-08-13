// learning stack

// Defination: A stack is a linear data structure that follows the principle of Last In First Out (LIFO). This means the last element inserted inside the stack is removed first.

// use cases
// 1. The undo mechanism in text editors.
// 2. The back button in web browsers.
// 3. Function call in programming language.

// Stack operations:

// push: Add an element to the top of a stack
// pop: Remove an element from the top of a stack
// isEmpty: Check if the stack is empty
// peek: Get the value of the top element without removing it

// Implementation of stack using array
const stack = [];

// push operation
stack.push(1);
stack.push(2);
stack.push(3);

// console.log(stack[1]); // [1, 2, 3]
// in this operation we can see other elements are pushed before the last element so this is not the complete application of stack

// pop operation
stack.pop();
// console.log(stack[1]); // [1, 2]

// Implementation of stack using class
class Stack {
  constructor() {
    this.items = [];
  }

  // empty check
  isEmpty() {
    return this.items.length === 0;
  }

  // push operation
  push(element) {
    this.items.push(element);
  }

  // pop operation
  pop() {
    if (this.isEmpty()) {
      return "Underflow";
    }
    return this.items.pop();
  }

  // peek operation
  peek() {
    return this.items[this.items.length - 1];
  }
}

const stackObject = new Stack();

// console.log(stackObject.isEmpty()); // true
stackObject.push(1);
stackObject.push(2);
stackObject.push(3);

// console.log(stackObject.items[1]);
// if try to access the this way you are breaking the abstaction principle in OOP because the class does not allow to access the items directly through any of its public functions

// case study
// 1. Bracket matching - check if the brackets in a given expression are balanced or not.

function isBalanced(expression) {
  const stack = [];
  let matchingBrackets = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  for (const char of expression) {
    if (char === "(" || char === "{" || char === "[") {
      stack.push(char);
    } else if (char === ")" || char === "}" || char === "]") {
      if (stack.length === 0) {
        return false;
      }

      if (stack[stack.length - 1] === matchingBrackets[char]) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return stack.length === 0;
}

// console.log(isBalanced("{[()]}")); // true
// console.log(isBalanced("([)]"));

// 2. Reverse a string using stack
function reverseString(str) {
  const stack = [];
  for (const char of str) {
    stack.push(char);
  }

  let reversedString = "";
  while (stack.length) {
    reversedString += stack.pop();
  }

  return reversedString;
}

console.log(reverseString("hello my world"));

//3. Binary number conversion
function decimalToBinary(decimal) {
  const stack = [];
  while (decimal > 0) {
    stack.push(decimal % 2);
    decimal = Math.floor(decimal / 2);
  }

  let binary = "";
  while (stack.length) {
    binary += stack.pop();
  }

  return binary;
}

console.log(decimalToBinary(10)); // 1010
