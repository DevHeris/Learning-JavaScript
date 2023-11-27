const img = document.querySelector("img");

let start; // Undefined at first - This variable will store the starting time for the animation
let done = false; // This will be set to true when we want the animation to stop

function step(timestamp) {
  // When the animation starts, 'start' will capture the timestamp
  if (start === undefined) {
    start = timestamp;
  }

  // Calculate the time elapsed since the start of the animation
  const elapsed = timestamp - start;

  // If more than 5 seconds (5000 milliseconds) have passed, set 'done' to true
  if (elapsed > 5000) {
    done = true;
  }

  // If 'done' is true, the animation has completed 5 seconds, so don't execute the following animation code
  if (done) {
    return;
  }

  // Update the image's style property to create the animation effect
  // The 'translateX' and 'rotate' CSS properties are changed based on the elapsed time
  img.style.transform = `translateX(${elapsed / 10}px) rotate(${
    elapsed / 10
  }deg)`;
  // The 'translateX' and 'rotate' values change continuously over the 5 seconds

  // Request the next frame for the animation
  requestAnimationFrame(step);
}

// Initiate the animation by requesting the first frame
requestAnimationFrame(step);
