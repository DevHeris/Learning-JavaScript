function sayHello() {
    // this is the body; it started with an opening curly brace...
    console.log("Hello world!");
    console.log("¡Hola mundo!");
    console.log("Hallo wereld!");
    console.log("Привет мир!");
    // ...and ends with a closing curly brace
};//Function declaration

sayHello();// Function calling(call, invoke, and execute (as well as run) are interchangeable)

//Return value 
function getGreeting() {
    return "Hello world!";
}
// Now when we call that function, it will resolve to the return value:
getGreeting();
console.log(getGreeting());// Hello World!

//Calling and Referencing

// getGreeting(); // "Hello, World!">>>>>>>This is calling
console.log(getGreeting); // function getGreeting()>>>>>>>This is referencing


// Being able to reference a function like any other value(without calling it) allows a lot of flexibility in the language.For example, you can assign a function to a variable, which allows you to call the function by another name:
const g = getGreeting;
g(); // "Hello World!"
console.log(f());

// Or assign a function to an object property:
const o = {};
o.g = getGreeting;
console.log(o.g()); // "Hello World!"


// Or even add a function to an array:
const arr = [1, 2, 3];
arr[1] = getGreeting; // arr is now [1, function getGreeting(), 2]
arr[1](); // "Hello World!"
console.log(arr[1], arr[1]());


// Function arguments
function avg(a, b) {
    return (a + b) / 2;
}

console.log(avg(4, 6));//5


//The function arguments are totally not the same as the variables outside the function that happen to have the same name
function f(x) {
    console.log(`inside f: x=${x}`);
    x = 5;
    console.log(`inside f: x=${x} (after assignment)`);
}

let x = 3;
console.log(`before calling f: x=${x}`);
f(x);
console.log(`after calling f: x=${x}`);

// It is, however, possible to modify an object type in a function in such a way that the object itself changes, which will be visible outside of the function:
function k(c) {
    c.message = `set in f (previous value: '${c.message}')`;
}
let c = {
    message: "initial value"
};
console.log(`before calling f: c.message="${c.message}"`);
k(c);
console.log(`after calling f: c.message="${c.message}"`);


// Youtube Video 
//Basic way to write a function
function sayHello() {
    console.log('Hello world');
};

sayHello();

//Passing information(data) into a function using parameters which is a little bit different from arguments ut can be used interchangeably
function add(num1, num2) {
    console.log(num1 + num2);
};

add(1, 2);//3

// Returning a value. NOTE the function you declared above just now doesnt return a value, they are just simply doing a console log but usually we want a function to return something

function subtract(num1, num2) {
    return num1 - num2;

    console.log('After Return');//Unreachable code after the return statement i.e it doesnt execute anything after
};

subtract(30, 5);//You dont get anything in the console with this because you havent done any console log. All you did was return the value of the expression

const result = subtract(10, 2);

console.log(result, subtract(20, 5));
