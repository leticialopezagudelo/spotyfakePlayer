
// Global variables
let songs = [];
let currentSong = 0;
let volume = 0.3; // initial volume
const colors = [
  "Aqua",
  "Aquamarine",
  "Blue",
  "BlueViolet",
  "Chartreuse",
  "Coral",
  "Crimson",
  "Cyan",
  "DarkBlue",
  "DarkMagenta",
  "DarkOrange",
  "DarkOrchid",
  "DarkRed",
  "DeepPink",
  "FireBrick",
  "Fuchsia",
  "GreenYellow",
  "Lime"
];
const title = document.querySelector("h1");
const input = document.querySelector("input");
const label = document.querySelector("label");
const previous = document.querySelector("#previous");
const play = document.querySelector("#play");
const pause = document.querySelector("#pause");
const next = document.querySelector("#next");
const player = document.querySelector("audio");
//const random = document.querySelector("#random");
//const repeat = document.querySelector("#repeat");
//const repeatOn = document.querySelector("#repeatOn");
const volumeUp = document.querySelector("#volumeUp");
const volumeDown = document.querySelector("#volumeDown");
const pauseButton = pause.innerText;
const playButton = play.innerText;

player.volume = volume;
player.onended = playNext;
input.onchange = getSongs;
previous.onclick = previousSong;
next.onclick = nextSong;
volumeUp.onclick = volUp;
volumeDown.onclick = volDown;
/*random.onclick = getRandomSong;*/


function getSongs(event) {
  songs = event.target.files;
  playSong();
  label.innerText = songs[currentSong].name.slice(0, -4);
  title.innerText = "Spotyfake Player 🎧";
}

function playSong() {
  let song = URL.createObjectURL(songs[currentSong]);
  label.innerText = songs[currentSong].name.slice(0, -4);
  label.style.color = colors[Math.floor(Math.random() * songs.length)];
  label.style.backgroundColor =
    colors[Math.floor(Math.random() * songs.length)];
  document.querySelector("body").style.backgroundColor =
    colors[Math.floor(Math.random() * colors.length)];
  player.setAttribute("src", song);
  player.play();
  play.innerText = pauseButton;
  play.onclick = pauseCurrent;
}

function pauseCurrent() {
  play.innerText = playButton;
  player.pause();
  play.onclick = playCurrent;
}

function playCurrent() {
  play.innerText = pauseButton;
  player.play();
  play.onclick = pauseCurrent;
}

function previousSong() {
  if (currentSong - 1 >= 0) {
    currentSong--;
    playSong();
  }
}

function nextSong() {
  if (currentSong + 1 < songs.length - 1) {
    currentSong++;
    playSong();
  }
}

function volUp() {
  volume += 0.05;
  player.volume = volume.toFixed(2);
  console.log(player.volume);
}

function volDown() {
  if (volume >= 0.001) {
    volume -= 0.05;
    player.volume = volume.toFixed(2);
    console.log(player.volume);
  }
}

function playNext() {
  currentSong++;
  playSong();
}
