import { DoublyLinkedList } from "./DoublyLinkedList";

export class Stack<T> {
  private list = new DoublyLinkedList<T>();

  add(value: T) {
    return this.list.add(value, 0);
  }

  remove() {
    return this.list.remove(0);
  }

  toArray() {
    return this.list.toArray();
  }
}

const stack = new Stack<number>();
console.log("-------------------------------");
stack.add(3);
console.log(stack.toArray());
stack.add(5);
console.log(stack.toArray());
stack.add(7);
console.log(stack.toArray());
stack.remove();
console.log(stack.toArray());
stack.remove();
console.log(stack.toArray());
stack.remove();
console.log(stack.toArray());
stack.remove();
console.log("-----------------------------");
