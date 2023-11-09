// [[Configurable]] - if `true`, the property can be deleted and these attributes can be modified, otherwise not
// [[Enumerable]] - if `true`, the property will be returned in a `for...in` loop, otherwise not
// [[Writable]] - if `true`, the value of the property can be changed, otherwise not
// [[Value]] - the value of the property

let descriptor = Object.getOwnPropertyDescriptor(Math, "PI");
console.log(descriptor);

const rectObj = {
  name: "Rectangle 1",
  width: 20,
  height: 30,
};
descriptor = Object.getOwnPropertyDescriptor(rectObj, "name");
console.log(descriptor);

Object.defineProperty(rectObj, "name", {
  writable: false,
  configurable: false,
  enumerable: false,
});

descriptor = Object.getOwnPropertyDescriptor(rectObj, "name");
console.log(descriptor);

rectObj.name = "Rect";
console.log(descriptor); //It refuses to change name at this point

delete rectObj.name; // Wont delete this
delete rectObj.width; // Actually deletes this
console.log(rectObj);

for (let [key, value] of Object.entries(rectObj)) {
  console.log(`${key} - ${value}`);
}

descriptor = Object.getOwnPropertyDescriptors(rectObj);
console.log(descriptor);
