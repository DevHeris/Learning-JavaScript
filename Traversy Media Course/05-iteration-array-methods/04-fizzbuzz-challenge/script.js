for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz');
    } else if (i % 3 === 0 || i % 5 === 0) {
        if (i % 3 === 0) {
            console.log('Fizz');
        } else {
            console.log('Buzz');
        }
    } else {
        console.log(i);
    }
}


// OR
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz2');
    } else if (i % 3 === 0) {
        console.log('Fizz2');
    } else if (i % 5 === 0) {
        console.log('Buzz2');
    } else {
        console.log(i);
    }
}


// OR
let i = 1;
while (i <= 100) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz3');
    } else if (i % 3 === 0) {
        console.log('Fizz3');
    } else if (i % 5 === 0) {
        console.log('Buzz3');
    } else {
        console.log(i);
    }

    i++
}