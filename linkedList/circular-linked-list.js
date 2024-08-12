// circular linked list

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class CircularLinkedList {
  constructor(head = null) {
    this.head = head;
  }

  append(data) {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
      this.head.next = this.head;
      this.head.prev = this.head;
    } else {
      let current = this.head;

      while (current.next !== this.head) {
        current = current.next;
      }

      current.next = newNode;
      newNode.prev = current;
      newNode.next = this.head;
      this.head.prev = newNode;
    }
  }

  getLastNode() {
    if (!this.head) return null;

    let current = this.head;
    while (current.next !== this.head) {
      current = current.next;
    }

    return current;
  }

  pop() {
    if (!this.head) return;

    if (this.head.next === this.head) {
      this.head = null;
      return;
    }

    let lastNode = this.getLastNode();
    lastNode.prev.next = this.head;
    this.head.prev = lastNode.prev;
  }

  inserAtPosition(data, position) {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
      this.head.next = this.head;
      this.head.prev = this.head;
      return;
    }

    if (position === 0) {
      newNode.next = this.head;
      newNode.prev = this.head.prev;
      this.head.prev.next = newNode;
      this.head.prev = newNode;
      this.head = newNode;
      return;
    }

    let current = this.head;
    const currentPosition = 0;

    while (currentPosition < position - 1 && current.next !== this.head) {
      current = current.next;
      currentPosition++;
    }

    newNode.next = current.next;
    newNode.prev = current;
    current.next.prev = newNode;
    current.next = newNode;
  }

  deleteAtPosition(position) {
    if (!this.head) return;

    if (position === 0) {
      if (this.head.next === this.head) {
        this.head = null;
        return;
      }

      this.head.prev.next = this.head.next;
      this.head.next.prev = this.head.prev;
      this.head = this.head.next;
      return;
    }

    let current = this.head;
    let currentPosition = 0;

    while (currentPosition < position && current.next !== this.head) {
      current = current.next;
      currentPosition++;
    }

    if (current.next === this.head) return;

    current.prev.next = current.next;
    current.next.prev = current.prev;
  }

  search(data) {
    if (!this.head) return null;

    let current = this.head;

    do {
      if (current.data === data) {
        return current;
      }

      current = current.next;
    } while (current !== this.head);

    return null;
  }

  print() {
    if (!this.head) return;

    let current = this.head;

    do {
      console.log(current.data);
      current = current.next;
    } while (current !== this.head);
  }
}

const circularLinkedList = new CircularLinkedList();
circularLinkedList.append(1);
circularLinkedList.append(2);
circularLinkedList.append(3);
circularLinkedList.append(4);
circularLinkedList.append(5);

console.log(circularLinkedList.head);
