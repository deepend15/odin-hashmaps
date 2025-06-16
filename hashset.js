import { HashSetLinkedList } from "./hashset-linkedlist.js";

class HashSet {
  constructor() {
    this.capacity = 16;
    this.loadFactor = 0.75;
    this.buckets = [];

    for (let i = 0; i < this.capacity; i++) {
      this.buckets.push(new HashSetLinkedList());
    }
  }

  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
    }

    return hashCode;
  }

  set(key) {
    const hashCode = this.hash(key);
    if (hashCode < 0 || hashCode >= this.buckets.length) {
      throw new Error("Trying to access index out of bounds");
    }
    const bucket = this.buckets[hashCode];

    if (!bucket.contains(key)) bucket.append(key);

    if (this.length() > this.capacity * this.loadFactor) {
      const storedKeys = this.keys();
      this.clear();
      this.capacity = this.capacity * 2;
      this.buckets = [];
      for (let i = 0; i < this.capacity; i++) {
        this.buckets.push(new HashSetLinkedList());
      }
      for (const key of storedKeys) {
        this.set(key);
      }
    }
  }

  has(key) {
    const hashCode = this.hash(key);
    if (hashCode < 0 || hashCode >= this.buckets.length) {
      throw new Error("Trying to access index out of bounds");
    }
    const bucket = this.buckets[hashCode];

    return bucket.contains(key);
  }

  remove(key) {
    const hashCode = this.hash(key);
    if (hashCode < 0 || hashCode >= this.buckets.length) {
      throw new Error("Trying to access index out of bounds");
    }
    const bucket = this.buckets[hashCode];

    if (bucket.contains(key)) {
      const index = bucket.find(key);
      bucket.removeAt(index);
      return true;
    } else return false;
  }

  length() {
    let counter = 0;

    for (const bucket of this.buckets) {
      counter += bucket.size();
    }

    return counter;
  }

  clear() {
    for (const bucket of this.buckets) {
      if (bucket.size() > 0) {
        delete bucket.key;
        delete bucket.nextNode;
      }
    }
  }

  keys() {
    const keysArray = [];

    for (const bucket of this.buckets) {
      if (bucket.size() > 0) {
        const bucketSize = bucket.size();

        for (let i = 0; i < bucketSize; i++) {
          const bucketNode = bucket.at(i);
          const nodeKey = bucketNode.key;
          keysArray.push(nodeKey);
        }
      }
    }

    return keysArray;
  }
}

const hashSet = new HashSet();
console.log("New HashSet created.");

hashSet.set("apple");
hashSet.set("banana");
hashSet.set("carrot");
hashSet.set("dog");
hashSet.set("elephant");
hashSet.set("frog");
hashSet.set("grape");
hashSet.set("hat");
hashSet.set("ice cream");
hashSet.set("jacket");
hashSet.set("kite");
hashSet.set("lion");
console.log("Add 12 keys to HashSet.");

console.log("HashSet has 'apple'? ", hashSet.has("apple"));

console.log("HashSet length: ", hashSet.length());

hashSet.remove("apple");
console.log("Remove key 'apple'.");
console.log("HashSet has 'apple'? ", hashSet.has("apple"));
console.log("HashSet length: ", hashSet.length());

hashSet.clear();
console.log("Remove all keys from HashSet.");
console.log("HashSet length: ", hashSet.length());

hashSet.set("apple");
hashSet.set("banana");
hashSet.set("carrot");
hashSet.set("dog");
hashSet.set("elephant");
hashSet.set("frog");
hashSet.set("grape");
hashSet.set("hat");
hashSet.set("ice cream");
hashSet.set("jacket");
hashSet.set("kite");
hashSet.set("lion");
console.log("Add 12 keys to HashSet.");

console.log("HashSet keys: ", hashSet.keys());

console.log("HashSet length: ", hashSet.length());
console.log("HashSet capacity: ", hashSet.capacity);
console.log(
  "HashSet load levels = length / capacity = ",
  hashSet.length() / hashSet.capacity
);
console.log("HasSet load factor = ", hashSet.loadFactor);
console.log("HashSet at full capacity.");
hashSet.set("moon");
console.log("Add key 'moon'.");
console.log("HashSet length: ", hashSet.length());
console.log("HashSet capacity: ", hashSet.capacity);
console.log(
  "HashSet load levels = length / capacity = ",
  hashSet.length() / hashSet.capacity
);
console.log("HasSet load factor = ", hashSet.loadFactor);
console.log("HashSet expanded, no longer at full capacity.");
