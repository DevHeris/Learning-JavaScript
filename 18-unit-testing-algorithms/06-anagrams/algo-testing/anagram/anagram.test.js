const assert = require("assert");
const anagram = require("./anagram");

describe("Anagram", () => {
  // Check if anagram is a function
  it("should be a function", () => {
    assert.deepEqual(typeof anagram, "function");
  });

  // Check if the result is a boolean
  it("should return a boolean", () => {
    assert.deepEqual(typeof anagram("ram", "arm"), "boolean");
  });

  // Check if it correctly identifies anagrams
  it("should return true if it's an anagram", () => {
    expect(anagram("ram", "arm")).toBeTruthy();
    expect(anagram("cinema", "iceman")).toBeTruthy();
    expect(anagram("god", "dog")).toBeTruthy();
  });

  // Check if it correctly identifies non-anagrams
  it("should return false if it's not an anagram", () => {
    expect(anagram("jet", "belt")).toBeFalsy();
    expect(anagram("lost", "cost")).toBeFalsy();
    expect(anagram("hello", "fellow")).toBeFalsy();
  });
});
