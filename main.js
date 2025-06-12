import { HashMap } from "./hashmap.js";

const test = new HashMap();
console.log("New HashMap created.");

// has, set, & get

console.log("HashMap has key 'apple'? ", test.has("apple"));

test.set("apple", "red");
console.log("Set key 'apple' with value 'red'.");

console.log("HashMap has key 'apple'? ", test.has("apple"));
console.log("Retrieve 'apple' value: ", test.get("apple"));

test.set("apple", "green");
console.log("Overwrite current 'apple' value with new value, 'green'.");

console.log("Retrieve 'apple' value: ", test.get("apple"));

// remove

test.remove("apple");
console.log("Remove key 'apple'.");

console.log("HashMap has key 'apple'? ", test.has("apple"));
console.log("Retrieve 'apple' value: ", test.get("apple"));

// length

test.set("apple", "red");
console.log("Set key 'apple' with value 'red'.");

test.set("banana", "yellow");
console.log("Set key 'banana' with value 'yellow'.");

test.set("carrot", "orange");
console.log("Set key 'carrot' with value 'orange'.");

console.log("HashMap length (aka # of entries): ", test.length());

// clear

test.clear();
console.log("Remove all entries from HashMap.");

console.log("HashMap length: ", test.length());

// keys

test.set("apple", "red");
test.set("banana", "yellow");
test.set("carrot", "orange");
test.set("dog", "brown");
test.set("elephant", "gray");
test.set("frog", "green");
test.set("grape", "purple");
test.set("hat", "black");
test.set("ice cream", "white");
test.set("jacket", "blue");
test.set("kite", "pink");
test.set("lion", "golden");
console.log("Add 12 entries to HashMap.");

console.log("HashMap keys (no values): ", test.keys());

// values

console.log("HashMap values (no keys): ", test.values());

// entries

console.log("HashMap entries (key-value pairs): ", test.entries());

// HashMap length is currently 12; adding a new entry will cause the load levels (length / capacity) to exceed the load factor (0.75). In response, the HashMap's capacity will double, and all previous entries, including the newest one just added, will be re-hashed and redistributed across the new buckets.

console.log("HashMap length = ", test.length());
console.log("HashMap capacity = ", test.capacity);
console.log(
  "HashMap load levels = length / capacity = ",
  test.length() / test.capacity
);
console.log("HashMap load factor = ", test.loadFactor);
console.log(
  "Since the HashMap's load levels are equal to its load factor, the HashMap is at full capacity."
);

test.set("moon", "silver");
console.log("Set key 'moon' with value 'silver'.");

console.log("HashMap length = ", test.length());
console.log("HashMap capacity = ", test.capacity);
console.log(
  "HashMap load levels = length / capacity = ",
  test.length() / test.capacity
);
console.log("HashMap load factor = ", test.loadFactor);
console.log(
  "Since the HashMap was at full capacity, when a new entry was added, the HashMap's capacity doubled and its entries were redistributed. Its load levels are now lower than its load factor. All HashMap methods work as expected on the expanded HashMap."
);
