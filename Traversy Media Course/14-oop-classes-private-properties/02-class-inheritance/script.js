// Parent class
class Shape {
  constructor(name) {
    this.name = name;
  }

  logName() {
    console.log("Shape Name: " + this.name);
  }
}

// Sub class
class Rectangle extends Shape {
  constructor(name, width, height) {
    super(name);

    this.height = height;
    this.width = width;
  }
}

class Circle extends Shape {
  constructor(name, radius) {
    super(name);

    this.radius = radius;
  }
  // Polymorphism
  logName() {
    console.log("Circle Name: " + this.name);
  }
}

const rect = new Rectangle("Rect 1", 20, 20);
console.log(rect);
rect.logName();

const cir = new Circle("Circle 1", 20);
console.log(cir);
cir.logName();

console.log(rect instanceof Shape); //true
console.log(rect instanceof Rectangle); //true
console.log(rect instanceof Circle); //false
console.log(cir instanceof Circle); //true
