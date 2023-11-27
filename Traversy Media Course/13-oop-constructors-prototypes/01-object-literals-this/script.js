const rectangle = {
  name: "Rectangle 1",
  width: 20,
  height: 20,
  area: function () {
    return this.width * this.height;
  },
};

console.log(rectangle.name); // Rectangle 1
console.log(rectangle.area()); // 400
