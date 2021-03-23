export class Node<T> {
  constructor(public data: T, public next?: Node<T>, public prev?: Node<T>) {}
}

const node = new Node<number>(5);

console.log(node);
