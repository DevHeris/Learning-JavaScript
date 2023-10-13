function createPost({ title, body }) {
  fetch("http://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title,
      body,
    }),
    headers: {
      "Content-Type": "application/json",
      token: "abc123",
    },
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
}

createPost({ title: "This is this posts title", body: "This is its body" });

// Me trying to refresh my memory oon object destructuring which i used above

// const obj = { name: "Heris", age: 20 };

// const { name, age } = obj;

// console.log(obj);
// console.log(name);
// console.log(age);
