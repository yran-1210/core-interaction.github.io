document.addEventListener('DOMContentLoaded', () => {
  const carousel = document.querySelector('.carousel');
  const items = document.querySelectorAll('.carousel-item');

  // 复制前 4 张图片以实现循环效果
  const clonedItems = Array.from(items).map(item => item.cloneNode(true));
  clonedItems.forEach(item => carousel.appendChild(item)); // 将复制的图片加到容器中

  // 监听动画结束事件，重新设置动画位置，保持轮播效果
  carousel.addEventListener('animationiteration', () => {
    carousel.style.animation = 'none'; // 停止当前动画
    carousel.offsetHeight; // 强制重绘，使得动画可以重新开始
    carousel.style.animation = 'scroll 10s linear infinite'; // 重新设置动画
  });

  // 鼠标放上去暂停滚动，移开时继续滚动
  carousel.addEventListener('mouseenter', () => {
    carousel.style.animationPlayState = 'paused'; // 暂停动画
  });

  carousel.addEventListener('mouseleave', () => {
    carousel.style.animationPlayState = 'running'; // 恢复动画
  });
});
