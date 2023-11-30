class Queue {
  constructor(size) {
    this.maxSize = size;
    this.queue = [];
    this.front = -1;
    this.rear = -1;
  }

  // we have to remove frist element from the Queue
  frontEl = function () {
    if (this.front < this.maxSize) {
      this.firstVal = this.queue[this.front];
      this.front++;
      return this.firstVal;
    } else {
      console.log("Queue is empty");
    }
  };

  // we have to add element in the Queue
  rearEl = function (newEl) {
    if (this.front == -1 && this.rear == -1) {
      this.rear = 0;
      this.front = 0;
    }
    if (this.rear !== this.maxSize) {
      this.queue[this.rear] = newEl;
      this.rear++;
    } else {
      console.log("Queue is full");
    }
  };

  display = function () {
    for (this.i = 0; this.i < this.rear; this.i++) {
      console.log(this.queue[this.i]);
    }
  };
}

const queue = new Queue(5);
queue.rearEl(10);
queue.rearEl(20);
queue.rearEl(30);
queue.rearEl(40);
queue.rearEl(50);

queue.display();
