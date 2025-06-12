export class LinkedList {
  static Node = class {
    constructor(key = null, value = null, nextNode = null) {
      this.key = key;
      this.value = value;
      this.nextNode = nextNode;
    }
  };

  //   head() {
  //     if (!this.value) return null;
  //     else return this;
  //   }

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

  append(key, value) {
    if (!this.key) {
      this.key = key;
      this.value = value;
      this.nextNode = null;
    } else {
      let newNode = new LinkedList.Node(key, value);
      let tail = this.tail();
      tail.nextNode = newNode;
    }
  }

//   prepend(value) {
//     if (!this.value) {
//       this.value = value;
//       this.nextNode = null;
//     } else {
//       let newNode = new LinkedList.Node(this.value, this.nextNode);
//       this.value = value;
//       this.nextNode = newNode;
//     }
//   }

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

//   pop() {
//     if (!this.value) return;
//     else if (this.size() === 1) {
//       delete this.value;
//       delete this.nextNode;
//     } else {
//       const penultimateNode = this.at(this.size() - 2);
//       penultimateNode.nextNode = null;
//     }
//   }

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

//   toString() {
//     if (!this.value) return "null";
//     else {
//       let arr = [];
//       for (let currentNode = this; ; currentNode = currentNode.nextNode) {
//         arr.push(currentNode.value.toString());
//         if (currentNode.nextNode === null) break;
//       }
//       let arr2 = arr.map((value) => `( ` + value + ` )`);
//       arr2.push("null");
//       return arr2.join(" -> ");
//     }
//   }

//   insertAt(value, index) {
//     if (index < 0 || index > this.size()) {
//       if (!this.value && index === 0) this.append(value);
//       else throw new Error("Invalid index.");
//     } else {
//       if (index === this.size()) this.append(value);
//       else if (index === 0) this.prepend(value);
//       else {
//         const nodeAtIndex = this.at(index);
//         const nodeBeforeIndex = this.at(index - 1);
//         const newNode = new LinkedList.Node(value, nodeAtIndex);
//         nodeBeforeIndex.nextNode = newNode;
//       }
//     }
//   }

  removeAt(index) {
    if (index < 0 || index > this.size() - 1) throw new Error("Invalid index.");
    else {
      if (this.size() === 1) {
        delete this.key;
        delete this.value;
        delete this.nextNode;
      } else if (index === 0) {
        const newHead = this.at(1);
        this.key = newHead.key;
        this.value = newHead.value;
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
