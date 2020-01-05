let now_time = 0;
let button = false;
let jigen = false;
let n_hour;
let n_min;
let n_sec;
let AA;
let later_time = 1;  //分後

function setup() {
  createCanvas(600, 600);  //描画領域を設定
  angleMode(DEGREES);
}

function draw() {
  background(150, 150, 150);
  if (button) {
    start();
  }
  if (jigen) {
    show();
  }
}

function show() {
  button = null;
  stroke(0);
  fill(220, 0, 20);
  strokeWeight(4);
  textSize(32);
  text(AA, 100, 300)
}

//URLのハッシュ(#)が変更されると実行
window.onhashchange = function(){
  //ハッシュ(#)部分を取得
  var url_hash = this.location.hash;
  if (url_hash == "#pushed") {
    print("ボタンが押された");
    button = true;
    //setTimeout("reset()", 3000);
  } else if (url_hash == "#reset") {
    print('リセット');
    this.reset();
  }
}

function reset() {
  print('reset');
  let url = location.href;
  window.history.back();

  button = false;
  jigen = false;
}

function start() {
  print('start')
  button = null;
  let d = new Date();
  let hour = d.getHours();
  let min = d.getMinutes();
  let sec = d.getSeconds();

  //hhmmss => ss
  let s = hour * 3600 + min * 60 + sec;
  print('現在時刻は ' + s);

  // 現在時刻(s)に待機時刻を足す
  s_later = s + later_time * 60

  //ss =< hhmmss
  n_hour = Math.floor(s_later / 3600);
  n_min = Math.floor(s_later % 3600 / 60);
  n_sec = Math.floor(s_later % 60);
    
  AA = later_time + '分後の時刻は ' + n_hour + ':' + n_min + ':' + n_sec
  jigen = true
  let ms = later_time * 10000;
  window.setTimeout("reset()", ms);
}