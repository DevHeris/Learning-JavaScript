// function Rectangle(height, width) {
//   this.height = height;
//   this.width = width;
// }

// Rectangle.prototype.area = function () {
//   return this.height * this.width;
// };

// Rectangle.prototype.perimeter = function () {
//   return 2 * (this.height + this.width);
// };

// Rectangle.prototype.isSquare = function () {
//   return this.height === this.width;
// };

// Rectangle.prototype.logArea = function () {
//   console.log("Rectangle Area: " + this.area());
// };

// Doing all that's above with classes
class Rectangle {
  constructor(name, width, height) {
    this.name = name;
    this.height = height;
    this.width = width;
  }

  area() {
    return this.height * this.width;
  }

  perimeter() {
    return 2 * (this.height + this.width);
  }

  isSquare() {
    return this.width === this.height;
  }

  logArea() {
    console.log("Rectangle Area " + this.area());
  }
}

const square = new Rectangle("Square 1", 20, 20);
console.log(square);
// console.log(square.area());
square.logArea();
console.log(Object.getPrototypeOf(square));
