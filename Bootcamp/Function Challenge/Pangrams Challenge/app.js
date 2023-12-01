// A pangram is a sentence that contains every letter of the alphabet, like:
//"The quick brown fox jumps over the lazy dog"

// Write a function called isPangram, which checks to see if a given sentence contains every letter of the alphabet.  Make sure you igore string casing!

// isPangram('The five boxing wizards jump quickly') //true
// isPangram('The five boxing wizards jump quick') //false

function isPangram(sentence) {
  for (const char of "abcdefghijklmnopqrstuvwxyz") {
    if (sentence.toLowerCase().indexOf(char) === -1) {
      console.log(false);
      return false;
    }
  }
  console.log(true);
  return true;
}

isPangram("The five boxing wizards jump quickly");
isPangram("The five boxing wizards jump quick");
