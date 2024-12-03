document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector(".carousel");
  const items = document.querySelectorAll(".carousel-item");
  const itemWidth = 300 + 20; // Album width + gap
  const carouselWidth = itemWidth * items.length;

  // Clone all items for infinite scrolling
  items.forEach((item) => {
    const cloneStart = item.cloneNode(true);
    const cloneEnd = item.cloneNode(true);
    carousel.appendChild(cloneStart);
    carousel.prepend(cloneEnd);
  });

  // Set initial position
  let position = -carouselWidth;
  carousel.style.transform = `translateX(${position}px)`;

  // Auto-scroll logic
  function scrollCarousel() {
    position -= itemWidth / 2; // Smaller step for smooth scrolling
    carousel.style.transition = "transform 1.5s ease";
    carousel.style.transform = `translateX(${position}px)`;

    // Reset position for infinite loop
    setTimeout(() => {
      if (Math.abs(position) >= carouselWidth * 2) {
        position = -carouselWidth;
        carousel.style.transition = "none";
        carousel.style.transform = `translateX(${position}px)`;
      }
    }, 1500);
  }
 setInterval(scrollCarousel, 5000); // Adjust interval for slower scrolling
});
  // Auto-play
