const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ name: "John", age: 20 });
  }, 1000);
});

// How you would have done it with .then()

// promise.then((data) => {
//   console.log(data);
// });

// Doing it with async await

async function getPromise() {
  const response = await promise;

  console.log(response);
}

// getPromise();

// Using async/await with fetch
async function getUsers() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();

  console.log(data);
}
// With arrow functions
const getPosts = async () => {
  const reponse = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await reponse.json();

  console.log(data);
};

getPosts();

//all the same result as the .then syntax but the await & async is much more cleaner
// function getUsers() {
//   fetch("https://jsonplaceholder.typicode.com/users")
//     .then((response) => response.json())
//     .then((data) => console.log(data));

//   console.log(data);
// }

// getUsers();
