let x = 0;
let y = 0;
let easing = 0.25;

function setup() {
  createCanvas(windowWidth, windowHeight);
  canvas.id('p5-canvas');
}

function draw() {
  background(241);
  
  x += (mouseX - x) * easing;
  y += (mouseY - y) * easing;
  
  noStroke();
  fill(232,153,104);
  circle(x, y, 16);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
