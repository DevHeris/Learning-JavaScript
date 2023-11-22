// Import the sum function to be tested
const sum = require("./sum");

// Test case: Adds 1 + 2 to equal 3
test("Adds 1 + 2 to equal 3", () => {
  // Use Jest's expect function to perform assertions
  expect(sum(1, 2)).toEqual(3);
});
