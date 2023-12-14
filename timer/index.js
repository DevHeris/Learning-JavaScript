const durationInput = document.querySelector("#duration");
const pauseButton = document.querySelector("#pause");
const startButton = document.querySelector("#start");

const timer = new Timer(durationInput, startButton, pauseButton, {
  onStart() {
    console.log("Timer Started");
  },
  onTick() {
    console.log("Timer just ticked down");
  },
  onComplete() {
    console.log("Timer just completed");
  },
});
