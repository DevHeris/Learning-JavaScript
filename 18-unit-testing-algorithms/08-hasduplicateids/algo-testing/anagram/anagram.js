// Function to check if two strings are anagrams
const anagram = (str1, str2) => {
  // Build character maps for both strings
  const aCharMap = buildCharMap(str1);
  const bCharMap = buildCharMap(str2);

  // Check if the character maps have the same number of keys
  if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
    return false;
  }

  // Compare the occurrence of each character in both maps
  for (let char in aCharMap) {
    if (aCharMap[char] !== bCharMap[char]) {
      return false;
    }
  }

  // If all checks pass, the strings are anagrams
  return true;
};

// Helper function to build a character map for a string
const buildCharMap = (str) => {
  const charMap = {};

  // Count the occurrences of each character in the string
  for (let char of str.toLowerCase()) {
    charMap[char] = charMap[char] + 1 || 1;
  }

  return charMap;
};

// Example usage
anagram("hello", "world");

// Export the anagram function
module.exports = anagram;
