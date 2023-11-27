// Ways to declare a variable
// var, let, const

let firstName = 'Dev';
let lastName = 'Heris';

console.log(firstName, lastName);

let age = 20; //This is initializing a variable and you want to initialize a variable before you use it

console.log(age);

// Naming Conventions
// - Only letters, numbers, underscores and dollar signs
// - Can't start with a number

// let 1name = 'heris'; is very wrong cause the identifier cant start with a number but it can end with a number tho

// Multi-Word Formatting
// firstName     camelCase
// first_name    underscore
// FirstName     PascalCase
// firstname     lowercase

// Reassigning Variables
age = 35;
console.log(age);

// You can also declare a variable and not assign it for example
let score;

score = 1;

console.log(score); /* Prints 1 */

if (true) {
    score = score + 1;
}
console.log(score); /* Prints 2 */


// To re-assingn a const

/* const x = 100;

x = 200;

console.log(x); */  /* You're getting an error because you cant re-assign a const like you did with var */

/* You also can't declare a const and not initialize, for instance; */
// const score1;

// As you can see youre getting an error by doing that which didnt give an error when you did it with let.


// an array is just multiple values
const arr = [1, 2, 3, 4];

// arr = [1, 2, 3, 4, 5]; this is giving an error too the only way to reassign this array is to use an array push method by pushing 5 to the end, like you have below;

arr.push(5);

console.log(arr);

// To reassing an object declared with const check below

const person = {
    name: 'Heris'
};

/* person = 'David'; wont work that way.the right way to do it is to use the name method shown below */

person.name = 'David'/* This prints the name david */
console.log(person);

// You can also add an email which wasnt initially included with the email method below

person.email = 'badairoinioluwa578@gmail.com'

// You can declare multiple values at once

let a, b, c; /* Notice that you didnt have to assingn values for a b and c since we use let to declare them */

const d = 10,
    e = 20,
    f = 30;

console.log(a); /*  This prints undefined since a wasn't assignes a value */
console.log(f); /* Prints 30 */