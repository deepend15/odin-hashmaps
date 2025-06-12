import { HashMap } from "./hashmap.js";

let hash = new HashMap();
hash.set("apple", "red");
hash.set("banana", "green");
hash.set("fruit", "green");
hash.set("blue", "blue");
console.log(hash.keys());
console.log(hash.values());
console.log(hash.entries());
