let a;
const name = 'Heris';
const age = 20;
a = 'Hello, my name is ' + name + ' and I am ' + age + ' years old';//String concatenation method.

a = `Hello, my name is ${name} and i am ${age} years old`;//Template String method.
//Note that this syntax(${}) is not just for variables. you can also have something like ${1 + 1}.

console.log(a);
// String Properties and Methods
const b = 'Hello World';

/* const b = new String('Hello World');//This is what JavaScript does behind the scene when a property is assigned to a primitive data type.It converts it to a temporary string object
d = typeof b;
console.log(d);//Object
 */

c = b.length;// Length Property
console.log(c, typeof c);//11

/* Accessing the individual characters in a string */ //Called accessing by the Key
c = b[6];//W
console.log(c);//I guess the whitespace doesnt count as a character. UPDATE: It is a character actually.The mistake i made was i didnt know the numbering starts from 0 and not 1 so use [5] instead if you want to get the whitespace character.


//Methods
//The prototype shows you all the methods you can use with a string. so how do you access object Prototypes. How?
const e = 'Hey There';
f = e.__proto__;//returns all the possible methods for the string e


//Changing the case
f = e.toUpperCase();
f = e.toLowerCase();


// charAt which returns the character at the specified index;
f = e.charAt(1);//e

// indexOf to know the index of a specific character
f = e.indexOf('T');//4

//substring which searches a string for a specified value
f = e.substring(1, 7);//ey The   //Double argument string
f = e.substring(4);//There       //Single argument string

//slice which is very similar to substring but can take a negative number;
f = e.slice(-7);//y There

//trim which trims the whitespace at the beginning or at the end like when you have "       hello";
f = e.trim();

//replace which searches for a word and replaces it with a new word;
f = e.replace('Hey', 'You');// You There

//includes which returns a true or false if a substring is found within that string;
f = e.includes('Hello'); //False

// valueOf which returns the primitive value of a variable
f = e.valueOf();//Hello World

//split which splits a string into an array
f = e.split();// [ "Hey There" ]
f = e.split('');// [ "H", "e", "y", " ", "T", "h", "e", "r", "e" ]
f = e.split(' ');// [ "Hey", "There" ]


console.log(f);
