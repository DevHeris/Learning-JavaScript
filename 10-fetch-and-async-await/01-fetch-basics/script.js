// Fetching  a JSON file
fetch("./movies.json")
  .then((response) => {
    return response.json(); // Note that you don't neccessarily have to type return here tho
  })
  .then((data) => {
    console.log(data);
  });

//   Fetching a text file
fetch("./test.txt")
  .then((response) => {
    return response.text();
  })
  .then((data) => {
    console.log(data);
  });

//   Fetching from an API
fetch("https://api.github.com/users/DevHeris/repos")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    document.querySelector("h1").textContent = data.login;
  });
