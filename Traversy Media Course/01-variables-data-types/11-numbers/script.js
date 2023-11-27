let x;

const num = 5;
//To string method
x = num.toString();

//There is no length property for numbers but if you are so desperate to get the number of digits a number is you have to first convert the number to a string first
x = num.toString().length; //1 since 1 is just a digit. Would be 2 is num was like 45 or and 2 digit sha

//toFixed method allow you to specify the number of decimal points
x = num.toFixed(3); //5.000 which is a string representation of a decimal

// toPrecision allows you to specify the number of significant figure instead
x = num.toPrecision(4); //5.000 which is also a string

//toExponential returns a string containing a number represented in exponential notation.
x = num.toExponential(3); //5.000e+0

//toLocaleString 
x = num.toLocaleString('en-US'); //5 is represented as 5 in the US

console.log(x, typeof x);



//This are the possible methods for numbers

// constructor: function Number()

// toExponential: function toExponential()

// toFixed: function toFixed()

// toLocaleString: function toLocaleString()

// toPrecision: function toPrecision()

// toString: function toString()

// valueOf: function valueOf()console.log(object);