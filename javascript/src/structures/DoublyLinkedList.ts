import { Node } from "./Node";

export class DoublyLinkedList<T> {
  private start?: Node<T>;
  private end?: Node<T>;
  private length = 0;

  constructor(values?: Array<T>) {
    values?.forEach((value) => {
      this.add(value);
    });
  }

  size() {
    return this.length;
  }

  private addToStart(node: Node<T>) {
    if (!this.start) throw new Error("List Error");

    node.next = this.start;
    this.start.prev = node;
    this.start = node;
  }

  private addAtIndex(node: Node<T>, at: number) {
    let count = 0;
    let current = this.start;
    while (at > count) {
      current = current?.next;
      count++;
    }

    if (!current || !current.prev) throw new Error("List Error");

    current.prev.next = node;
    node.prev = current.prev;
    current.prev = node;
    node.next = current;
  }

  private addToEnd(node: Node<T>) {
    // the list is empty

    if (this.length === 0) {
      // set both start and end to the same node

      this.start = node;
      this.end = node;

      return;
    }

    if (!this.end) throw new Error("List Error");

    node.prev = this.end;
    this.end.next = node;
    this.end = node;
  }

  /**
   *
   * @param value
   * @param at - if this argument is omitted or greater than the total length of the list, the value is added to the end of the list
   */
  add(value: T, at?: number) {
    // if "at" is invalid throw error
    if (at && at < 0) throw new Error("Invalid placement address");

    const node = new Node<T>(value);

    if (at === undefined || at >= this.length) {
      this.addToEnd(node);
    } else if (at === 0) {
      this.addToStart(node);
    } else {
      this.addAtIndex(node, at);
    }
    this.length++;
    return true;
  }

  private removeFromStart() {
    if (!this.start) throw new Error("List Error");

    const value = this.start.data;

    if (this.length === 1) {
      this.start = undefined;
      this.end = undefined;
      return value;
    }

    if (!this.start.next) throw new Error("List Error");

    this.start.next.prev = undefined;
    this.start = this.start.next;
    return value;
  }

  private removeAtIndex(at: number) {
    let count = 0;
    let current = this.start;

    while (at > count) {
      current = current?.next;
      count++;
    }

    if (!current || !current.prev || !current.next)
      throw new Error("List Error");

    current.prev.next = current.next;
    current.next.prev = current.prev;
    return current.data;
  }

  private removeFromEnd() {
    // the list is empty
    if (this.length === 0) throw new RangeError();

    if (!this.end || !this.end.prev) throw new Error("List Error");

    const value = this.end.data;

    this.end = this.end.prev;
    this.end.next = undefined;

    return value;
  }

  remove(at: number) {
    if (at >= this.length || at < 0) {
      throw new RangeError("Out Of Bounds");
    }

    let value;

    if (at === 0) {
      value = this.removeFromStart();
    } else if (at === this.length - 1) {
      value = this.removeFromEnd();
    } else {
      value = this.removeAtIndex(at);
    }

    this.length--;
    return value;
  }

  isPresent(value: T) {
    let current = this.start;
    while (current) {
      if (current.data === value) return true;
      current = current.next;
    }

    return false;
  }

  toArray() {
    const result = [];

    let current = this.start;

    while (current) {
      result.push(current.data);
      current = current.next;
    }

    return result;
  }
}

const list = new DoublyLinkedList<number>();

list.add(5);
console.log(list);
list.add(3);
console.log(list);
list.add(7);
console.log(list);
list.add(15, 0);
console.log(list);
list.add(24, 2);
console.log(list.toArray());
console.log(list.isPresent(7));
list.remove(4);
console.log(list.isPresent(7));
console.log(list.toArray());
