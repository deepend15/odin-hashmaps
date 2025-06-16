import { LinkedList } from "./linkedlist.js";

export class HashMap {
  constructor() {
    this.capacity = 16;
    this.loadFactor = 0.75;
    this.buckets = [];

    for (let i = 0; i < this.capacity; i++) {
      this.buckets.push(new LinkedList());
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

  set(key, value) {
    const hashCode = this.hash(key);
    if (hashCode < 0 || hashCode >= this.buckets.length) {
      throw new Error("Trying to access index out of bounds");
    }
    const bucket = this.buckets[hashCode];

    if (bucket.contains(key)) {
      const bucketWithKey = bucket.at(bucket.find(key));
      bucketWithKey.value = value;
    } else bucket.append(key, value);

    if (this.length() > this.capacity * this.loadFactor) {
      const storedEntries = this.entries();
      this.clear();
      this.capacity = this.capacity * 2;
      this.buckets = [];
      for (let i = 0; i < this.capacity; i++) {
        this.buckets.push(new LinkedList());
      }
      for (const entry of storedEntries) {
        this.set(entry[0], entry[1]);
      }
    }
  }

  get(key) {
    const hashCode = this.hash(key);
    if (hashCode < 0 || hashCode >= this.buckets.length) {
      throw new Error("Trying to access index out of bounds");
    }
    const bucket = this.buckets[hashCode];

    if (bucket.contains(key)) {
      const bucketWithKey = bucket.at(bucket.find(key));
      return bucketWithKey.value;
    } else return null;
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
        delete bucket.value;
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

  values() {
    const valuesArray = [];

    for (const bucket of this.buckets) {
      if (bucket.size() > 0) {
        const bucketSize = bucket.size();

        for (let i = 0; i < bucketSize; i++) {
          const bucketNode = bucket.at(i);
          const nodeValue = bucketNode.value;
          valuesArray.push(nodeValue);
        }
      }
    }

    return valuesArray;
  }

  entries() {
    const pairsArray = [];

    for (const bucket of this.buckets) {
      if (bucket.size() > 0) {
        const bucketSize = bucket.size();

        for (let i = 0; i < bucketSize; i++) {
          const bucketNode = bucket.at(i);
          const nodeKey = bucketNode.key;
          const nodeValue = bucketNode.value;
          pairsArray.push([nodeKey, nodeValue]);
        }
      }
    }

    return pairsArray;
  }
}
