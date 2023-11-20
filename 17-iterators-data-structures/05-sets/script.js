// Create a new Set with initial values [1, 2, 3, 4]
const set = new Set([1, 2, 3, 4]);

// Checking for membership
set.add(9);
console.log(set.has(9)); // true

// Deleting an element from the set
set.delete(1);
console.log(set.has(1)); // false

// Display the updated set
console.log(set);

// Convert the set to an array
const setArray = Array.from(set);
console.log(setArray);

// Iterating through the set using a for...of loop
for (const item of set) {
  console.log(item);
}

// Using an iterator to manually iterate through the set values
const iterator = set.values();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

// Clearing all elements from the set
set.clear();
console.log(set); // An empty set
