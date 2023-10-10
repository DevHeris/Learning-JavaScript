//Falsy Values;

// - false
// - 0
// - undefined
// - null
// Empty String
// NaN

// Truthy Values;

// - Everything else that's not falsy
// - true
// - '0' (0 in a string)
// - ' ' (Whitespace in a string)
// - Empty Array []
// - Empty Object {}
// - Empty Function  function () {}


/* const email = 'test@gmail.com';

if (email) {//This was coerced to true by JS
    console.log('You passed in an email');
}

console.log(Boolean(email));//true
 */
const x = ' ';

if (x) {
    console.log('This is Truthy');
} else {
    console.log('This is Falsy');
}

console.log(Boolean(x));

// Truthy and Falsy caveats

//1) Web forms
const children = 0;

if (children !== undefined) {
    console.log(`You have ${children} children`);
} else {
    console.log(`Please enter number of chilren`);
}

// He said You can also use (!isNaN(childen)) which will give the same result as (children !== undefined)

// We are using this two instead of just (children) because the person might say she has 0 children which is false to JS, so it then returns please enter number of children again to the user after she answered she has 0 children

// 2) Checking for empty array (an array of blog posts but if there are no posts you want to say no post to show)

const posts = [/* 'Post ONE', 'Post TWO' */];

if (posts.length !== 0) {
    console.log('List Posts');
} else {
    console.log('No Posts To List');
}

// Similar explanation, so do it like this instead of just (posts) unless you will still get List post even if your array is empty

// 3) checking for empty objects

const user = {
    /*  name: 'DevHeris', */
};

if (Object.keys(user).length > 0) {//since the object-keys method takes the keys of an element and turns them into elements of an array
    console.log('List User');
} else {
    console.log('No User');
}

// 4) Loose Equaility (==) and strict equality
console.log(false == 0);// true
console.log(false === 0);  //false