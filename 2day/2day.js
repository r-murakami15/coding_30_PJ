let posX = 100;
let posY = 100;

function setup() {
  createCanvas(600, 600);  //描画領域を設定
}



function draw() {
  let posX = mouseX;
  let posY = mouseY;

  background(237, 34, 93);
  fill(0);
  posX = colision(posX);
  posY = colision(posY);

  print(posX);
  rect(posX, posY, 50, 50);
  
}

//function mouseWheel(event) {
  //let mw = event;
  //print(mw);
  //posX += mw.deltaX;
  //posY += mw.deltaY;
//}

function colision(pos) {
  if (pos < 0) {
    pos = 0;
  } else {
    if (pos > 600-50) {
    pos = 550;
    }
  }
  return(pos)
  
}