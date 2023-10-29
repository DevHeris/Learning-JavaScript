const musicContainer = document.getElementById("music-container");
const playBtn = document.getElementById("play");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const audioElement = document.getElementById("audio");
const progressContainer = document.getElementById("progress-container");
const progress = document.getElementById("progress");
const title = document.getElementById("title");
const cover = document.getElementById("cover");

// Song Titles
const songs = ["hey", "summer", "ukulele", "rewind"];

// Keep track of song
let songIndex = 1; // by default

// Initially load song details
loadSong(songs[songIndex]);

function loadSong(song) {
  title.innerText = song;
  audioElement.setAttribute("src", `music/${song}.mp3`);
  cover.setAttribute("src", `images/${song}.jpg`);
}

function playSong() {
  musicContainer.classList.add("play");
  playBtn.querySelector("i").classList.remove("fa-play");
  playBtn.querySelector("i").classList.add("fa-pause");
  audioElement.play();
}

function pauseSong() {
  musicContainer.classList.remove("play");
  playBtn.querySelector("i").classList.add("fa-play");
  playBtn.querySelector("i").classList.remove("fa-pause");
  audioElement.pause();
}

playBtn.addEventListener("click", () => {
  const isPlaying = musicContainer.classList.contains("play");
  if (isPlaying) {
    pauseSong();
  } else {
    playSong();
  }
});

function prevSong() {
  songIndex--;
  if (songIndex < 0) {
    songIndex = songs.length - 1;
  }

  loadSong(songs[songIndex]);

  playSong();
}

function nextSong() {
  songIndex++;
  if (songIndex > songs.length - 1) {
    songIndex = 0;
  }

  loadSong(songs[songIndex]);

  playSong();
}

function updateProgress(event) {
  const { duration, currentTime } = event.srcElement;
  const progressPercentage = (currentTime / duration) * 100;
  progress.style.width = `${progressPercentage}%`;
  progress.style.backgroundColor = "red";

  if (progressPercentage === 100) {
    nextSong();
  }
}

function setProgress(event) {
  const width = this.clientWidth; //150
  const clickX = event.offsetX;
  const duration = audioElement.duration;

  audioElement.currentTime = (clickX / width) * duration;
}

prevBtn.addEventListener("click", prevSong);
nextBtn.addEventListener("click", nextSong);
progressContainer.addEventListener("click", setProgress);
audioElement.addEventListener("timeupdate", updateProgress);
