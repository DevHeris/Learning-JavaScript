// Solution 1
// const palindrome = (str) => {
//   const reversed = str.split("").reverse().join("");
//   return str === reversed;
// };

// Solution 2
const palindrome = (str) => {
  return str.split("").every((character, index) => {
    return character === str[str.length - index - 1];
  });
};

module.exports = palindrome;
