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
const dancers = new Queue();
dancers.enqueue({ gender: 'F', name: 'Jane' });
dancers.enqueue({ gender: 'M', name: 'Frank' });
dancers.enqueue({ gender: 'F', name: 'Madonna' });
dancers.enqueue({ gender: 'M', name: 'David' });
dancers.enqueue({ gender: 'F', name: 'Beyonce' });
dancers.enqueue({ gender: 'M', name: 'Chris' });
dancers.enqueue({ gender: 'M', name: 'Sherlock' });
dancers.enqueue({ gender: 'M', name: 'John' });

function squareDancePairings(queue) {
  const men = new Queue;
  const women = new Queue;
  while(queue.first !== null) {
    let nextUp = queue.first.value;
    queue.dequeue();

    if(nextUp.gender === 'F') {
      women.enqueue(nextUp.name);
    } else {
      men.enqueue(nextUp.name);
    }
    if(men.first !==null && women.first !==null) {
      const pairings = `${men.first.value} is paired with ${women.first.value}`;
      console.log(pairings);
      men.dequeue();
      women.dequeue();
    }
  }
}
//squareDancePairings(dancers);

//10. The Ophidian Bank
function ophidianBank() {
  const bankLine = new Queue();
  for(let i =0; i <10; i++) {
    console.log('A person joined the line'); 
    bankLine.enqueue('A person');
  }
  const person = bankLine.dequeue();
  if(Math.random() < 0.25) {
    console.log('Person sent to back of the queue');
    bankLine.enqueue(person);
  } else {
    console.log('This person had all the right paperwork');
  }
}
ophidianBank();
ophidianBank();
ophidianBank();
ophidianBank();
ophidianBank();