function Shape(name) {
  this.name = name;
}

Shape.prototype.logName = function () {
  console.log(`Shape Name: ${this.name}`);
};

function Rectangle(name, width, height) {
  Shape.call(this, name);

  this.width = width;
  this.height = height;
}

// Inherits Shape prototypes
Rectangle.prototype = Object.create(Shape.prototype);
Circle.prototype = Object.create(Shape.prototype);

// Set prototype constructors
Rectangle.prototype.constructor = Rectangle;

// This is an example of polymorphism
Rectangle.prototype.logName = function () {
  console.log(`Rectangle Name: ${this.name}`);
};

Circle.prototype.constructor = Circle;

function Circle(name, radius) {
  Shape.call(this, name);

  this.radius = radius;
}

const rect = new Rectangle("Rectangle 1", 15, 23);
const cir = new Circle("Circle 1", 40);

console.log(cir);
console.log(rect);
rect.logName();
cir.logName();

// console.log(rect.constructor);
