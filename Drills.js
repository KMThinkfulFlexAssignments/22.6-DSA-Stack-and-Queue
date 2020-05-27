'use strict';
const Stack = require('./Stack');
const Queue = require('./Queue');

//1. Create a stack class
function mainStack() {
  let starTrek = new Stack;

  starTrek.push('Kirk');
  starTrek.push('Spock');
  starTrek.push('McCoy');
  starTrek.push('Scotty');

  return starTrek;
}
//console.log(mainStack());

//2. Useful methods for a stack
function peek(stack) {
  if(stack.top === null) {
    return 'Stack is empty';
  } return stack.top.data;
}
//console.log(peek(new Stack));
//console.log(peek(mainStack()));

function isEmpty(stack) {
  if(stack.top === null) {
    return 'Stack is empty';
  } return 'Stack is not empty';
}
//console.log(isEmpty(new Stack));
//console.log(isEmpty(mainStack()));

function display(stack) {
  let currentNode = stack.top;
  while(currentNode) {
    console.log(currentNode.data);
    if(currentNode.next === null) {
      console.log('End of stack');
    }
    currentNode = currentNode.next;
  }
}
//display(mainStack());
//display(mainStack().pop());

//3. Check for palindromes using a stack
function is_palindrome(str) {
  str = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
  let palindromeStack = new Stack();
  for(let i = 0; i < str.length; i++) {
    palindromeStack.push(str[i]);
  }

  for(let i = 0; i < str.length; i++) {
    let poppedItem = palindromeStack.pop();
    if (poppedItem !== str[i]) {
      return false;
    }
    return true;
  }
}
//console.log(is_palindrome('dad'));
//console.log(is_palindrome('A man, a plan, a canal: Panama'));
//console.log(is_palindrome('1001'));
//console.log(is_palindrome('Tauhida'));

//4. Matching parentheses in an expression


//5. Sort stack
function sortStack(stack){
  let original = stack;
  let sortedStack = new Stack;
  while(original.top) {
    let elementToMove = original.pop();
    while(sortedStack.top && parseInt(sortedStack.top.data) < elementToMove) {
      original.push(sortedStack.pop());
    }
    sortedStack.push(elementToMove);
  }
  display(sortedStack);
}
let testStack = new Stack;
testStack.push(1);
testStack.push('3');
testStack.push(5);
testStack.push('2');
testStack.push(4);
sortStack(testStack);

//6. Create a queue using a Singly Linked List

//7. Create a queue using a Doubly Linked List

//8. Queue implementation using a stack

//9. Square dance pairings

//10. The Ophidian Bank