// 1. ................................Arithmetic Operators

let x; //This is known as a declaration statement i.e we are declaring the variable x

x = 5 + 5; //Addition operator
x = 5 - 5; //Subtraction operator
x = 5 * 5; //Multiplication operator
x = 5 / 5; //Division operator
x = 5 % 5; //Modulus(or Remainder) operator /* This gives us the remainder */


//....Concatenation Operator
/* The plus + sign is also the operator for concatenation */

x = 'Hello' + ' ' + 'World'

//....Exponent Operator
/* The operator here is double astericks */
x = 2 ** 5;

// ....Increment operator (++)
x = 4;
// To increament x by 1 use any of the methods below;
// x++; /* or */
// x = x + 1;

// ....Decrement Operator (--)
// Both methods below decrease x by 1
// x--; /* or */
// x = x - 1;

console.log(x);

// 2............................. Assignment Operators
//....Value assignment operator
y = 50;

// y += 5; //This line is the same as the line below
y = y + 5;
y -= 5; //i.e y=y-5 and so on
y *= 5;
y %= 5;
y **= 5;

console.log(y);

// 3. ..............................Comparison Operators

z = 2 == 2; /* The double equal operator is used here as an Evaluation while the single equal is working as an assignment ie assigning a value to z */ /* Also if you ha d used z = 2==3 you would have gotten a false and not a true like you did got here */

// We also a have the Equal value and Equal type operator which is a tripple equals(===)
z = 2 === '2'
/* Check out your note for the differences between the double and the tripple equal but the gist is that the tripple is for further confirmation  so the tripple equls evaluates not only the value but also the type */
console.log(z);

// We also have the not equals which is represented by the exclamation mark(!)

c = 4 != 4;
console.log(c); //We get a false because 4 is actually equal to 4

d = 4 !== '4';
console.log(d); // You get a true becuse of a similar reason i explained above

// Greater and less than
g = 10 > 1; //True
g = 59 < 56; // false
g = 55 >= 55; /* This is greater than or equal to */ //True
g = 10 <= 5; //False

console.log(g);


//  Book lesson on expression and operators

/* When JavaScript
sees combined expressions like this, it has to break the combination down and evaluate
it in parts, like so: */
let e, f;
f = e = 3 * 5; // original statement
f = e = 15; // multiplication expression evaluated
f = 15;      // first assignment evaluated; e now has value 15,
// f is still undefined
15;        // second assignment evaluated; f now has value 15,
// the result is 15, which isn't used or assigned to
// anything, so this final value is simply discarded


/* The natural question is “How did JavaScript know to execute the expressions in that
order ?” That is, it could have reasonably done the assignment f = e first, giving f the
value undefined, and then evaluated the multiplication and the final assignment,
    leaving f as undefined and e as 15. The order in which JavaScript evaluates expressions
is called OPERATOR PRECEDEDNCE */


// Unary negation arithmetic operators
let k = 4;
k = -k; //This give k a value of -4
console.log(k);



//Unary plus (Recall that this is a method of converting a string into a number like when you did amount = +amount to convert the initial string value to a number data type)

let s = '3';
s = +s;
console.log(s, typeof s); //ie if s is not a number, this will attempt conversion


// check out the difference between the reult of unary plus and string concatenation

const b = '80';
l = 5 + +b; //with the unary plus here the resukt is 85 but without it the reult would be a string of 580(string concatenation)
console.log(l, typeof l);

//Remainder operator
u = 10 % 2.8;
console.log(u);

//pre and post increament/decrement operators
/* I don't understand this yet */ //I now understand it now. remember to evaluate from left to right
let q = 2;
const r1 = q++ + q++; //result is 5 and q is now 4
const r2 = ++q + ++q; //result is 11 and q is now 6
const r3 = q++ + ++q; //result is 14 and q is now 8
const r4 = ++q + q++; //result is 18 and q is now 10

let m = 10;
const r5 = m-- + m--; //result is 19 and m is now 8
const r6 = --m + --m; //result is 13 and m is now 6
const r7 = m-- + --m; //result is 10 and m is now 4
const r8 = --m + m--; //result is 6 and m is now 2

console.log(r8, typeof r8);

// Note there is some serious shit going on here that you might actually require a piece of paper to get the results above

// Update: I understand it now:

// Consider the difference between these two lines of code:
var i = 1, j = ++i; // i and j are both 2
var i = 1, j = i++; // i is 2, j is 1


// Operator precedence
/* I dont really get this yet either  (PEDMAS) */


/* Operators at the same precedence level are either evaluated right to left or left to right.
For example, multiplication and division have the same precedence level(14) and are
evaluated left to right, and assignment operators(precedence level 3) are evaluated
right to left.Armed with that knowledge, we can evaluate the order of operations in this example: */
let p = 3, w;
p += w = 6 * 5 / 2;
// we'll take this in order of precedence, putting parentheses around
// the next operation:
//
// multiplication and division (precedence level 14, left to right):
//p+= w = (6*5)/2
//p+= w = (30/2)
//p+= w = 15
// assignment (precedence level 3, right to left):
// p += (w = 15)
// p += 15 (w now has value 15)
// 18 (p now has value 18)

/* Understanding operator precedence may seem daunting at first, but it quickly becomes second nature. */

// ..............................Comparison operators

// const n = 5;
// const s = "5";
// n === s; // false -- different types
// n !== s; // true
// n === Number(s); // true -- "5" converted to numeric 5
// n !== Number(s); // false
// n == s; // true; not recommended
// n != s; // false; not recommended
// const a = { name: "an object" };
// const b = { name: "an object" };
// a === b; // false -- distinct objects
// a !== b; // true
// a == b; // false; not recommended
// a != b; // true; not recommended

// Relational operator is a type of comparison operator



// Comma Operator
let o = 0, r = 10, n;
n = (o++, r++); //returns 10

// This operator evaluates both expression and returns the value of just the final expression i.e it only returns the value of the r++
console.log(n);

// Typeof operator 
let t = 'null';
console.log(t, typeof t); //Youre getting a typeof object even if it should be a null primitive type

// Destructuring assignment

// a normal object
const obj = { b1: 2, c1: 3, d1: 4 };
// object destructuring assignment
const { a1, b1, c1 } = obj;
a1; // undefined: there was no property "a1" in obj
b1; // 2
c1; // 3
/* d1;  */   // reference error: "d1" is not defined
console.log(c1);

// array destructuring can be used to swap the values of variables
let a2 = 5, b2 = 10;
[a2, b2] = [b2, a2];
a2; // 10
b2; // 5

console.log(a2);


//Expressions in template strings
const roomTempC = 21.5;
let currentTempC = 19.5;
const message = `The current temperature is ` +
    `${currentTempC - roomTempC}\u00b0C different than room temperature.`;

console.log(message);