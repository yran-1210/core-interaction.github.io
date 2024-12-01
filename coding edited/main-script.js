// Main entry animation and redirect
const mainEntry = document.getElementById("main-entry");

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
