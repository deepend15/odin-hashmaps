export class HashSetLinkedList {
  static Node = class {
    constructor(key = null, nextNode = null) {
      this.key = key;
      this.nextNode = nextNode;
    }
  };

  tail() {
    if (!this.key) return null;
    else {
      let currentNode = this;
      while (currentNode.nextNode !== null) {
        currentNode = currentNode.nextNode;
      }
      return currentNode;
    }
  }

  append(key) {
    if (!this.key) {
      this.key = key;
      this.nextNode = null;
    } else {
      let newNode = new HashSetLinkedList.Node(key);
      let tail = this.tail();
      tail.nextNode = newNode;
    }
  }

  size() {
    if (!this.key) return 0;
    else {
      let list = this;
      let counter = 1;
      while (list.nextNode !== null) {
        list = list.nextNode;
        counter += 1;
      }
      return counter;
    }
  }

  at(index) {
    if (index < 0 || index > this.size() - 1) return undefined;
    else {
      let counter = 0;
      let returnedNode;
      for (let currentNode = this; ; currentNode = currentNode.nextNode) {
        if (counter === index) {
          returnedNode = currentNode;
          break;
        } else counter += 1;
      }
      return returnedNode;
    }
  }

  contains(key) {
    if (!this.key) return false;
    else {
      for (let currentNode = this; ; currentNode = currentNode.nextNode) {
        if (currentNode.key === key) return true;
        if (currentNode.nextNode === null) return false;
      }
    }
  }

  find(key) {
    if (!this.key) return null;
    else {
      let index = 0;
      for (let currentNode = this; ; currentNode = currentNode.nextNode) {
        if (currentNode.key === key) return index;
        if (currentNode.nextNode === null) return null;
        index += 1;
      }
    }
  }

  removeAt(index) {
    if (index < 0 || index > this.size() - 1) throw new Error("Invalid index.");
    else {
      if (this.size() === 1) {
        delete this.key;
        delete this.nextNode;
      } else if (index === 0) {
        const newHead = this.at(1);
        this.key = newHead.key;
        this.nextNode = newHead.nextNode;
      } else if (index === this.size() - 1) {
        const newTail = this.at(this.size() - 2);
        newTail.nextNode = null;
      } else {
        const nodeBeforeIndex = this.at(index - 1);
        const nodeAfterIndex = this.at(index + 1);
        nodeBeforeIndex.nextNode = nodeAfterIndex;
      }
    }
  }
}
