class CircularQueue {
  constructor(queueLength) {
    this.queue = [];
    this.queueLength = queueLength;
  }

  enqueue(item) {
    if (this.queue.length < this.queueLength) {
      this.queue.push(item);
    } else {
      this.removeOldestItem();
      this.queue.push(item);
    }
  }

  dequeue() {
    if (this.queue.length === 0) {
      return null;
    } else {
      return this.removeOldestItem();
    }
  }

  removeOldestItem() {
    let oldestItem = this.queue[0];

    for (let idx = 1; idx < this.queue.length; idx += 1) {
      let currentElem = this.queue[idx];
      if (currentElem < oldestItem) oldestItem = currentElem;
    }

    let removedItem = this.queue.splice(this.queue.indexOf(oldestItem), 1);

    return removedItem[0];
  }
}

let queue = new CircularQueue(3);
console.log(queue.dequeue() === null);

queue.enqueue(1);
queue.enqueue(2);
console.log(queue.dequeue() === 1);

queue.enqueue(3);
queue.enqueue(4);
console.log(queue.dequeue() === 2);

queue.enqueue(5);
queue.enqueue(6);
queue.enqueue(7);
console.log(queue.dequeue() === 5);
console.log(queue.dequeue() === 6);
console.log(queue.dequeue() === 7);
console.log(queue.dequeue() === null);

let anotherQueue = new CircularQueue(4);
console.log(anotherQueue.dequeue() === null);

anotherQueue.enqueue(1);
anotherQueue.enqueue(2);
console.log(anotherQueue.dequeue() === 1);

anotherQueue.enqueue(3);
anotherQueue.enqueue(4);
console.log(anotherQueue.dequeue() === 2);

anotherQueue.enqueue(5);
anotherQueue.enqueue(6);
anotherQueue.enqueue(7);
console.log(anotherQueue.dequeue() === 4);
console.log(anotherQueue.dequeue() === 5);
console.log(anotherQueue.dequeue() === 6);
console.log(anotherQueue.dequeue() === 7);
console.log(anotherQueue.dequeue() === null);