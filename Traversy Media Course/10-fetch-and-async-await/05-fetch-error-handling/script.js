// fetch("http://httpstat.us/200")
//   .then((response) => {
//     return response;
//   })
//   .then(() => {
//     console.log("success");
//   });

// Catch only runs on a Network Error
// fetch("http://hello123.net")
//   .then((response) => {
//     return response;
//   })
//   .then(() => {
//     console.log("success");
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// Test with reponse.ok
// fetch("http://httpstat.us/404")
//   .then((response) => {
//     // console.log(response);//  An object
//     // console.log(response.status); //404
//     // console.log(response.statusText); //Not Found
//     // console.log(response.ok); //false //He says its better to test for the ok value

//     if (!response.ok) {
//       //ie if not true(sucessful)
//       throw new Error("Request Failed");
//     }
//     return response;
//   })
//   .then(() => {
//     console.log("success");
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// checking with the actual status( specific code )
fetch("http://httpstat.us/323")
  .then((response) => {
    if (response.status === 404) {
      throw new Error("Not Found");
    } else if (response.status === 500) {
      throw new Error("Server Error");
    } else if (response.status !== 200) {
      throw new Error("Request Failed");
    }
    return response;
  })
  .then(() => {
    console.log("success");
  })
  .catch((error) => {
    console.log(error);
  });
