// Looping over arrays

let data = [1, 2, 3, 4, 5], sum = 0;
for (const element of data) {
    sum += element;
}
console.log(sum);//15 
const items = ['book', 'table', 'chair', 'kite'];

// Using normal for loop
for (let i = 0; i < items.length; i++) {
    console.log(items[i]);
}

//Using the for/of loop instead which is the cleaner way to do it

for (const item of items) {
    console.log(item);
}
//If you have an array of objects
const users = [
    { name: 'Heris' },
    { name: 'James' },
    { name: 'Timmy' },
];

for (const user of users) {
    console.log(user.name);
}

//Looping over strings  
const str = 'Welcome';

for (const letter of str) {
    console.log(letter);
}

// Loop over maps 
const map = new Map();
map.set('name', 'John');
map.set('age', 30);

for (const [key, value] of map) {
    console.log(key, value);
}


