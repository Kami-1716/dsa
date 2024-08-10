// create a linked list

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
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

    previous.next = current;
    newNode.next = current;
  }
}

const linkedList = new LinkedList();
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);

linkedList.remove(2);

console.log(linkedList);
