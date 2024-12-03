// Main entry animation and redirect
const mainEntry = document.getElementById("main-entry");
const rotatingCd = document.querySelector(".rotating-cd");
const backgroundMusic = document.getElementById("background-music");

// Ensure music starts playing when the page loads
document.addEventListener("DOMContentLoaded", function () {
  backgroundMusic.muted = false;
  backgroundMusic.play().catch((error) => {
    console.log("Autoplay blocked. Music will require interaction.");
  });
});

// Toggle spinning animation and music playback on CD click
if (rotatingCd) {
  rotatingCd.addEventListener("click", () => {
    if (rotatingCd.style.animationPlayState === "paused") {
      rotatingCd.style.animationPlayState = "running";
      backgroundMusic.play();
    } else {
      rotatingCd.style.animationPlayState = "paused";
      backgroundMusic.pause();
    }
  });
}

mainEntry.addEventListener("click", () => {
  // Visual feedback for the button
  mainEntry.style.color = "black";
  mainEntry.style.backgroundColor = "white";
  mainEntry.style.border = "2px solid black";
  mainEntry.innerHTML = "Entering...";

  // Redirect to entry1.html after a brief delay
  setTimeout(() => {
    window.location.href = "entry1.html"; // Redirect to entry1.html
  }, 1000); // Adjust the delay if needed
});

// Additional interactions for other entries
const entries = document.querySelectorAll(".entry");
entries.forEach((entry) => {
  entry.addEventListener("click", () => {
    console.log(`You clicked on: ${entry.textContent}`); // Log the clicked entry
    entry.style.color = "gray"; // Optional visual feedback
  });
});