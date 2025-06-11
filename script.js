import { LinkedList } from "./linkedlists.js";

class HashMap {
  constructor() {
    this.capacity = 16;
    this.loadFactor = 0.75;
    this.buckets = [];

    for (let i = 0; i < this.capacity; i++) {
      this.buckets.push(new LinkedList());
    }
  }

  //   generateBuckets() {
  //     let capacity = this.capacity;
  //     for (i = 0; i < capacity; i++) {
  //       this.buckets.push(new LinkedList());
  //     }
  //   }

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
    const bucket = this.buckets[hashCode];

    if (bucket.contains(key)) {
      const bucketWithKey = bucket.at(bucket.find(key));
      bucketWithKey.value = value;
    } else bucket.append(key, value);
  }

  get(key) {
    const hashCode = this.hash(key);
    const bucket = this.buckets[hashCode];

    if (bucket.contains(key)) {
      const bucketWithKey = bucket.at(bucket.find(key));
      return bucketWithKey.value;
    } else return null;
  }

  has(key) {
    const hashCode = this.hash(key);
    const bucket = this.buckets[hashCode];

    return bucket.contains(key);
  }
}

let hash = new HashMap();
hash.set("apple", "red");
console.log(hash.hash("apple"));
console.log(hash.buckets[10]);
console.log(hash.has("apple"));
console.log(hash.get("apple"));
console.log(hash.has("banana"));
console.log(hash.get("banana"));
hash.set("apple", "green");
console.log(hash.buckets[10]);
console.log(hash.get("apple"));

