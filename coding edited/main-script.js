// Main entry animation
const mainEntry = document.getElementById("main-entry");

mainEntry.addEventListener("click", () => {
  mainEntry.style.color = "black";
  mainEntry.style.backgroundColor = "white";
  mainEntry.style.border = "2px solid black";
  mainEntry.innerHTML = "Entering...";
  setTimeout(() => {
    window.location.href = "main-content.html"; // Redirect to your main page
  }, 1000);
});

// Additional interactions for entries
const entries = document.querySelectorAll(".entry");
entries.forEach((entry) => {
  entry.addEventListener("click", () => {
    console.log(`You clicked on: ${entry.textContent}`); // Log the clicked entry
    entry.style.color = "gray"; // Optional visual feedback
  });
});

// Toggle spinning animation on click
const rotatingCd = document.querySelector(".rotating-cd");

if (rotatingCd) {
  rotatingCd.addEventListener("click", () => {
    if (rotatingCd.style.animationPlayState === "paused") {
      rotatingCd.style.animationPlayState = "running";
    } else {
      rotatingCd.style.animationPlayState = "paused";
    }
  });
}
