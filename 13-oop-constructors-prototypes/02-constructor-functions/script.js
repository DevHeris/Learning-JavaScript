function Rectangle(name, width, height) {
  this.name = name;
  this.width = width;
  this.height = height;
  this.area = function () {
    return this.height * this.width;
  };
}

const rect1 = new Rectangle("Rectangle 1", 20, 20);
const rect2 = new Rectangle("Rectangle 2", 10, 30);
const rect3 = new Rectangle("Rectangle 3", 20, 50);

console.log(rect1);
console.log(rect2.name);
console.log(rect3);
console.log(rect3.area());
