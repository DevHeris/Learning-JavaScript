// Naming

const firstName = 'Inioluwa';
const lastName = 'Badairo';
const age = 20;

const person = {
    firstName: firstName, //You dont neccessarily have to type in the variable again if the key and the valus have the same name like that. so use the method below
    lastName, //i.e just last name
    age,
};

// It saves you some typing

console.log(person);

// Destructuring

const todo = {
    id: 1,
    title: 'Code for 8 hours',
    user: {
        name: 'Heris',
    },
}; //Normal Object

/* const id = todo.id
console.log(id);//1 */


//The destructuring starts now which you can think of as taking these variables out of the object
/* const { id, title, user } = todo;
console.log(id);//1 ; so you don't have to use the method I commented out earlier to get the 1 
console.log(user);//Pulls out the entire object from the object itself
 */



//if You want to take out just the name property from the user. it would go like this instead
/* const {
    id,
    title,
    user: { name },
} = todo;
console.log(name); // 'Heris' ;Prints just the name of the user

 */

//You can rename keys/properties

const {
    id: todoId,
    title,
    user: { name },
} = todo;

console.log(todoId);// 1
// console.log(id);// Id is not defined

//You can also destructure arrays

const arr = [12, 21, 454, 6, 7];// Normal array

//Array destructuring assignment
let [first, second, third] = arr;
console.log(first);//12
console.log(third);//454


//Rest operator which is just like the spread operator (...) and its used to get the remaining(rest) elments into an array
let [x, y, z, ...rest] = arr;

console.log(x, y, z, rest);//12 21 454 and an array [6,7]

//Note you can use whatever name you like but rest is mostly used sha


