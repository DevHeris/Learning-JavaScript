// Primitive Values are stored on the Stack
const name = 'Heris';
const age = 20;

// Reference Values are stored on the Heap

const person = {
    name: 'Inioluwa',
    age: 25,
};

let newName = name;
newName = 'Badairo';

let newPerson = person;
newPerson.name = 'Samuel'

console.log(person, newPerson); //So person and newPerson are the same because they are both stored in the same spot in the heap and are being accessed by a reference

console.log(name, newName); //But here, the name and newName arent the same because with primitive values they are stored right on the stack



// With stacks, its like stacking texbooks on top of each other but you cant take/remove from it once its there


// Heap allows you to store memory in any order and can be accessed from anywhere