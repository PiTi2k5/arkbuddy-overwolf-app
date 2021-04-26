overwolf.windows.onMessageReceived.addListener((message)=>{
    if(message.id ===  '1'){
      addTimer(message.content)
  }
})
var timers = [];
var audio = new Audio('https://www.dododex.com/media/audio/lowbeep.mp3');
function checkTimer() {
  timers.forEach(timerCheck)
}

function timerCheck(timer, i) {
  var n = Date.now();
  //console.log(`CT:${n} | T:${timer}`)
  if(n>=timer) {
    timers.splice(i, 1);
    audio.play();
    return console.log("Times up")
  }
  //console.log(timer, i)
}

setInterval(function(){
  checkTimer(); 
}, 1000);

function addTimer(seconds) {
  seconds = parseInt(seconds * 1000)
  var n = Date.now();
  var newTimerTime = parseInt(n + seconds)
  timers.push(newTimerTime) 
  return console.log(`Timer set for ${parseInt(seconds/1000)}s`)
}

function currentTimers() {
  return console.log(`Currently running timers - ${timers.length} ${timers}`)
}