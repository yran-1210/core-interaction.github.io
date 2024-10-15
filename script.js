document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".image");
  const container = document.querySelector(".container");
  const containerWidth = container.clientWidth;
  const containerHeight = container.clientHeight;
  const margin = 100;

  images.forEach((image) => {
    image.style.left = `${containerWidth / 2 - 50}px`;
    image.style.top = `${containerHeight / 2 - 50}px`;
  });

  function getRandomPosition() {
    return {
      x: Math.random() * (containerWidth - 2 * margin - 100) + margin,
      y: Math.random() * (containerHeight - 2 * margin - 100) + margin,
    };
  }

  setTimeout(() => {
    images.forEach((image) => {
      const { x, y } = getRandomPosition();
      image.style.left = `${x}px`;
      image.style.top = `${y}px`;
      image.style.filter = `blur(${Math.random() * 1.2}px)`;
    });
  }, 1000);

  setInterval(() => {
    images.forEach((image) => {
      const currentX = parseFloat(image.style.left);
      const currentY = parseFloat(image.style.top);
      const floatX = currentX + (Math.random() - 0.5) * 10;
      const floatY = currentY + (Math.random() - 0.5) * 10;
      image.style.left = `${floatX}px`;
      image.style.top = `${floatY}px`;
      const newWidth = 90 + Math.random() * 20;
      image.style.width = `${newWidth}`;
      image.style.height = `${newWidth}`;
    });
  }, 1000);
});
