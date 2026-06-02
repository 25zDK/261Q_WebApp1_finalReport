let x = 0;
let y = 0;
let easing = 0.25;

function setup() {
  // 画面全体（ブラウザの幅と高さ）にキャンバスを作る
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(241); // 背景を毎回塗りつぶす（残像を消す）
  
  // イージング（滑らかな追従）の計算
  x += (mouseX - x) * easing;
  y += (mouseY - y) * easing;
  
  // 図形の描画（ここでは青い円）
  noStroke();
  fill(232,153,104);
  circle(x, y, 16);
}

// ユーザーがブラウザのサイズを変えたときに背景も追従させる設定
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
