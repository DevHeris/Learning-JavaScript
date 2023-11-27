/* let x = Math.floor(Math.random() * 100 + 1);
console.log(x);


let y = Math.floor(Math.random() * 50 + 1);
console.log(y);

let sumOutput, differenceOutput, productOutput, quotientOutput, remainderOutput;

sumOutput = x + y;
console.log(sumOutput);

differenceOutput = x - y;
console.log(differenceOutput);

productOutput = x * y;
console.log(productOutput);

quotientOutput = x / y;
console.log(quotientOutput);

remainderOutput = x % y;
console.log(remainderOutput); */

//MY SOLUTION IS WRONG BECAUSE IT DOESNT ACTUALLY FOLLOW THE INSTRUCTION WHICH SAYS LOG THE OUTPUT IN A STRING THAT SHOWS THE TWO NUMBERS OF X AND Y ALONG WITH THE OPERATOE AND RESULT



// Here's my correction

const x = Math.floor(Math.random() * 100 + 1);
const y = Math.floor(Math.random() * 50 + 1);

// Sum
const sum = x + y;
const sumOutput = `${x} + ${y} = ${sum}`;
console.log(sumOutput);

//Difference
const difference = x - y;
const differenceOutput = `${x} - ${y} = ${difference}`;
console.log(differenceOutput);

// Product
const product = x * y;
const productOutput = `${x} * ${y} = ${product}`;
console.log(productOutput);

// Quotient
const quotient = x / y;
const quotientOutput = `${x} / ${y} = ${quotient}`;
console.log(quotientOutput);

// Remainder
const remainder = x % y;
const remainderOutput = `${x} % ${y} = ${remainder}`;
console.log(remainderOutput);

// Now i'm through. I didn't read the instruction clearly at first



