let width = 600;
let height = 400;
let r = 100
let x1 = 0;
let y1 = 0;
let y2 = 0;
let t = 0
let graph_arr = [];

function setup() {
  createCanvas(width, height); 
  angleMode(DEGREES);
  frameRate(30);
}

function draw() {
  background(0);
  strokeWeight(1);
  translate(200, 200);
  t++;

  //sin, cosを計算
  let {x2, y2} = line_vertex(t);
  
  //円を描画
  noFill();
  ellipse(0, 0, 200, 200);
  //中心点を描画
  fill(255, 255, 100);
  ellipse(x1, y1, 7, 7);
  //中心からx2,x2への直線を描画
  line(x1, y1, x2, y2);
  //円の横の直線を描画
  line(r, -100, r, 100);
  //y2の直線を描画
  line(x2, y2, 100, y2);

  //配列の先頭に値を追加
  graph_arr.unshift(float(y2));
  //配列の要素数が300を超えたら末尾の要素を削除
  if (graph_arr.length > width-300) {
    graph_arr.pop();
  }
  print(graph_arr.length);

  //曲線のグラフを描画
  strokeWeight(2);
  stroke(255);
  for (let i=0; i<t; i++) {
    let py = graph_arr[i];
    let p = createVector(i+r, py);
    point(p);
  }
}

function line_vertex(t){
  x2 = cos(t) * 100;
  y2 = sin(t) * 100;
  return {x2, y2}
}