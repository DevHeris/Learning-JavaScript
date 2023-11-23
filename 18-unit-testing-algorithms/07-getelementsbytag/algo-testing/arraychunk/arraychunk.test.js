const assert = require("assert");
const chunk = require("./arraychunk");

describe("Array Chunking", () => {
  // Test case: Should create chunks of a specific size
  it("should create chunks of a specific size", () => {
    // Test with an array and chunk size of 2
    assert.deepEqual(chunk([1, 2, 3, 4], 2), [
      [1, 2],
      [3, 4],
    ]);

    // Test with an array and chunk size of 3
    assert.deepEqual(chunk([1, 2, 3, 4], 3), [[1, 2, 3], [4]]);
  });
});
