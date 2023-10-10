let x;

const person = {
    name: 'Inioluwa Badairo',
    age: 20,
    location: 'Ibadan',
    isAdmin: true,
}
//Its advisable not to use two words as your key ie you shouldnt use something like 'first name': "hewfufeuw"
x = person;

// To access a specific property from an object we use the dot syntax or bracket syntax( member access operator or computed member access operator respectively)
x = person.name;//Inioluwa Badairo

x = person['age'];//20


//Having an object in another object
person.school = {
    name: 'Obafemi Awolowo University',
    level: 2,
    entryYear: 2021,
    state: 'Osun'
}
console.log(person);//You simply added a new property to the object and in this case you nested an object into another object

x = person.school.level;//2 

// Array in an object
person.hobbies = ['music', 'coding', 'movies'];
x = person.hobbies[2];//Movies

// Updating properties
x = person.name = 'DeV Heris'; //Dev Heris is now the new name

//Delete a property
delete person.age; //age property is no longer in the object

x = person;

// adding a function

person.greet = function () {
    console.log(`Hello, my name is ${this.name}`);
};

person.greet();


console.log(x);