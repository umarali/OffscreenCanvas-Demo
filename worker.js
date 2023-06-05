let x = 0;
let y = 0;

onmessage = function(e) {
  const offscreenCanvas = e.data.canvas;
  const ctx = offscreenCanvas.getContext('2d');

  setInterval(() => {
    ctx.clearRect(0, 0, offscreenCanvas.width, offscreenCanvas.height);
    ctx.fillRect(x, y, 50, 50);
    x = (x + 1) % offscreenCanvas.width;
    y = (y + 1) % offscreenCanvas.height;
  }, 1000 / 60);
}
