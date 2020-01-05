

function setup() {
  createCanvas(windowWidth, windowHeight);  //描画領域を設定
}

function draw() {
  let x = mouseX;
  let y = mouseY;

  if (mouseIsPressed){
    background(255);  // マウスクリックしたら白色描画
  }
  

  fill(100, 100, 100)
  ellipse(x, y, 80, 80);
}