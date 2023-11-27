function Rectangle(name, width, height) {
  this.name = name;
  this.width = width;
  this.height = height;
  this.area = function () {
    return this.width * this.height;
  };
}

const rect1 = new Rectangle("Rectangle 1", 23, 9);
const rect2 = new Rectangle("Rectangle 2", 15, 5);

console.log(rect1.name, rect2.height);
console.log(rect1["width"]);

// Add Property
rect1.color = "red";

rect2.perimeter = () => 2 * (rect2.width + rect2.height);

// Delete property
delete rect2.perimeter;

// Check for property
console.log(rect2.hasOwnProperty("color"));
console.log(rect1.hasOwnProperty("color"));

console.log(Object.keys(rect2));
console.log(Object.values(rect2));
console.log(Object.entries(rect2));

Object.entries(rect2).forEach((property) => {
  console.log(`${property[0]} - ${property[1]}`);
});

console.log(rect2);
