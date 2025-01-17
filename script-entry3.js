const cd = document.querySelector(".cd");
const audio = document.getElementById("music");
const playPauseContainer = document.querySelector(".play-pause-container");
let angle = 0;
const playIcon = document.querySelector(".fa-play");
const slider = document.getElementById("music-slider");
slider.value = 0;
let isPlaying = false;

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
const imgSrc = `assets3/cover${id}.jpg`;
const audioSrc = `assets3/${id}.mp3`;
cd.src = imgSrc;
audio.src = audioSrc;

function togglePlay() {
  isPlaying = !isPlaying;
  if (isPlaying) {
    audio.play();
    playIcon.classList.remove("fa-play");
    playIcon.classList.add("fa-pause");
  } else {
    audio.pause();
    playIcon.classList.add("fa-play");
    playIcon.classList.remove("fa-pause");
  }
}

rotateCD();

function rotateCD() {
  if (isPlaying) {
    angle += 0.5;
    cd.style.transform = `rotate(${angle}deg)`;
  }
  requestAnimationFrame(rotateCD);
}

function setMusic() {
  audio.currentTime = (slider.value / 100) * audio.duration;
}

function updateSlider() {
  slider.value = (audio.currentTime / audio.duration) * 100;
}

slider.addEventListener("input", setMusic);
audio.addEventListener("timeupdate", updateSlider);
audio.addEventListener("ended", () => {
  audio.currentTime = 0;
  audio.pause();
  playIcon.classList.add("fa-play");
  playIcon.classList.remove("fa-pause");
});
playPauseContainer.addEventListener("click", togglePlay);
