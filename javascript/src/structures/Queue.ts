import { DoublyLinkedList } from "./DoublyLinkedList";

export class Queue<T> {
  private list = new DoublyLinkedList<T>();

  enqueue(value: T) {
    return this.list.add(value);
  }

  dequeue() {
    return this.list.remove(0);
  }

  toArray() {
    return this.list.toArray();
  }
}

const queue = new Queue<number>();

queue.enqueue(3);
queue.enqueue(5);
queue.enqueue(7);
queue.enqueue(2);
console.log(queue.toArray());

console.log(queue.dequeue());

console.log(queue.toArray());
