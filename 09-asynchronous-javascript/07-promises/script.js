// // Create a promise
// const promise = new Promise((resolve, reject) => {
//   // Do some async task
//   setTimeout(() => {
//     console.log("Async task complete");
//     resolve();
//   }, 1000);
// });

// promise.then(() => {
//   console.log("Promise consumed...");
// });

// You can also attach the then() to the actual promise itself and not the variable, as in...

// new Promise((resolve, reject) => {
//   // Do some async task
//   setTimeout(() => {
//     resolve({ name: "Ini", age: 20 });
//   }, 1000);
// }).then((user) => console.log(user));

// console.log("Hello from global scope");

// Handling Errors
const getUser = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true; //Change to true and see what happens

    if (!error) {
      resolve({ name: "Heris", age: 21 });
    } else {
      reject("Error : Something  Went Wrong");
    }
  }, 1000);
});

getUser
  .then((user) => console.log(user))
  .catch((error) => console.log(error))
  .finally(() => console.log("The promise is settled(resolved or rejected)"));
