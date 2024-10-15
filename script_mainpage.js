document.addEventListener("DOMContentLoaded", function() {
    const paragraphElement = document.getElementById("paragraph");
    const text = "This is a sample paragraph that will appear word by word.";
    const words = text.split(" ");
    let currentWordIndex = 0;
  
    function displayWordByWord() {
      if (currentWordIndex < words.length) {
        paragraphElement.innerHTML += words[currentWordIndex] + " ";
        currentWordIndex++;
        setTimeout(displayWordByWord, 500); // Adjust the delay (500ms) as needed
      }
    }
  
    paragraphElement.style.visibility = "visible";
    displayWordByWord();
  });