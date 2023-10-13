function getData(endpoint) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", endpoint);

    xhr.onreadystatechange = function () {
      if (this.readyState === 4) {
        if (this.status === 200) {
          resolve(JSON.parse(this.responseText));
        } else {
          reject("Error: Something went wrong");
        }
      }
    };

    setTimeout(() => {
      xhr.send();
    }, Math.floor(Math.random() * 3000) + 1000);
  });
}

// (Method 1)
getData("./movies.json")
  .then((movies) => {
    console.log(movies);
    return getData("./actors.json");
  })
  .then((actors) => {
    console.log(actors);
    return getData("./directors.json");
  })
  .then((directors) => {
    console.log(directors);
  })
  .catch((error) => console.log(error));

//(Method 2) Now we want to do the same thing with async/await
async function getAllData() {
  const movies = await getData("./movies.json");
  const actors = await getData("./actors.json");
  const directors = await getData("./directors.json");
  console.log(movies, actors, directors);
}

//(Method 3) An even better way with fetch
async function getAllDataWithFetch() {
  const moviesRes = await fetch("./movies.json");
  const movies = await moviesRes.json();

  const actorsRes = await fetch("./actors.json");
  const actors = await actorsRes.json();

  const directorsRes = await fetch("./directors.json");
  const directors = await directorsRes.json();

  console.log(movies, actors, directors);
}

// (Method 4)
// Using Async/Await with promise.all()
async function getAllDataPromiseAll() {
  //Using array destructuring
  const [moviesRes, actorsRes, directorsRes] = await Promise.all([
    //An array of the first promise will be gotten, which contains the response object using the promise.all()
    fetch("./movies.json"),
    fetch("./actors.json"),
    fetch("./directors.json"),
  ]);

  const movies = await moviesRes.json();
  const actors = await actorsRes.json();
  const directors = await directorsRes.json();
  console.log(movies, actors, directors);
}

// (Method 5)
//Or if you want to use .then() instead
async function getAllDataPromiseAll2() {
  //Using array destructuring
  const [movies, actors, directors] = await Promise.all([
    fetch("./movies.json").then((res) => res.json()),
    fetch("./actors.json").then((res) => res.json()),
    fetch("./directors.json").then((res) => res.json()),
  ]);
  //With this the array that the promise.all() is returning this time is not the promise reponse objects but the promise data arrays

  console.log(movies, actors, directors);
}

// getAllData();
// getAllDataWithFetch();
// getAllDataPromiseAll();
// getAllDataPromiseAll2();

// So use what ever method you like
