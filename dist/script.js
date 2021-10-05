var canvas = document.getElementById("game");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var ctx = canvas.getContext("2d");
var w = canvas.width;
var h = canvas.height;
var cursorPos = {
    x: 0,
    y: 0,
};
var clicking = false;
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
window.addEventListener("mousemove", function (e) {
    cursorPos.x = e.pageX;
    cursorPos.y = e.pageY;
});
window.addEventListener("mousedown", function (e) {
    clicking = true;
});
window.addEventListener("mouseup", function (e) {
    clicking = false;
});
