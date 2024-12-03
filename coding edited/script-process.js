let currentSlideIndex = 0;
showSlides(currentSlideIndex);

function showSlides(index) {
  const slides = document.querySelectorAll(".slides");
  if (index >= slides.length) {
    currentSlideIndex = 0;
  } else if (index < 0) {
    currentSlideIndex = slides.length - 1;
  } else {
    currentSlideIndex = index;
  }

  slides.forEach((slide, i) => {
    slide.style.display = i === currentSlideIndex ? "block" : "none";
  });
}

function changeSlide(step) {
  showSlides(currentSlideIndex + step);
}
