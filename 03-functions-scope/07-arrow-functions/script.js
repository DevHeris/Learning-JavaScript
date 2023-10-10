/* Arrow functions allow you to simplify syntax in three ways:
• You can omit the word function.
• If the function takes a single argument, you can omit the parentheses.
• If the function body is a single expression, you can omit curly braces and the
return statement. */


const f1a = function () {
    return "hello!";
}
// OR
const f1b = () => "hello!";

const f2a = function (name) {
    return `Hello, ${name}!`;
}
// OR
const f2b = name => `Hello, ${name}!`;

const f3a = function (a, b) {
    return a + b;
}
// OR
const f3b = (a, b) => a + b;


//Video Lesson Starts

//Regular Notation
// function add(a, b) {
//     return a + b;
// }

// console.log(add(1, 2));

// Arrow function Syntax
const add = (a, b) => {
    return a + b;
};

//Implicit Return
const subtract = (a, b) => a - b;

// Can leave off () with a single param
const double = a => a * 2;


// Returning of an object
const createObj = () => ({//object and not a function block or whatever
    name: 'Heris'
});

const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function (n) {
    console.log(n);
});

//Using the arrow notation for the above. Array function in a callback
numbers.forEach(n => console.log(n));


console.log(add(1, 2));
console.log(subtract(10, 6));
console.log(double(5));
console.log(createObj());//undefined
