const videoPlayer = document.getElementById("video");
const BtnPlay = document.getElementById("play");
const BtnPause = document.getElementById("pause");
const BtnBackward = document.getElementById("backward");
const BtnForward = document.getElementById("forward");
const progress = document.getElementById("progress")
const volumen = document.getElementById("volumen")
//listener
EventListener();


function EventListener() {
BtnPlay.addEventListener("click", handlePlay);
BtnPause.addEventListener("click", handlePause);
BtnForward.addEventListener("click", handleForward);
BtnBackward.addEventListener("click", handleBackward);
videoPlayer.addEventListener('loadeddata', handleLoaded);
videoPlayer.addEventListener('timeupdate', handleTimeUpdate);
progress.addEventListener('input', handleInput);
volumen.addEventListener('input', handleVolumen);
}

function handlePlay(e) {
  videoPlayer.play();
  BtnPlay.hidden = true;
  BtnPause.hidden = false;
  console.log("play");
}

function handlePause(e) {
  videoPlayer.pause();
  BtnPlay.hidden = false;
  BtnPause.hidden = true;
  console.log("pause");
}

function handleForward(e){
  videoPlayer.currentTime += 10 
}

function handleBackward(e){
  videoPlayer.currentTime -= 10 
}

function handleLoaded(e){
  progress.max = videoPlayer.duration
  videoPlayer.volume = volumen.value
}

function handleTimeUpdate(e){
  progress.value = videoPlayer.currentTime
}
function handleInput (e){
  videoPlayer.currentTime = progress.value 
}


function handleVolumen(e){
  videoPlayer.volume= volumen.value
}