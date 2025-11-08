// =======================
// 图片轮播逻辑
// =======================
let slideIndex = 0, timer;
function showSlide(n) {
  const slides = document.getElementsByClassName("slide");
  const dots = document.getElementsByClassName("dot");
  if (n >= slides.length) slideIndex = 0;
  if (n < 0) slideIndex = slides.length - 1;
  for (let s of slides) s.style.display = "none";
  for (let d of dots) d.classList.remove("active");
  slides[slideIndex].style.display = "block";
  dots[slideIndex].classList.add("active");
  clearTimeout(timer);
  timer = setTimeout(() => {
    slideIndex++;
    showSlide(slideIndex);
  }, 4000);
}
function changeSlide(n) {
  slideIndex += n;
  showSlide(slideIndex);
}
function goToSlide(n) {
  slideIndex = n - 1;
  showSlide(slideIndex);
}
// 页面加载后启动轮播
window.addEventListener('DOMContentLoaded', () => {
  showSlide(slideIndex);
});
// =======================
// 回到顶部按钮逻辑
// =======================
window.addEventListener('DOMContentLoaded', () => {
  const backToTopBtn = document.getElementById("backToTop");
  window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > 200 || document.body.scrollTop > 200) {
      backToTopBtn.style.display = "flex";  // 显示按钮
    } else {
      backToTopBtn.style.display = "none";  // 隐藏按钮
    }
  });
  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});
