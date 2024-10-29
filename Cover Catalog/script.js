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
  let id = index + 1;
  console.log(id);

  img1.addEventListener("click", () => {
    window.location.href = `../cd/entry6.html?id=${id}`;
  });
});
