// 横幅图片轮播
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

// 回到顶部
window.addEventListener('DOMContentLoaded', () => {
  const backtotopBtn = document.getElementById("backtotop");
  window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > 200 || document.body.scrollTop > 200) {
      backtotopBtn.style.display = "flex";  // 显示
    } else {
      backtotopBtn.style.display = "none";  // 隐藏
    }
  });
  backtotopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});
