// With a constructor function
function Person(firstName, lastName) {
  this._firstName = firstName;
  this._lastName = lastName;

  Object.defineProperty(this, "firstName", {
    get: function () {
      return this.capitalizeFirst(this._firstName);
    },
    set: function (value) {
      this._firstName = value;
    },
  });

  Object.defineProperty(this, "lastName", {
    get: function () {
      return this.capitalizeFirst(this._lastName);
    },
    set: function (value) {
      this._lastName = value;
    },
  });

  Object.defineProperty(this, "fullName", {
    get: function () {
      return this.firstName + " " + this.lastName;
    },
  });
}

Person.prototype.capitalizeFirst = function (value) {
  return value.charAt(0).toUpperCase() + value.slice(1);
};

const person = new Person("inioluwa", "badairo");
console.log(person);
console.log(person.firstName); //i.e accessing the property from the object.define's firstName get function
console.log(person._firstName); //i.e accessing the property directly from the class constructor

console.log(person.lastName);
console.log(person._lastName);

console.log(person.fullName);

// With object literals

const personObj = {
  _firstName: "Vannessa",
  _lastName: "Christin",

  get firstName() {
    return Person.prototype.capitalizeFirst(this._firstName);
  },

  set firstName(value) {
    this._firstName = value;
  },

  get lastName() {
    return Person.prototype.capitalizeFirst(this._lastName);
  },

  set lastName(value) {
    this._lastName = value;
  },

  get fullName() {
    return this.firstName + " " + this.lastName;
  },
};

const person2 = Object.create(personObj);

console.log(person2);
console.log(person2.firstName);
console.log(person2.lastName);
console.log(person2.fullName);
