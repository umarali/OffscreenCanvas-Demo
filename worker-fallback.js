let x = 0;
let y = 0;

setInterval(() => {
  // Instead of drawing to the canvas, we calculate the new position
  // and send it back to the main thread.
  x = (x + 1) % 500;
  y = (y + 1) % 500;

  postMessage({ x, y });
}, 1000 / 60);
