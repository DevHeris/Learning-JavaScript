const obj = {
    name: 'Ore',
    age: 20,
    school: 'University of Ibadan',
}

for (propertyValue in obj) {// Assigns property names of obj to variable propertyValue
    console.log(obj[propertyValue]);//Print the value of each property
}
// you can use code like the following to copy the names of all object properties into an array:
let o = { x: 1, y: 2, z: 3 };
let a = [], i = 0;
for (a[i++] in o) /* empty */;

console.log(a);


// VIDEO LESSSON
// We use the for/in loop when we actually want to loop through an object values
const colorObj = {
    color1: 'red',
    color2: 'blue',
    color3: 'orange',
    color4: 'green',
};

//If you want to loop through and get these colors
for (const key in colorObj) {
    // console.log(key);//This just prints color1 to 4. what we want are the values of those color
    console.log(key, colorObj[key]);
}

//Using for/in loop with arrays
const colorArr = ['red', 'green', 'blue', 'yellow'];

for (const key in colorArr) {
    // console.log(key);//so the array indexes are the object properties this time
    console.log(key, colorArr[key]);
}