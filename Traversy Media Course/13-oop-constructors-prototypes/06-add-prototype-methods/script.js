function Rectangle(name, width, height) {
  this.name = name;
  this.width = width;
  this.height = height;
  // this.area = function () {
  //   return this.width * this.height;
  // };
}

Rectangle.prototype.area = function () {
  return this.width * this.height;
};

Rectangle.prototype.perimeter = function () {
  return 2 * (this.width + this.height);
};

Rectangle.prototype.isSquare = function () {
  return this.width === this.height;
};

Rectangle.prototype.changeName = function (name) {
  return (this.name = name);
};

const rect1 = new Rectangle("Rect", 10, 10);
const rect2 = new Rectangle("Rect", 13, 10);

console.log(rect1);
console.log(rect1.area());
console.log(rect1.perimeter());
console.log(rect2.isSquare());
console.log(rect2.changeName("Heris"));
console.log(rect2);
