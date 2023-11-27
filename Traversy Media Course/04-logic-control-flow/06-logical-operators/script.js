// You can check your note to see the truth and falsy table

console.log(10 > 20 && 30 > 15); // false

console.log(10 > 20 || 30 > 15); //true

// && - Will return the FIRST FALSY VALUE or the LAST VALUE(if there is no falsy value)
let a;

a = 10 && 20;//20
a = 10 && 20 && 30;//30
a = 10 && 0 && 30;//0
a = 10 && '' && 30 && undefined; // <empty string>

console.log(a);

//When will i ever need this?

const posts = [];
console.log(posts[0]);//Returns undefined if the array is empty.
// BUT WHAT IF YOU WANT TO DISPLAY THIS ON A WEB PAGE AND YOU DON'T WANT IT TO RETURN UNDEFINED TO THE USERS? use;

posts.length > 0 && console.log(posts[0]);//Doesn't return anything if the array is empty but if its not empty it returns the first element in the array


// || - Will return the FIRST FALSY VALUE or the LAST VALUE

let b;

b = 10 || 20; // 10 since 10 and 20 are truthy so it returns the first of them

b = 0 || 20; //20
b = 0 || null || "";// <empty string> is returned since its the last value when they are all false

console.log(b);

// ?? - Returns the right side operand when the left is null or undefined

let c;

c = 10 ?? 20;//10 i.e it returned the left since the left isnt null or undefined
c = null ?? 20;//20
c = undefined ?? 30;//30
c = '' ?? 30;// <empty string>
c = 0 ?? 30;//0


console.log(c);