let x = 0;
let y = 0;
let easing = 0.25;

function setup() {
  let cnv = createCanvas(windowWidth, windowHeight);
  cnv.id('p5-canvas');
}

function draw() {
  clear();
  
  x += (mouseX - x) * easing;
  y += (mouseY - y) * easing;
  
  noStroke();
  fill(125,42,56);
  circle(x, y, 8);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
