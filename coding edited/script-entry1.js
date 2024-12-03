document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector(".carousel");
  const items = document.querySelectorAll(".carousel-item");
  const itemWidth = 300 + 20; // Album width + gap
  const carouselWidth = itemWidth * items.length;

  // Clone items for infinite scrolling
  items.forEach((item) => {
    const cloneStart = item.cloneNode(true);
    const cloneEnd = item.cloneNode(true);
    carousel.appendChild(cloneStart);
    carousel.prepend(cloneEnd);
  });

  // Set initial position
  let position = -carouselWidth;
  carousel.style.transform = `translateX(${position}px)`;

  // Scroll function
  function scrollCarousel() {
    position -= itemWidth / 2; // Adjust for smooth scrolling
    carousel.style.transition = "transform 1.5s ease";
    carousel.style.transform = `translateX(${position}px)`;

    // Reset for infinite loop
    setTimeout(() => {
      if (Math.abs(position) >= carouselWidth * 2) {
        position = -carouselWidth;
        carousel.style.transition = "none";
        carousel.style.transform = `translateX(${position}px)`;
      }
    }, 1500); // Match transition duration
  }

  setInterval(scrollCarousel, 4000); // Scroll every 4 seconds
});
