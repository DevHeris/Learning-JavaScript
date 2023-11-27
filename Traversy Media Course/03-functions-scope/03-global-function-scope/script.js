// alert('Hello');
// console.log(window.innerWidth);

const x = 100;//Variables in global can be accessed by many things

console.log(x, 'in global');

function run() {
    console.log(window.innerHeight);
    console.log(x, `in function`);
}

run();

if (true) {
    console.log(x, `in block`);
}

//Function Scope
function add() {
    const x = 10;//variable masking/shadowing
    const y = 50;
    console.log(y);
    console.log(x + y);
}

// console.log(y);//y is not defined

add();