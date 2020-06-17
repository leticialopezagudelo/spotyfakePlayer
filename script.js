let songs = [];
let currentSong = 0;
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
const next = document.querySelector("#next");
const player = document.querySelector("audio");
player.volume = 0.3;

input.onchange = getSongs;
previous.onclick = previousSong;
next.onclick = nextSong;

function getSongs(event) {
  songs = event.target.files;
  playSong();
  label.innerText = songs[currentSong].name.slice(0, -4);
  title.innerText = "Spotyfake Player 🎧";
}

function playSong() {
  let song = URL.createObjectURL(songs[currentSong]);
  label.innerText = songs[currentSong].name.slice(0, -4);
  label.style.color = colors[Math.floor(Math.random() * songs.lenght)];
  label.style.backgroundColor =
    colors[Math.floor(Math.random() * songs.lenght)];
  player.setAttribute("src", song);
  player.play();
  play.innerText = "⏸";
  play.onclick = pause;
}

function pause() {
  play.innerText = "▶️";
  player.pause();
  play.onclick = playCurrent;
}

function playCurrent() {
  play.innerText = "⏸";
  player.play();
  play.onclick = pause;
}

function previousSong() {
  if (currentSong - 1 >= 0) {
    currentSong--;
    playSong();
  }
}

function nextSong() {
  if (currentSong + 1 <= songs.lenght - 1) {
    currentSong++;
    playSong();
  }
}
