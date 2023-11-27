const jokeBtn = document.querySelector(".btn");
const jokeEl = document.querySelector(".joke");

function generateJoke() {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", " https://api.chucknorris.io/jokes/random");

  xhr.onreadystatechange = function () {
    if (this.readyState === 4) {
      if (this.status === 200) {
        const joke = JSON.parse(this.responseText);

        jokeEl.innerHTML = joke.value;
      } else {
        jokeEl.innerHTML = "Something Went Wrong (Not Funny)"; //This part will run if you didnt type in the url api correctly e.g try removing the r in norris
      }
    }
  };

  xhr.send();
}

jokeBtn.addEventListener("click", generateJoke);
document.addEventListener("DOMContentLoaded", generateJoke);
