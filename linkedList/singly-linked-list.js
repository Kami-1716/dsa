// define linked list
// Linked list is a data structure that consists of a sequence of elements, where each element points to the next element in the sequence. It is a linear data structure that does not store the elements in contiguous memory locations.

// use cases
// 1. Linked list is used to implement stacks and queues.
// 2. Linked list is used to implement graphs and trees.
// 3. Linked list is used in image viewer, music player, etc.

// real world application
// 1. Linked list is used in image viewer, music player, etc.
// 2. Linked list is used in undo functionality of softwares.
// 3. Linked list is used in browser history.
// 4. Linked list is used in navigation systems.

// create a linked list

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class SinglyLinkedList {
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
    }
  }

  remove(data) {
    if (!this.head) return;

    if (this.head.data === data) {
      this.head = this.head.next;
    }

    let current = this.head;

    while (current.next && current.next.data !== data) {
      current = current.next;
    }

    if (current.next) {
      current.next = current.next.next;
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

  update(oldData, newData) {
    let current = this.head;

    while (current) {
      if (current.data === oldData) {
        current.data = newData;

        return true;
      }

      current = current.next;
    }

    return false;
  }

  insertAtPosition(data, position) {
    const newNode = new Node(data);

    if (position === 0) {
      newNode.next = this.head;
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

    if (previous) {
      previous.next = newNode;
      newNode.next = current;
    }
  }

  pop() {
    if (!this.head) return null;

    if (!this.head.next) {
      const data = this.head.data;
      this.head = null;
      return data;
    }

    let current = this.head;

    while (current.next.next) {
      current = current.next;
    }

    current.next = null;
    return current.data;
  }

  printList() {
    let current = this.head;
    let listString = "";

    while (current) {
      listString += current.data;
      if (current.next) {
        listString += " -> ";
      }
      current = current.next;
    }

    console.log(listString);
  }
}

const linkedList = new LinkedList();
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);

linkedList.pop();

console.log(linkedList);
