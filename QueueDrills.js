'use strict';
const Queue = require('./Queue');
const DLLQueue = require('./Queue');
const Stack = require('./Stack');

//6. Create a queue using a Singly Linked List
function mainQueue() {
  let starTrekQ = new Queue;
  starTrekQ.enqueue('Kirk');
  starTrekQ.enqueue('Spock');
  starTrekQ.enqueue('Uhura');
  starTrekQ.enqueue('Sulu');
  starTrekQ.enqueue('Checkov');

  starTrekQ.dequeue();
  starTrekQ.dequeue();
  return starTrekQ;
}
//console.log(mainQueue());

function peek(queue) {
  if(queue.first === null) {
    return 'Queue is empty';
  } return queue.first.value;
}
//console.log(peek(mainQueue()));

function isEmpty(queue) {
  if(queue.first === null) {
    return 'Queue is empty';
  } return 'Queue is not empty';
}
//console.log(isEmpty(new Queue));
//console.log(isEmpty(mainQueue()));

function display(queue) {
  let currentNode = queue.first;
  while(currentNode) {
    console.log(currentNode.value);
    if(currentNode.next === null) {
      console.log('End of queue');
    }
    currentNode = currentNode.next;
  }
}
//console.log(display(mainQueue()));
//console.log(display(mainDLLQueue()));

//7. Create a queue using a Doubly Linked List
function mainDLLQueue() {
  let starTrekDLLQ = new DLLQueue;
  starTrekDLLQ.enqueue('Kirk');
  starTrekDLLQ.enqueue('Spock');
  starTrekDLLQ.enqueue('Uhura');
  starTrekDLLQ.enqueue('Sulu');
  starTrekDLLQ.enqueue('Checkov');

  return starTrekDLLQ;
}
//console.log(mainDLLQueue());

//8. Queue implementation using a stack
function stackQueue() {
  let fullStack = new Stack;
  let bullpen = new Stack;

  fullStack.push(1);
  fullStack.push(2);
  fullStack.push(3);

  while(fullStack.top !== null) {
    bullpen.push(fullStack.top);
    fullStack.pop();
  }
}
stackQueue();

//9. Square dance pairings

//10. The Ophidian Bank