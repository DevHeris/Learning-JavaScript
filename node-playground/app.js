const { capitalizeWords, makeMoney } = require("./utils.js");

console.log(capitalizeWords("hello eVErYone"));
console.log(makeMoney(400));

const Person1 = require("./Person.js");

const ini = new Person1("Heris", 23);
ini.greet();
