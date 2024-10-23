const cd = document.querySelector('.cd')
const playPauseContainer = document.querySelector('.play-pause-container');
let isPlaying = false;
const audio = document.getElementById('music');
let rotationAngle = 0;

const playIcon = document.querySelector('.fa-play');
const slider = document.querySelector('.music-slider');
slider.value = 0
function togglePlay() {
  console.log(playIcon.classList);
  if (playIcon.classList.contains('fa-play')) {

    playIcon.classList.remove('fa-play');
    playIcon.classList.add('fa-pause');
    audio.play();
    isPlaying = true;
    cd.style.transform = `rotate(${rotationAngle}deg)`;
    rotateCD();
  } else {
    isPlaying = false;
    audio.pause();
    cd.style.transform = `rotate(${rotationAngle}deg)`;
    playIcon.classList.remove('fa-pause');
    playIcon.classList.add('fa-play');
  }
}
function rotateCD() {
  console.log(rotationAngle, (audio.currentTime / audio.duration))
  if (isPlaying) {
    rotationAngle += 1;
    cd.style.transform = `rotate(${rotationAngle}deg)`;
    requestAnimationFrame(rotateCD);
  }
} 
function updateSlider() {
  slider.value = (audio.currentTime / audio.duration) * 100;
}
function setSlider() {
  const currentTime = (slider.value / 100) * audio.duration;
  audio.currentTime = currentTime;
}
playPauseContainer.addEventListener('click', togglePlay);
audio.addEventListener('timeupdate', updateSlider);
slider.addEventListener('input', setSlider);
audio.addEventListener('ended', () => {
  audio.currentTime = 0;
  audio.play();
});