document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector(".carousel");
  const items = document.querySelectorAll(".carousel-item");
  const itemCount = items.length;
  const itemWidth = carousel.offsetWidth / 4; // 每个项目的宽度（假设显示 4 个项目）
  const carouselWidth = itemWidth * itemCount;

  // 克隆前 4 个和后 4 个项目
  for (let i = 0; i < 4; i++) {
    const cloneStart = items[i].cloneNode(true);
    const cloneEnd = items[itemCount - 1 - i].cloneNode(true);
    carousel.appendChild(cloneStart); // 添加到尾部
    carousel.prepend(cloneEnd); // 添加到头部
  }

  // 设置初始位置
  let position = -itemWidth * 4;
  carousel.style.transform = `translateX(${position}px)`;

  // 自动滚动逻辑
  function scrollCarousel() {
    position -= itemWidth / 2; // 通过调小位移来减慢滚动速度
    carousel.style.transition = "transform 1.2s ease"; // 加长动画时间，减缓滚动视觉
    carousel.style.transform = `translateX(${position}px)`;

    // 如果滚动到边界，瞬间回到初始位置
    setTimeout(() => {
      if (Math.abs(position) >= carouselWidth + itemWidth * 4) {
        position = -itemWidth * 4;
        carousel.style.transition = "none";
        carousel.style.transform = `translateX(${position}px)`;
      }
    }, 1200); // 等待动画完成
  }

  // 自动播放
  setInterval(scrollCarousel, 6000); // 每 10 秒滚动一次
});
