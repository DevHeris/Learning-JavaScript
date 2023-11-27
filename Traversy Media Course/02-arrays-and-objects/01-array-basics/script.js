// Array Literals which is more common
const numbers = [1, 2, 3, 4, 5];

//Array constructor
const arr = new Array(1, 2, 'Hi', 3, 4);

console.log(arr);
console.log(numbers);

// Accessing a specific item by its index
x = numbers[3];

x = arr[4] + numbers[4];

x = `She said ${arr[2]}`;

// You can have a mixed array too

// Array length property
x = arr.length; //5

//Changing the value of an at a specific index
arr[2] = "HEY THERE!"
console.log(arr[2]);

// Adding on to the end of an array without the method push()
numbers[5] = 'you'; //This is doing it the hard-coded way by selecting an index thats not initially there

//Another way is to set the index to the length
numbers[numbers.length] = 'YOU';

x = numbers;

console.log(x);