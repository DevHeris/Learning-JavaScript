const videoEl = document.getElementById("video");
const play = document.getElementById("play");
const pause = document.getElementById("pause");
const stop = document.getElementById("stop");
const progress = document.getElementById("progress");
const timeStamp = document.getElementById("timestamp");

const playPause = () => {
  if (videoEl.paused) {
    videoEl.play();
  } else {
    videoEl.pause();
  }
};

const updateIcon = () => {
  if (videoEl.paused) {
    play.innerHTML = `<i class ="fa fa-play fa-2x"></i>`;
  } else {
    play.innerHTML = `<i class ="fa fa-pause fa-2x"></i>`;
  }
};

const stopVideo = () => {
  videoEl.currentTime = 0;
  videoEl.pause();
};

const updateProgress = () => {
  progress.value = (videoEl.currentTime / videoEl.duration) * 100;

  //   Get minutes
  let minutes = Math.floor(videoEl.currentTime / 60);
  if (minutes < 10) {
    minutes = "0" + String(minutes);
  }

  let seconds = Math.floor(videoEl.currentTime % 60);
  if (seconds < 10) {
    seconds = "0" + String(seconds);
  }
  timeStamp.innerHTML = `${minutes}:${seconds}`;
};

const setProgress = () => {
  videoEl.currentTime = (+progress.value * videoEl.duration) / 100;
};

function initApp() {
  videoEl.addEventListener("click", playPause);
  videoEl.addEventListener("pause", updateIcon);
  videoEl.addEventListener("play", updateIcon);
  videoEl.addEventListener("timeupdate", updateProgress);

  play.addEventListener("click", playPause);
  stop.addEventListener("click", stopVideo);
  progress.addEventListener("click", setProgress);
}

initApp();
