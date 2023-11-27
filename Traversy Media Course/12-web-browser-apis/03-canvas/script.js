const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

// Draw rectangle
ctx.fillStyle = "green";
ctx.fillRect(10, 10, 150, 100);

// Draw Circle
ctx.fillStyle = "red";
ctx.arc(300, 300, 100, 0, Math.PI * 2);
ctx.fill();

// Draw Line
ctx.beginPath();
ctx.strokeStyle = "blue";
ctx.lineWidth = 5;
ctx.moveTo(10, 10);
ctx.lineTo(300, 300);
ctx.stroke();

// Draw text
ctx.font = "30px Arial";
ctx.fillStyle = "yellow";
ctx.lineWidth = 1;
ctx.fillText("Hello Luv", 300, 100, 300);
ctx.strokeText("Hello Luv", 300, 500, 300);

// Draw Image
const img = document.querySelector("img");
img.style.display = "none";

img.addEventListener("load", () => {
  ctx.drawImage(img, 250, 250, 100, 100);
});
