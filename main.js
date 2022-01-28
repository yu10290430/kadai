//ストップウォッチ
let timer = document.getElementById("timer");
let start = document.getElementById("start");
let stop = document.getElementById("stop");
let reset = document.getElementById("reset");

let hours = 0;
let minits = 0;
let seconds = 0;
let milliseconds = 0;
let timerId;
let status = "stop";

function stopWatch(){
      milliseconds++;
      if(milliseconds / 10 == 1){
        seconds++;
        milliseconds = 0;
      if(seconds / 60 == 1){
        minits++;
        seconds = 0;
        if (minits / 60 == 1){
          hours++;
          minits = 0;
        }
      }
  }

timer.innerHTML =hours + ":" +  minits + ":" + seconds + ":" + milliseconds;
}


 // reset
  function setButtonStateReset() {
    start.disabled = false; // 活性
    stop.disabled = true;    // 非活性
    reset.disabled = true;  // 非活性
  }

  // start
  function setButtonStateRunning() {
    start.disabled = true; // 非活性
    stop.disabled = false;    // 活性
    reset.disabled = false;  // 活性
}

  // stop
  function setButtonStateStopped() {
    start.disabled = false; // 活性
    stop.disabled = true;    // 非活性
    start.disabled = false;  // 活性
  }   

//スタートボタン
start.addEventListener("click",function(){
  if (status === "stop"){
   timerId = setInterval(stopWatch,100);
   status = "start";
   setButtonStateRunning();
  }
});
//ストップボタン
stop.addEventListener("click",function(){
   if(status === "start"){
    clearInterval(timerId);
    status = "stop";
    setButtonStateStopped();
   }
});
//リセットボタン
reset.addEventListener("click",function(){
 clearInterval(timerId);
 timer.innerHTML = "0:0:0:0";
 hours = 0;
 minits = 0;
 seconds = 0;
 milliseconds = 0;
 status = "stop";
 setButtonStateReset();
});


