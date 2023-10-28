function clock(timestamp) {
  // The function to animate the clock; runs for every repaint

  const now = new Date(); // Get the current date and time
  const canvas = document.getElementById("canvas"); // Get the canvas element
  const ctx = canvas.getContext("2d"); // Get the 2D rendering context of the canvas

  // Setup Canvas

  ctx.save(); // Save the default state

  ctx.clearRect(0, 0, 500, 500); // Clear the canvas for redrawing
  ctx.translate(250, 250); // Set the origin of the x and y axis to the middle of the canvas
  ctx.rotate(-Math.PI / 2); // Rotate clock -90 degrees, aligning 12 o'clock position

  // Set default styles
  ctx.strokeStyle = "#000000"; // Color for clock hands
  ctx.fillStyle = "#f4f4f4"; // Fill color for clock elements
  ctx.lineWidth = 5; // Width of the lines
  ctx.lineCap = "round"; // Rounded line ends for a smoother appearance

  // Draw clock face/border
  ctx.save(); // Save the state for clock face
  ctx.beginPath();
  ctx.lineWidth = 14;
  ctx.strokeStyle = "#800000";
  ctx.arc(0, 0, 142, 0, Math.PI * 2, true); // Draw outer circle representing the clock face
  ctx.stroke(); // Apply stroke
  ctx.fill(); // Fill the clock face
  ctx.restore(); // Restore state after drawing clock face

  // Draw hour lines
  ctx.save(); // Save state before drawing hour lines
  ctx.lineWidth = 4;
  for (let i = 0; i < 12; i++) {
    ctx.beginPath();
    ctx.rotate(Math.PI / 6); // Rotate context by 30 degrees (PI/6) for each hour line
    ctx.moveTo(100, 0); // Starting point for the hour line. the translate done earlier has an effect on this
    ctx.lineTo(120, 0); // Ending point for the hour line. the rotate done earlier has an efffect on this
    ctx.stroke(); // Draw the hour line
  }
  ctx.restore(); // Restore state after drawing hour lines

  // Draw minute lines
  ctx.save(); // Save state before drawing minute lines
  for (let i = 0; i < 60; i++) {
    if (i % 5 !== 0) {
      ctx.beginPath();
      ctx.moveTo(117, 0); // Shorter minute lines
      ctx.lineTo(120, 0); // Ending point for shorter minute lines
      ctx.stroke(); // Draw shorter minute lines
    }
    ctx.rotate(Math.PI / 30); // Rotate context by 6 degrees (PI/30) for each minute line
  }
  ctx.restore(); // Restore state after drawing minute lines

  // Get current time
  const hr = now.getHours() % 12; // Convert to 12-hour format
  const min = now.getMinutes();
  const sec = now.getSeconds();

  // Draw hour hand
  ctx.save(); // Save state for hour hand
  ctx.rotate(
    (Math.PI / 6) * hr + (Math.PI / 360) * min + (Math.PI / 21600) * sec
  ); // Calculate the rotation for the hour hand
  ctx.strokeStyle = "#800000"; // Color for the hour hand
  ctx.lineWidth = 10; // Width for the hour hand
  ctx.beginPath();
  ctx.moveTo(-20, 0); // Start point for hour hand
  ctx.lineTo(50, 0); // End point for hour hand
  ctx.stroke(); // Draw the hour hand
  ctx.restore(); // Restore state after drawing the hour hand

  // Draw minute hand
  ctx.save(); // Save state for minute hand
  ctx.rotate((Math.PI / 30) * min + (Math.PI / 1800) * sec); // Calculate the rotation for the minute hand
  ctx.strokeStyle = "#800000"; // Color for the minute hand
  ctx.lineWidth = 7; // Width for the minute hand
  ctx.beginPath();
  ctx.moveTo(-28, 0); // Start point for minute hand
  ctx.lineTo(80, 0); // End point for minute hand
  ctx.stroke(); // Draw the minute hand
  ctx.restore(); // Restore state after drawing the minute hand

  // Draw second hand
  ctx.save(); // Save state for the second hand
  ctx.rotate((Math.PI * sec) / 30); // Calculate the rotation for the second hand
  ctx.strokeStyle = "#FF7F50"; // Color for the second hand
  ctx.fillStyle = "#FF7F50"; // Fill color for the second hand
  ctx.lineWidth = 5; // Width for the second hand
  ctx.beginPath();
  ctx.moveTo(-30, 0); // Start point for second hand
  ctx.lineTo(100, 0); // End point for second hand
  ctx.stroke(); // Draw the second hand line
  ctx.beginPath();
  ctx.arc(0, 0, 10, 0, Math.PI * 2, true); // Draw a small circle at the center for the second hand
  ctx.fill(); // Fill the circle
  ctx.restore(); // Restore state after drawing the second hand

  ctx.restore(); // Restore the default state to prevent additional second hands in animations

  requestAnimationFrame(clock); // Request the next animation frame
}

requestAnimationFrame(clock); // Start the clock animation

// Understanding the use of save() and restore()
ctx.fillStyle = "blue"; // Set fill style to blue
ctx.save(); // Save the current state

ctx.fillStyle = "red"; // Change fill style to red

// At this point, the fill style is 'red'
ctx.fillRect(50, 50, 100, 100); // This rectangle will be filled in red

ctx.restore(); // Restore the context to the state as of the last 'save()'

// Even though the fill style was changed to 'red after the save,
// after restore, the fill style reverts to 'blue' as it was at the time of save
// However, changes made after the 'save' persist, like the fill style being 'red'
ctx.fillRect(200, 50, 100, 100); // This rectangle will still be filled in red
