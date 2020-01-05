let hour;
let min;
let sec;
let ntime;
let s;
let later_time

function getTime() {
  let d = new Date();
  hour = d.getHours();
  min = d.getMinutes();
  sec = d.getSeconds();
}

function showClock() {
  getTime();
  hour = ('0' + hour).slice(-2);
  min = ('0' + min).slice(-2);
  sec = ('0' + sec).slice(-2);

  ntime = hour + ':' + min + ':' + sec;
  document.getElementById('RealtimeClockArea').innerHTML = ntime;
}

document.getElementById('text-button').onclick = function() {
  console.log('pressed button');
  getTime()
  s = hour * 3600 + min * 60 + sec;
  s = s + 10 * 60;
  let n_hour = Math.floor(s / 3600);
  let n_min = Math.floor(s % 3600 / 60);
  let n_sec = Math.floor(s % 60);
  later_time = n_hour + ':' + n_min + ':' + n_sec;
  document.getElementById('10minLaterTime').innerHTML = later_time;
}


setInterval('showClock()', 1000);