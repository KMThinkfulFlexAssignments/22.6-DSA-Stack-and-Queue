'use strict';
class _Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }
  //has O(1) time complexity because you can only add to the end of the queue
  enqueue(data) {
    const node = new _Node(data);

    if (this.first === null) {
      this.first = node;
    }

    if (this.last) {
      this.last.next = node;
    }
    //make the new node the last item on the queue
    this.last = node;
  }
  //also has O(1) time complexity because you can only remove from the start of the queue
  dequeue() {
    //if the queue is empty, there is nothing to return
    if (this.first === null) {
      return;
    }
    const node = this.first;
    this.first = this.first.next;
    //if this is the last item in the queue
    if (node === this.last) {
      this.last = null;
    }
    return node.value;
  }
}

class _DLLNode {
  constructor(value) {
    this.value=value,
    this.next=null,
    this.prev=null;
  }
}
class DLLQueue {
  constructor() {
    this.first = null;
    this.last = null;
  }
  //has O(1) time complexity because you can only add to the end of the queue
  enqueue(data) {
    const node = new _DLLNode(data);

    if (this.first === null) {
      this.first = node;
    }

    if (this.last) {
      this.prev = this.last;
      this.last.next = node;
      //I think this made it a DLL queue but it also makes display loop
      node.next = this.first;
    }
    //make the new node the last item on the queue
    this.last = node;
  }
  //also has O(1) time complexity because you can only remove from the start of the queue
  dequeue() {
    //if the queue is empty, there is nothing to return
    if (this.first === null) {
      return;
    }
    const node = this.first;
    this.first = node.next;
    //if this is the last item in the queue
    if (node === this.last) {
      this.last = null;
    }
    return node.value;
  }
}

module.exports = Queue, DLLQueue;