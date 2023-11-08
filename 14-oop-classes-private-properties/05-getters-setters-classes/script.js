class Person {
  constructor(firstName, lastName) {
    this._firstName = firstName;
    this._lastName = lastName;
  }

  get firstName() {
    return this.capitalizeFirstLetter(this._firstName);
  }

  set firstName(value) {
    this._firstName = this.capitalizeFirstLetter(value);
  }

  get lastName() {
    return this.capitalizeFirstLetter(this._lastName);
  }

  set lastName(value) {
    this._lastName = this.capitalizeFirstLetter(value);
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  capitalizeFirstLetter(value) {
    return value.charAt(0).toUpperCase() + value.slice(1);
  }
}

const Person1 = new Person("john", "doe");
console.log(Person1.firstName);

Person1.firstName = "joe";
Person1.lastName = "gg";

console.log(Person1.fullName);
console.log(Person1);
