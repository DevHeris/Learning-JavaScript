// Primitive Data Types


// Strings
const firstName = 'Inioluwa';

// Numbers
const age = 20;
const temp = 98.9;

// Boolean
const hasKids = true;

// Null
const aptNumber = null;

// Undefined
// let score;

const score = undefined;/* i.e two methods of setting null data type */

// symbol
const id = Symbol('id'); /* I guess you have to use a capital letter S and not a small one */

// BigInt
const n = 9007199254740991n;


// Reference Types

/* Arrays, object literals, functions etc */
const numbers = [1, 2, 3, 4];

const person = {
    name: 'Heris'
};

function sayHello() {
    console.log('Hello');
}



const output = sayHello;
console.log(output, typeof output);

// Note that this last two lines were a constant throughout, the only thing that was changing was the value of the output. for instance when we wanted to know the type of data age was we used const output=age and so on for person, id etc. So using output is just a shortcut so we dont always have to type in the identifier every single time.



// Book Lesson( More details in your note)

// Numbers
let count = 10; // integer literal; count is still a double
const blue = 0x0000ff; // hexadecimal (hex ff = decimal 255)
const umask = 0o0022; // octal (octal 22 = decimal 18)
const roomTemp = 21.5; // decimal
const c = 3.0e6; // exponential (3.0 × 10^6 = 3,000,000)
const e = -1.6e-19; // exponential (-1.6 × 10^-19 = 0.00000000000000000016)
const inf = Infinity;
const ninf = -Infinity;
const nan = NaN; // "not a number"

// String

// This below is called string concatenation
let currentTemp = 19.5;
// 00b0 is the Unicode code point for the "degree" symbol
const message1 = "The current temperature is " + currentTemp + "\u00b0C";
console.log(message1);

// The newer version of javascript ES6 now allows us perform the same fuction using TEMPLATE STRINGS instead

const message2 = `The current temperature is ${currentTemp}\u00b0C`;
console.log(message2);

// Multiline strings

/* const multiline = "line1 /
 line2";         Printing this wont actually print line2 on a new line */

const multiline = `line1
line2`; /* This actually gets the job done. i.e line2 is actually on line two (note that backtick was used) */
console.log(multiline);



// You can mix and match types of strings in string catenation or use template string
const multiline1 = 'Current temperature:\n' +
    `\t${currentTemp}\u00b0C\n` +
    "Don't worry...the heat is on!";
console.log(multiline1);

// The template string method goes this way
const multiline2 = `current temperature:\n\t${currentTemp}\u00b0\nDon't worry...the heat is on!`
console.log(multiline2);

// Symbols are unique and the ('') is just to describe the symbol, so its not neccesary
const RED = Symbol();
const ORANGE = Symbol('The color of a sunset');
console.log(ORANGE);

// Objects
let obj = {}

const SIZE = Symbol();
obj[SIZE] = 8;
obj[SIZE];

console.log(obj);


// Object Keys(name) and Values make up the property(method)
const sam1 = {
    name: 'Sam',
    age: 4,
};

const sam2 = { name: 'Sam', age: 4 }; // declaration on one line
const sam3 = {
    name: 'Sam',
    classification: {         // property values can be objects themselves
        kingdom: 'Anamalia',
        phylum: 'Chordata',
        class: 'Mamalia',
        order: 'Carnivoria',
        family: 'Felidae',
        subfaimily: 'Felinae',
        genus: 'Felis',
        species: 'catus',
    },
};
console.log(sam3);

// Adding a function to an object and how to call it
sam3.speak = function () { return "Meow!"; };
sam3.speak();

console.log(sam3);

// Lastly, we can delete a property from an object with the delete operator:
delete sam3.classification; // the whole classification tree is removed
delete sam3.speak; // the speak function is removed
console.log(sam3);

// Assigning property to a string and not an object?[Numbers,strings and boolean objects]
const s = "hello";
s.toUpperCase();
// You are to write this in the console and the result will be HELLO. Same for the one below

const y = "hello";
y.rating = 3; // no error...success?
y.rating; // undefined
// JavaScript allows us to do this, making it seem like we’re assigning a property to the
// string s.What’s really happening, though, is that we’re assigning a property to the
// temporary String object that’s created.That temporary object is immediately discarded,
//     which is why s.rating is undefined.


// Arrays
const a1 = [1, 2, 3, 4]; // array containing numbers
const a2 = [1, 'two', 3, null]; // array containing mixed types
const a3 = [ // array on multiple lines
    "What the hammer? What the chain?",
    "In what furnace was thy brain?",
    "What the anvil? What dread grasp",
    "Dare its deadly terrors clasp?",
];
const a4 = [ // array containing objects
    { name: "Ruby", hardness: 9 },
    { name: "Diamond", hardness: 10 },
    { name: "Topaz", hardness: 8 },
];
const a5 = [ // array containing arrays
    [1, 3, 5],
    [2, 4, 6],
];
console.log(a2);
console.log(a4);

// Arrays have a property length, which returns the number of elements in the array:
const arr = ['a', 'b', 'c'];
arr.length; // 3


// geting the elements of an array:(ps: this values go in the console to get the result)
arr[0]; // 'a'
arr[2]; // 'c'
arr[arr.length - 1]; //also prints 'c'

// Overwriting the value at a specific array index
const arr1 = [1, 2, 'c', 4, 5];
arr1[2] = 3;    // arr is now [1, 2, 3, 4, 5]


// Date

// To create a date that’s initialized to the current date and time, use new Date():
const now = new Date();
now; // example: Thu Aug 20 2015 18:31:26 GMT-0700 (Pacific Daylight Time)
console.log(now);


// To create a date that’s initialized to a specific date(at 12:00 a.m.):
const halloween = new Date(2016, 9, 31); // note that months are
// zero-based: 9=October
console.log(halloween);


// To create a date that’s initialized to a specific date and time:
const halloweenParty = new Date(2016, 9, 31, 19, 0); // 19:00 = 7:00 pm
console.log(halloweenParty);


// Once you have a date object, you can retrieve its components:(ps: this once are to be typed in the console to get the result)
halloweenParty.getFullYear(); // 2016
halloweenParty.getMonth(); // 9
halloweenParty.getDate(); // 31
halloweenParty.getDay(); // 1 (Mon; 0=Sun, 1=Mon,...)
halloweenParty.getHours(); // 19
halloweenParty.getMinutes(); // 0
halloweenParty.getSeconds(); // 0
halloweenParty.getMilliseconds(); // 0


// Data Type conversion

// Converting to numbers
const numStr = '23.4';
console.log(numStr, typeof numStr); //This is a string

// To convert th string into a number we use the number object constructor
const num = Number(numStr);
console.log(num, typeof num);


// Converting to strings
const h = 24;
console.log(h, typeof h); //This is a number

// To convert to a string we use a toString function that every object has in Javasript

const j = h.toString();
console.log(j, typeof j);

// Arrays, quite usefully, take each of their elements, convert them to strings, and then join those strings with commas:
const arr2 = [1, true, "hello"];
const arr3 = arr2.toString(); // "1,true,hello"
console.log(arr3, typeof arr3);

// Converting to boolean
// we can convert any value to a boolean by using the “not” operator(!) twice.Using it once converts the value to a boolean, but the opposite of what you want; using it again converts it to what you expect.As with numeric conversion, you can also use the Boolean constructor(again, without the new keyword) to achieve the same result:
const l = 0; // "falsy" value
const b1 = !!l; // false
const b2 = Boolean(l); // false
