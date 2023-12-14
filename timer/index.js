const durationInput = document.querySelector("#duration");
const pauseButton = document.querySelector("#pause");
const startButton = document.querySelector("#start");
const circle = document.querySelector("circle");

const perimeter = circle.getAttribute("r") * Math.PI * 2;
circle.setAttribute("stroke-dasharray", perimeter);

let duration;
const timer = new Timer(durationInput, startButton, pauseButton, {
  onStart(totalDuration) {
    duration = totalDuration;
  },
  onTick(timeRemaining) {
    circle.setAttribute(
      "stroke-dashoffset",
      (perimeter * timeRemaining) / duration - perimeter
    );
  },
  onComplete() {
    console.log("Timer just completed");
  },
});
