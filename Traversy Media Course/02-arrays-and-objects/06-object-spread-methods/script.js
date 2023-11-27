//Here are other ways of creating an object
//method 2(empty first then adding on)
const todo = {};

todo.id = 1;
console.log(todo);//object now has a property called with key of id and value of 1

//method 3(object constructor just like an array constructor)
const todo1 = new Object();

todo1.id = 2;
todo1.name = 'Buy milk';
todo1.completed = false;
console.log(todo1);


//Object Nesting
let x;
const person = {
    address: {
        coords: {
            lat: 42.9384,
            lng: -72.7487,
        }
    }
}
x = person;

//Accessing the nested elements
x = person.address.coords.lng;//-72.7487

//Spead Operator
const obj1 = { a: 1, b: 2, c: 3 };
const obj2 = { d: 4, e: 5, f: 6 };

const obj3 = { obj1, obj2 };//Just creates objects within an object

obj4 = { ...obj1, ...obj2 };//Merges the properties in both objects into one single object

x = obj4;

//Static methods you can use on the method object itself

//.......assign method which does the same thing the spread operator does
const obj5 = Object.assign({}, obj1, obj2);//so the properties of the objects that come after the empty bracket are assigned to the empty bracket

x = obj5;

// Arrays of object
const todos = [
    { id: 1, name: 'Buy Milk' },
    { id: 2, name: 'Code' },
    { id: 3, name: 'Read' },
];
x = todos;

x = todos[2].name;//Prints Read

//........Keys method on object to get all the keys in an object and put them into array
x = Object.keys(obj1);//we get an array with an element of id which is the only key the object todo has

//To get the length of an object i.e the number of properties an object has
x = Object.keys(obj1).length;// returns 3 which is correct so we actually just kind of convert it into an array because the lenght property works on array but not on objects


//Get an arrays with just the values which is just like keys
x = Object.values(obj1); //returns an array with the values of the specified object as the elements of the array

//Getting the key-value as an array in an array
x = Object.entries(obj1)


//This is not a static property though
//To know if an object has a specific property which is similar to the includes of an array
x = obj1.hasOwnProperty('d'); //false since obj1 doesnt have the key of d in it
x = obj1.hasOwnProperty('a'); //true since it does

console.log(x);