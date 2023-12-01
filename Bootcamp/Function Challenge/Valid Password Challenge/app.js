// Write a isValidPassword function
// It accepts 2 arguments: password and username
// Password must:
//	- be at least 8 characters
//  - cannot contain spaces
//  - cannot contain the username
// If all requirements are met, return true.
//Otherwise: false

// isValidPassword('89Fjj1nms', 'dogLuvr');  //true
// isValidPassword('dogLuvr123!', 'dogLuvr') //false
// isValidPassword('hello1', 'dogLuvr') //false

// =========================================== //
// My Solution
function isValidPassword(password, username) {
  const isValid =
    password.length >= 8 &&
    password.indexOf(" ") === -1 &&
    password.indexOf(username) === -1;
  if (isValid) {
    console.log(true);
  } else {
    console.log(false);
  }
}

isValidPassword("89Fjj1nms", "dogLuvr");
isValidPassword("dogLuvr123!", "dogLuvr");
isValidPassword("hello1", "dogLuvr");

// ============================================= //

// ============================================= //
// His Solution
function isValidPassword2(password, username) {
  const tooShort = password.length < 8;
  const hasSpace = password.indexOf(" ") !== -1;
  const tooSimilar = password.indexOf(username) !== -1;
  return !tooShort && !hasSpace && !tooSimilar;
}

// Run this one in the console
