if (true) {
    console.log('This is true');
}//will run

if (false) {
    console.log('This is NOT true');
}//Wont run

const x = 10;
const y = 5;

if (x > y) {
    console.log(`${x} is greater than ${y}`);
};//Will run

if (x === y) {
    console.log(`${x} is equal to ${y}`);
}//Wont run

else {
    console.log(`${x} is not equal to ${y}`);
};//Will run

if (x !== y) {
    const z = 20;
    console.log(`${z} is 20`);
};// Wiil run

// console.log(z);//TESTING SCOPE|| z is undefined outside the scope of the 'if' block


// Shorthand If (not advisable tho).....//No curly braces
if (x >= y) console.log(`${x} is greater than ${y}`),
    console.log('hey');//i.e you can also have multiple lines but must be separated by a comma
else console.log(`${x} is not greater to ${y}`);
