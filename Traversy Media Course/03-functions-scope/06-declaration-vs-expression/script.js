//Another way to create a function is to use a function expression

//Function Declaration
function addDollarSign(value) {
    return '$' + value;
}

console.log(addDollarSign(100));

// Function Expression
const addPlusSign = function (value) {
    return '+' + value;
};

console.log(addPlusSign(200));


//Note only declarations are available before exectution(hoisting related) which is why if you  put that console log with the addDollar.. at the top of the code, javaScript will still run it but if you put the second console log with addPlus... before the declaration of the addPlus... variable we will get ( Uncaught ReferenceError: can't access lexical declaration 'addPlusSign' before initialization)

// i.e with function declarations you can call it before hand but for expression you can't