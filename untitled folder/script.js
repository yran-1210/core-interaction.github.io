const images = document.querySelectorAll(".image-wrapper a");
let imageWidth = images[0].offsetWidth;
let totalWidth = imageWidth * images.length;
let positions = [];
let speed = 2;
images.forEach((image, index) => {
  positions[index] = index * imageWidth;
  console.log(positions[index]);
  image.style.transform = `translateX(${positions[index]}px)`;
});

function scrollImages() {
  console.log(document.body.offsetWidth);
  images.forEach((image, index) => {
    positions[index] -= speed;
    if (positions[index] <= -imageWidth - index * imageWidth) {
      positions[index] += totalWidth + document.body.offsetWidth;
    }
    image.style.transform = `translateX(${positions[index]}px)`;
  });
  requestAnimationFrame(scrollImages);
}

scrollImages();
function updateWidth() {
  imageWidth = images[0].offsetWidth;
  totalWidth = imageWidth * images.length;
  positions = [];
  images.forEach((image, index) => {
    positions[index] = index * imageWidth;
    image.style.transform = `translateX(${positions[index]}px)`;
  });
}
window.addEventListener("resize", () => {
  updateWidth();
});
document.querySelector(".image-wrapper").addEventListener("mouseover", () => {
  speed = 0;
});
document.querySelector(".image-wrapper").addEventListener('mouseout',()=>{
    speed=2
})