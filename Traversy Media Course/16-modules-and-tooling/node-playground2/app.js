import { capitalizeWords, makeMoney } from "./modules/utils.js";
import Person from "./modules/Person.js";

console.log(capitalizeWords("welcome tO spiDer Society"));
console.log(makeMoney(300));

const person1 = new Person("Heris", 21);

person1.greet();
