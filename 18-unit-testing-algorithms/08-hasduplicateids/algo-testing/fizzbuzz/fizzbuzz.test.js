const fizzBuzz = require("./fizzbuzz");

describe("fizzbuzz", () => {
  // Test if fizzBuzz is a function
  it("should be a function", () => {
    expect(typeof fizzBuzz).toEqual("function");
  });

  // Test if the function returns the number if not divisible by 3 or 5
  it("should return the number if not divisible by 3 or 5", () => {
    expect(fizzBuzz(23)).toEqual(23);
    expect(fizzBuzz(19)).toEqual(19);
    expect(fizzBuzz(77)).toEqual(77);
  });

  // Test if the function returns "Fizz" if divisible by 3
  it("should return Fizz if divisible by 3", () => {
    expect(fizzBuzz(3)).toEqual("Fizz");
    expect(fizzBuzz(39)).toEqual("Fizz");
    expect(fizzBuzz(9)).toEqual("Fizz");
  });

  // Test if the function returns "Buzz" if divisible by 5
  it("should return Buzz if divisible by 5", () => {
    expect(fizzBuzz(5)).toEqual("Buzz");
    expect(fizzBuzz(40)).toEqual("Buzz");
    expect(fizzBuzz(80)).toEqual("Buzz");
  });

  // Test if the function returns "FizzBuzz" if divisible by 3 and 5
  it("should return FizzBuzz if divisible by 3 and 5", () => {
    expect(fizzBuzz(15)).toEqual("FizzBuzz");
    expect(fizzBuzz(30)).toEqual("FizzBuzz");
    expect(fizzBuzz(45)).toEqual("FizzBuzz");
  });
});
