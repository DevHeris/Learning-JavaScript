/* console.log('before block');
{//Standalone block
    console.log('inside block');
    const x = 3;
    console.log(x); // logs 3
}
console.log(`outside block; x=${x}`); // ReferenceError: x is not defined */

//Video Lesson Begins

const x = 100;
const foo = 1;
var bar = 2;
// Illustration 1(if statements)
if (true) {//this is a block
    const y = 200;
    console.log(x + y);
}
// console.log(x + y);// wont work because of y 

// Illustration 2
for (let i = 0; i <= 10; i++) {//also a block
    console.log(i);
}
// console.log(i);//says i is not defined

//Difference between var, let and const

// Var is not block level scoped

if (true) {
    const a = 500;
    let b = 600;
    var c = 700;
}

// console.log(a); ReferenceError: a is not defined
// console.log(b); ReferenceError: b is not defined
console.log(c); //700

function run() {
    var d = 100;
    console.log(d);
}

run();

// console.log(d);//ReferenceError: d is not defined
// So why does it now say reference error this time? Because var is function scoped even tho its not block scoped

//Also when you use var to declare a global variable(bar) it actually gets added to the window object in the console but for let and var, they dont get added. You can check by typing window in the console then clicking the arrow


//Videos Lesson Ends


/* // Variables declared with var can be referenced before they're declared:
console.log(z);//undefined
var z = 3;
console.log(z);//3


// With let, you will get an error if you try to use a variable before it’s been declared:
console.log(y);//Uncaught ReferenceError: can't access lexical declaration 'y' before initialization
let y = 3;
console.log(y);//we'll never get here -- the error stops execution
 */
