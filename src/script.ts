let canvas = document.getElementById("game") as HTMLCanvasElement;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let ctx = canvas.getContext("2d");

let w = canvas.width;
let h = canvas.height;

let cursorPos = {
  x: 0,
  y: 0,
};
let clicking = false;

function draw() {
  ctx.clearRect(0, 0, w, h);

  ctx.fillStyle = "#11df45";
  ctx.fillRect(0, 0, w, h);

  ctx.fillStyle = clicking ? "#FF0000" : "#000000";
  ctx.beginPath();
  ctx.arc(cursorPos.x, cursorPos.y, 15, 0, Math.PI * 2);
  ctx.fill();
  ctx.closePath();

  window.requestAnimationFrame(draw);
}
window.requestAnimationFrame(draw);

window.addEventListener("mousemove", (e) => {
  cursorPos.x = e.pageX;
  cursorPos.y = e.pageY;
});
window.addEventListener("mousedown", (e) => {
  clicking = true;
});
window.addEventListener("mouseup", (e) => {
  clicking = false;
});
