document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector(".carousel");
  const items = document.querySelectorAll(".carousel-item");
  const itemWidth = 300 + 20; // Album width + gap
  const carouselWidth = itemWidth * items.length;

  items.forEach((item) => {
    const cloneStart = item.cloneNode(true);
    const cloneEnd = item.cloneNode(true);
    carousel.appendChild(cloneStart);
    carousel.prepend(cloneEnd);
  });

  let position = -carouselWidth;
  carousel.style.transform = `translateX(${position}px)`;

  function scrollCarousel() {
    position -= itemWidth / 2;
    carousel.style.transition = "transform 1.5s ease";
    carousel.style.transform = `translateX(${position}px)`;

    setTimeout(() => {
      if (Math.abs(position) >= carouselWidth * 2) {
        position = -carouselWidth;
        carousel.style.transition = "none";
        carousel.style.transform = `translateX(${position}px)`;
      }
    }, 1500);
  }

  setInterval(scrollCarousel, 4000);
});
