// doubly linked list

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(head = null) {
    this.head = head;
  }

  append(data) {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;

      while (current.next) {
        current = current.next;
      }

      current.next = newNode;
      newNode.prev = current;
    }
  }

  remove(data) {
    if (!this.head) return;

    if (this.head.data === data) {
      if (this.head.next) {
        this.head = this.head.next;
        this.head.prev = null;
      } else {
        this.head = null;
      }
      return;
    }

    let current = this.head;

    while (current && current.next.data !== data) {
      current = current.next;
    }

    if (!current) return;

    if (current.next) {
      current.prev.next = current.next;
      current.next.prev = current.prev;
    } else {
      current.prev.next = null;
    }
  }

  find(data) {
    let current = this.head;

    while (current) {
      if (current.data === data) {
        return current;
      }

      current = current.next;
    }

    return null;
  }

  pop() {
    if (!this.head) return null;

    if (!this.head.next) {
      const node = this.head;
      this.head = null;
      return node;
    }

    let current = this.head;

    while (current.next) {
      current = current.next;
    }

    const data = current.data;
    current.prev.next = null;
    current.prev = null;
    return data;
  }

  inserAtPosition(data, position) {
    const newNode = new Node(data);
    // case 1: Inset at position 0
    if (position === 0) {
      if (this.head) {
        newNode.next = this.head;
        this.head.prev = newNode;
      }

      this.head = newNode;
      return;
    }

    let current = this.head;
    let previous;
    let currentPosition = 0;

    while (currentPosition < position && current) {
      previous = current;
      current = current.next;
      currentPosition++;
    }

    if (previous && !current) {
      previous.next = newNode;
      newNode.prev = previous;
      return;
    }

    if (previous) {
      previous.next = newNode;
      newNode.prev = previous;
      newNode.next = current;
      current.prev = newNode;

      if (current) {
        current.prev = newNode;
      }
    }
  }

  printList() {
    let current = this.head;
    let listString = "";

    while (current) {
      listString += current.data;
      if (current.next) {
        listString += " <-> ";
      }

      current = current.next;
    }

    console.log(listString);
  }
}

const dll = new DoublyLinkedList();
dll.append(1);
dll.append(2);
dll.append(3);
dll.append(4);
dll.append(5);
dll.append(6);
dll.append(7);

dll.inserAtPosition(0, 0);
dll.inserAtPosition(8, 5);

dll.remove(8);

dll.printList();

// console.log(dll.find(5));
