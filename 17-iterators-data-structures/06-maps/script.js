// Creating a new Map
const myMap = new Map();

// Adding key-value pairs to the Map
myMap.set("name", "DevHeris");
myMap.set(1, "blue");
myMap.set(2, "red");

// Accessing values using keys
console.log(myMap.get(2)); // red

// Getting the size of the Map
console.log(myMap.size); // 3

// Checking for the presence of a key
console.log(myMap.has("name")); // true
console.log(myMap.has(3)); // false

// Deleting a key-value pair from the Map
myMap.delete(1);
console.log(myMap);

// Creating a Map of people with associated information
const peopleMap = new Map();
peopleMap.set("DevHeris", { phone: "555-555-555", email: "heris@gmail.com" });
peopleMap.set("Strange", { phone: "555-675-545", email: "strange@gmail.com" });
peopleMap.set("Ini", { phone: "555-555-555", email: "ini@gmail.com" });
peopleMap.set("Peter", { phone: "555-555-555", email: "peter@gmail.com" });

// Iterating through the Map and logging email addresses
peopleMap.forEach((person) => console.log(person.email));

// Logging keys, values, and entries of the Map
console.log([...peopleMap.keys()]);
console.log([...peopleMap.values()]);
console.log([...peopleMap.entries()]);

// Using an iterator to manually iterate through the Map values
const iterator = peopleMap.values();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

// Converting the Map to an array of key-value pairs
const peopleArray = Array.from(peopleMap);
console.log(peopleArray);
