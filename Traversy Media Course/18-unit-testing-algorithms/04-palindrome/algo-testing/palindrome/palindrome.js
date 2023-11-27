// Solution 1 (Commented out for reference)
// const palindrome = (str) => {
//   const reversed = str.split("").reverse().join("");
//   return str === reversed;
// };

// Solution 2
const palindrome = (str) => {
  // Use the 'every' method to check each character against its mirror image
  return str.split("").every((character, index) => {
    return character === str[str.length - index - 1];
  });
};

module.exports = palindrome;
