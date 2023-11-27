class Rectangle {
  constructor(name, height, width) {
    this.name = name;
    this.height = height;
    this.width = width;
  }

  // getClass() {
  //   return "Rectangle";
  // }

  static getClass() {
    return "Rectangle";
  }
}

const rect = new Rectangle("Rect 1", 20, 34);
// console.log(rect.getClass());
console.log(Rectangle.getClass());
