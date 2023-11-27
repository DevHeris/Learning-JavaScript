// Declaring and Invoking at the same time to avoid global scope pollution


// const user = "John";//Uncaught SyntaxError: redeclaration of const user because we already declared the variable in the global scope of the otherscript.js file

(function () {
    const user = "John"
    console.log(user); //John
    const hello = () => console.log('Hello from the IIFE');
    hello();//This cant be run outside the IIFE book because hello is only scoped in the IIFE
})();
//  Now we don't get an error because this user is not in the global scope but in the IIFE scope instead

// Another Illustration of IIFE. ADDing Parameters to your IIFE
(function (name) {
    console.log('Hello ' + name);
})('Veronica');

// Named IIFE
(function hello() {
    console.log('HELLO!');
})();

