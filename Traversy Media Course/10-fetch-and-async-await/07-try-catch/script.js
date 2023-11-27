// try {
//   console.log(x);
// } catch (err) {
//   console.log("Error: " + err);
// }

// Throwing your own error
function double(number) {
  if (isNaN(number)) {
    throw new Error(number + " is not an error");
  }
  return number * 2;
}

// Case 1
// try {
//   const y = double(5);
//   console.log(y);
// } catch (error) {
//   console.log(error);
// } // Returns 10, since 5 is actually a number

// Case 2
try {
  const y = double("A string which isnt a number");
  console.log(y);
} catch (error) {
  console.log(error);
} //The error is caught and we get (Error: A string which isnt a number is not an error)
