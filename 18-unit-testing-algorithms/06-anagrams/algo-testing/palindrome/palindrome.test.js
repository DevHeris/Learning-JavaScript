const palindrome = require("./palindrome");

describe("Palindrome", () => {
  it("should be a function", () => {
    expect(typeof palindrome).toEqual("function");
  });

  it("should return a boolean", () => {
    expect(typeof palindrome("hello")).toEqual("boolean");
  });

  it("should return a true if it's a palindrome", () => {
    expect(palindrome("wow")).toBeTruthy();
    expect(palindrome("kayak")).toBeTruthy();
    expect(palindrome("rotator")).toBeTruthy();
  });

  it("should return a false if it's not a palindrome", () => {
    expect(palindrome("hello")).toBeFalsy();
    expect(palindrome("world")).toBeFalsy();
    expect(palindrome("bye")).toBeFalsy();
  });

  it("should return false if includes spaces", () => {
    expect(palindrome(" wow")).toBeFalsy();
  });
});
