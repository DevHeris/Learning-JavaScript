const strLit = "Hello";
const strObj = new String("Hello");

console.log(strLit, typeof strLit);
console.log(strObj, typeof strObj);

// Boxing in Javascript i.e wrapping primitive types into the corresponding object
console.log(strLit.toUpperCase()); //HELLO
console.log(strObj[0]); //H

// Unboxing i.e converting object into string
console.log(strObj.valueOf(), typeof strObj.valueOf());

console.log(strLit.constructor);
console.log(strObj.constructor);

console.log(strLit instanceof String); // false
console.log(strObj instanceof String); // true

// You can also perform all this with other primitive values like number, boolean

const functLit = function (x) {
  return x * x;
};

console.log(functLit, typeof functLit);

console.log(functLit(2));

// Using the function constructor to create that function instead

const funcObj = new Function("x", "return x * x");

console.log(funcObj(3));

const obj1 = {};
const obj2 = new Object();

console.log(obj1, typeof obj1); // object
console.log(obj2, typeof obj2); // also object
