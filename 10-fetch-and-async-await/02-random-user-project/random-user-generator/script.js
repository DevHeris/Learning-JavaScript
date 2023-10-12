// // Me trying it myself(My Method)

// function generateUser() {
//   fetch("https://randomuser.me/api/")
//     .then((response) => {
//       return response.json();
//     })
//     .then((data) => {
//       const div = document.querySelector(".mt-6");
//       const dataObject = data.results[0];
//       console.log(dataObject);
//       div.innerHTML = `
//         <div class="flex justify-between">
//         <div class="flex">
//         <img class="w-48 h-48 rounded-full mr-8" src="${dataObject.picture.large}" />
//         <div class="space-y-3">
//             <p class="text-xl">
//                 <span class="font-bold">Name: </span>${dataObject.name.first} ${dataObject.name.last}
//             </p>
//             <p class="text-xl">
//                 <span class="font-bold">Email: </span> ${dataObject.email}
//             </p>
//             <p class="text-xl">
//                 <span class="font-bold">Phone: </span>${dataObject.phone}
//             </p>
//             <p class="text-xl">
//                 <span class="font-bold">Location: </span> ${dataObject.location.state} ${dataObject.location.city}
//             </p>
//             <p class="text-xl"><span class="font-bold">Age: </span> ${dataObject.registered.age}</p>
//             </div>
//             </div>`;
//     });
// }

// const button = document.getElementById("generate");

// button.addEventListener("click", generateUser);
// document.addEventListener("DOMContentLoaded", generateUser);

// (a)I couldn't change the background of the body based on the users gender(i forgot) and (b) I couldn't axtually display the spinner that was meant to show while the result is being fetched

// His Method

function fetchUser() {
  showSpinner(); //I.e we want to show the spinner right before we make the reques

  fetch("https://randomuser.me/api/")
    .then((response) => response.json())
    .then((data) => {
      hideSpinner(); //Dont show spinner once we successfully fetched the data
      displayUser(data.results[0]); //Function
    });
}

function displayUser(user) {
  const userDisplay = document.querySelector("#user");

  if (user.gender === "female") {
    document.body.style.backgroundColor = "rebeccapurple";
  } else {
    document.body.style.backgroundColor = "steelblue";
  }

  userDisplay.innerHTML = `
     <div class="flex justify-between">
           <div class="flex">
           <img class="w-48 h-48 rounded-full mr-8" src="${user.picture.large}" />
           <div class="space-y-3">
               <p class="text-xl">
                   <span class="font-bold">Name: </span>${user.name.first} ${user.name.last}
               </p>
               <p class="text-xl">
                   <span class="font-bold">Email: </span> ${user.email}
               </p>
               <p class="text-xl">
                   <span class="font-bold">Phone: </span>${user.phone}
               </p>
               <p class="text-xl">
                   <span class="font-bold">Location: </span> ${user.location.city} ${user.location.country}
             </p>
               <p class="text-xl"><span class="font-bold">Age: </span> ${user.dob.age}</p>
               </div>
               </div>`;
}

function showSpinner() {
  document.querySelector(".spinner").style.display = "block";
}
function hideSpinner() {
  document.querySelector(".spinner").style.display = "none";
}

document.querySelector("#generate").addEventListener("click", fetchUser);

fetchUser(); //Called right away in the global scope so you dont even need DOMContentLoaded event like you did in yours
