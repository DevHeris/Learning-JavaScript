// Get references to the necessary HTML elements
const audioElement = document.getElementById("audio"); // Audio element
const volumeControl = document.getElementById("volume"); // Volume range input
const play = document.getElementById("play"); // Play button
const pause = document.getElementById("pause"); // Pause button
const stop = document.getElementById("stop"); // Stop button
const currentTime = document.querySelector(".current-time"); // Element to display current time

// Event listener for the "Play" button
play.addEventListener("click", () => {
  audioElement.play(); // Start playing the audio
});

// Event listener for the "Pause" button
pause.addEventListener("click", () => {
  audioElement.pause(); // Pause the audio
});

// Event listener for the "Stop" button
stop.addEventListener("click", () => {
  audioElement.pause(); // Pause the audio playback
  audioElement.currentTime = 0; // Reset the audio to the beginning
});

// Event listener for the audio's "timeupdate" event, updating the current time display
audioElement.addEventListener("timeupdate", () => {
  currentTime.innerText = audioElement.currentTime; // Display the current time of the audio
});

// Event listener for the volume range input
volumeControl.addEventListener("input", () => {
  audioElement.volume = volumeControl.value; // Adjust the audio volume according to the range input
});
