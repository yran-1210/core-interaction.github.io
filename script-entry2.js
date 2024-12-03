const imgs1 = document.querySelectorAll(".img1");
const imgs2 = document.querySelectorAll(".img2");
console.log(imgs1);

imgs1.forEach((img1, index) => {
  const img2 = img1.previousElementSibling;

  img1.addEventListener("mouseenter", () => {
    img2.style.transform = "translateX(50%)";
  });

  img1.addEventListener("mouseleave", () => {
    img2.style.transform = "translateX(0%)";
  });

  img1.addEventListener("click", () => {
    const id = index + 1;
    console.log(`Navigating to entry3.html with id=${id}`);
    window.location.href = `entry3.html?id=${id}`;
  });
});
