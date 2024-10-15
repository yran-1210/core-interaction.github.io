document.addEventListener("DOMContentLoaded", function() {
    const paragraphElement = document.getElementById("paragraph");
    const text = "We invite you to explore the world through a shifting lens of perception, where culture, technology, and time collide.";
    let currentCharIndex = 0;
  
    function displayLetterByLetter() {
      if (currentCharIndex < text.length) {
        paragraphElement.innerHTML += text[currentCharIndex];
        currentCharIndex++;
        setTimeout(displayLetterByLetter, 100); // 每个字母出现的间隔时间（100ms，可根据需要调整）
      }
    }
  
    paragraphElement.style.visibility = "visible";
    displayLetterByLetter();
  });