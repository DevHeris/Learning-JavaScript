const play = document.getElementById("play");
const pause = document.getElementById("pause");
const stop = document.getElementById("stop");
const video = document.querySelector("video");
const currentTime = document.querySelector(".currentTime");

play.addEventListener("click", () => {
  video.play();
});

pause.addEventListener("click", () => {
  video.pause();
});

stop.addEventListener("click", () => {
  video.currentTime = 0;
  video.pause();
});

video.addEventListener("timeupdate", () => {
  currentTime.innerText = video.currentTime;
});
