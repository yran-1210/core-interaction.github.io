const cd = document.querySelector(".cd");
const music = document.getElementById("music");

let isPlaying = false;

cd.addEventListener("click", () => {
  if (isPlaying) {
    cd.style.animationPlayState = "paused";
    music.pause();
  } else {
    cd.style.animation = "spin 3s linear infinite";
    music.play();
  }
  isPlaying = !isPlaying;
});

document.head.insertAdjacentHTML(
  "beforeend",
  `<style>
    @keyframes spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
  </style>`
);
