// function getData(endpoint) {
//   const xhr = new XMLHttpRequest();

//   xhr.open("GET", endpoint);

//   xhr.onreadystatechange = function () {
//     if (this.readyState === 4 && this.status === 200) {
//       console.log(JSON.parse(this.responseText));
//     }
//   };

//   setTimeout(() => {
//     xhr.send();
//   }, Math.floor(Math.random() * 3000 + 1000)); //Gives us a number between 1000 to 4000 milliseconds
// }

// getData("./movies.json");
// getData("./actors.json");
// getData("./directors.json");

// // When this three were called there was no particular order in which we go the result i.e because movies was on top didnt mean it would be called back first. IF you want them to be called in the order you specified, then you have to use this method BELOW by using a callback function with it

function getData(endpoint, cb) {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", endpoint);

  xhr.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      cb(JSON.parse(this.responseText));
    }
  };

  setTimeout(() => {
    xhr.send();
  }, Math.floor(Math.random() * 3000 + 1000));
}

getData("./movies.json", (data) => {
  console.log(data); //i.e data is the JSON.parse you passed into the cb function earlier above
  getData("./actors.json", (data) => {
    console.log(data);

    getData("./directors.json", (data) => {
      console.log(data);
    });
  });
}); //Doing it this way tells it to only get actors data after it has gotten movies data and same goes for directors data.
//THIS IS CALLED A CALLBACK HELL BECAUSE YOU ARE NESTING MULTIPLE CALLBACKS INSIDE ANOTHER CALLBACK
