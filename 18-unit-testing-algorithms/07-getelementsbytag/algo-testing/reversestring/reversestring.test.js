const reverseString = require("./reversestring");

describe("Reverse string", () => {
  // Test if reverseString is a function
  it("should be a function", () => {
    expect(typeof reverseString).toEqual("function");
  });

  // Test if the function returns a string
  it("should return a string", () => {
    expect(typeof reverseString("hello")).toEqual("string");
  });

  // Test if the function returns the reversed string
  it("should return the reversed string", () => {
    expect(reverseString("hello")).toEqual("olleh"); // Reverse "hello" to "olleh"
    expect(reverseString("bye")).toEqual("eyb"); // Reverse "bye" to "eyb"
    expect(reverseString("wow")).toEqual("wow"); // Palindrome, should remain the same
    expect(reverseString("hello world")).toEqual("dlrow olleh");
  });
});
