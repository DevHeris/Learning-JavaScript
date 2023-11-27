window.addEventListener("keydown", playSound);

function playSound(event) {
  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);

  if (!audio) {
    return;
  }
  audio.currentTime = 0; //Important

  audio.play();

  key.classList.add("playing");
  setInterval(() => {
    key.classList.remove("playing");
  }, 300);
}
