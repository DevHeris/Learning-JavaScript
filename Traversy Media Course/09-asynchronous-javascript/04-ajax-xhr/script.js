const xhr = new XMLHttpRequest(); //Initializing a request

// xhr.open("GET", "./movies.json"); Fetching from a local file

xhr.open("GET", "https://api.github.com/users/DevHeris/repos");

// readyState has 5 possible values
// - 0: request not initialized
// - 1: server connection established
// - 2: request recieved
// - 3: processing request
// - 4: request finished and response is ready

//------ Fetching from a local file on your system

// xhr.onreadystatechange = function () {
//   //   console.log(this.readyState);
//   //   console.log(this.status); //200 for successful
//   if (this.readyState === 4 && this.status === 200) {
//     //i.e we want to be sure that we successfully fetched the data
//     // console.log(JSON.parse(this.responseText));
//     const data = JSON.parse(this.responseText);
//     data.forEach((movie) => {
//       const li = document.createElement("li");
//       li.innerHTML = `<strong>${movie.title}</strong> - ${movie.year}`;

//       document.getElementById("results").appendChild(li);
//     });
//   }
// };

// ------Fetching from a web API
xhr.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    let data = JSON.parse(this.responseText);

    data.forEach((repo) => {
      const li = document.createElement("li");
      li.innerHTML = `<i>${repo.id}</i> - <strong>${repo.name}</strong>`;

      document.getElementById("results").appendChild(li);
    });
  }
};

xhr.send();
