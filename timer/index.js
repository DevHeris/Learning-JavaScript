class Timer {
  constructor(durationInput, startButton, pauseButton) {
    this.durationInput = durationInput;
    this.startButton = startButton;
    this.pauseButton = pauseButton;

    this.startButton.addEventListener("click", this.start.bind(this));
  }

  start() {
    console.log(this);
  }
}

const durationInput = document.querySelector("#duration");
const pauseButton = document.querySelector("#pause");
const startButton = document.querySelector("#start");

const timer = new Timer(durationInput, startButton, pauseButton);

timer.start();
