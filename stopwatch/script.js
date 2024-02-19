var ms = 0;
var s = 0;
var m = 0;
var t = 0;
var start = document.getElementById('start');
var stop = document.getElementById('stop');
var reset = document.getElementById('reset');
var timer = document.getElementById('timer');
function update(){
  
  ms += 1;
  if (ms >= 100){
    s += 1;
    ms = 0;
  }
  if (s >= 60){
    m += 1;
    s = 0;
  }
  var mstxt = ms
  var stxt = s
  var mtxt = m
  ms < 10 ? mstxt = '0' + ms : mstxt = ms
  m < 10 ? mtxt = '0' + m : mtxt = m
  s < 10 ? stxt = '0' + s : stxt = s
  var time = mtxt + ':' + stxt + ':' + mstxt 
  timer.innerText = time
  t = setTimeout(update, 10);
}
start.onclick=update;
stop.onclick=function (){
  clearTimeout(t)
}
reset.onclick=function (){
  ms = 0
  s =0
  m = 0 
  timer.innerText= '00:00:00'
  clearTimeout(t)
}


