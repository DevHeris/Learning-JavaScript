// function toggle(e) {
//   console.log("callback ran");
//   e.target.classList.toggle("danger");
// }

// document.querySelector("button").addEventListener("click", toggle);

const posts = [
  { title: "Post One", body: "This is post one" },
  { title: "Post Two", body: "This is post two" },
];

function createPost(post, cb) {
  setTimeout(() => {
    posts.push(post);
    cb();
  }, 2000);
}

function getPosts() {
  setTimeout(() => {
    posts.forEach((post) => {
      const div = document.createElement("div");
      div.innerHTML = `<strong>${post.title}</strong> - ${post.body}`;
      document.getElementById("posts").appendChild(div);
    });
  }, 1000);
}

createPost({ title: "Post Three", body: "This is post three" }, getPosts);

// So it takes a total of three seconds to diplay all the posts
