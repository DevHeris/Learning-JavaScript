// Create a new string called "myNewString" that holds the value of "Developer", using the value from "myString"
const myString = 'developer';

//My Solution

let myNewString;
//So I want to use template strings
const capitalD = myString[0].toUpperCase();
const eveloper = myString.slice(1);

myNewString = `${capitalD}${eveloper}`;
console.log(myNewString, typeof myNewString);//Developer

//Nice Work man

//You can also use the substring/slice method

//His Other faster solutions

/* // Solution 1
const myNewString = myString[0].toUpperCase() + myString.slice(1);//This is the fastest method where you dont have to create other variables or constants */
//This is the concatenation method

/* // solution 2
const myNewString = `${myString[0].toUpperCase()}${myString.slice(1)}`;//Template literal method

//This is very similar to my own method but i really didnt have to create new variables
 */

//Solution 3
// const myNewString = myString.charAt(0).toUpperCase() + myString.substring(1);// Also concatenation

