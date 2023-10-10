const arr = [764, 47, 42, 12];


// ==========>>>>>>>>//ARRAY MANIPULATION METHODS

// Push to add elements to the end of the array
arr.push(56, 67);

//Pop for taking a value at from the very end i.e the last element
arr.pop(); //Removes 67

//Unshift to add on to the beginning
arr.unshift(90, 587);  //Inserts new elements at the start of an array, and returns the new length of the array.


//Shift to remove the first element of an array
arr.shift(); //removes 90

//Reverse to reverse the elements array
arr.reverse();


console.log(arr);
// ==========>>>>>>>>//GETTING SOMETHING FROM THE ARRAY METHODS
let y;

const arr1 = [44, 43, 13, 71];
console.log(arr1);

//Includes method to see if a particular value is in an array
y = arr1.includes(90); //false because the shift method already removed 90 from the array

//indexOf returns the index of the first occurrence of a value in an array, or -1 if it is not present.
y = arr1.indexOf(13); //2

// slice
y = arr1.slice(1); //43, 13, 71 IMPORTANT NOTE that this doesnt change make changes to the arr1 array its only logging the value into the y variable. To check, try logging arr1 again, youll see it starting from 44 and not 43

//Splice removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.

y = arr1.splice(1, 2); //when you use just one argument you get the same result as slice but the changes are made to the actual array

//But if you pass in a second argument, the effect is different from slice. like i did above youre saying i want index 1 up(greater than or equal to mentality sha)2 ie include index 2 which slice wouldnt have done(it would only pick up index 1)
//Now when you log the initial array youll only get the values you plucked out of the array ie//44 and 71

console.log(y, arr1);//[43,13] then [44,71]

let x;

const arr2 = [9, 24, 45, 53, 5, 2, 1];

//If you want to get rid of 53 from the array
x = arr2.splice(3, 1);
console.log(x, arr2);// Array[53] Array(6)[9, 24, 45, 5, 2, 1]


//How to chain methods
let z;
const arr3 = [334, 546, 54, 6, 7];
z = arr3.splice(1, 3).reverse().toString().charAt(7); //6


console.log(z);


// Notes from book

// const arr = [1, 2, 3, 4, 5];
// arr.slice(3); // returns [4, 5]; arr unmodified
// arr.slice(2, 4); // returns [3, 4]; arr unmodified
// arr.slice(-2); // returns [4, 5]; arr unmodified
// arr.slice(1, -2); // returns [2, 3]; arr unmodified
// arr.slice(-2, -1); // returns [4]; arr unmodified


// const arr = [1, 5, 7];
// arr.splice(1, 0, 2, 3, 4); // returns []; arr is now [1, 2, 3, 4, 5, 7]
// arr.splice(5, 0, 6); // returns []; arr is now [1, 2, 3, 4, 5, 6, 7]
// arr.splice(1, 2); // returns [2, 3]; arr is now [1, 4, 5, 6, 7]
// arr.splice(2, 1, 'a', 'b'); // returns [5]; arr is now [1, 4, 'a', 'b', 6, 7]


// You can use the Spread ... operator to spread the values of an array into separate arguments.
const array = [2, 3, 4, 5, 6];
console.log(array); //Array(5) [ 2, 3, 4, 5, 6 ]
//Using the spread operator
console.log(...array, typeof array); // 2 3 4 5 6 object

