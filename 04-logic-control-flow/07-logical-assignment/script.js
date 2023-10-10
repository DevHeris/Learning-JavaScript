// ||= assigns the right side value only if the left is a falsy value.

let a = false;

if (!a) {//i.e if its a falsy value
    a = 10;
}


//Short way is;
a = a || 10; //10

console.log(a); //The if and the short way return the same value of 10


//an even shorter way is to use the assignment operator
a ||= 10;
console.log(a);//also prints 10 which is also the same as a= a||10


// &&= assigns the right side value only if the left is a truthy value.
let b = 10;

if (b) {
    b = 20;
}

//Short way is;
b = b && 20;

//even shorter way is
b &&= 20;

console.log(b);// we get 20 because b is truthy


// ??= assigns the right side value only if the left  is null or undefined.

//Long version
let c = undefined;
if (c === null || c === undefined) {
    c = 30;
}

// Short way is;
c = c ?? 30;
// or
c ??= 30

console.log(c);