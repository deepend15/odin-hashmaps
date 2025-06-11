import { HashMap } from "./hashmaps.js";

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
