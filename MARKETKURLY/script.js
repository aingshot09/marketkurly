const market = document.getElementById("market");
const beauty = document.getElementById("beauty");

market.addEventListener("click", () => {
  market.classList.add("active");
  beauty.classList.remove("active");
});

beauty.addEventListener("click", () => {
  beauty.classList.add("active");
  market.classList.remove("active");
});

const sliderWrapper = document.querySelector('.slider-wrapper');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const dots = document.querySelectorAll('.dot');

let currentIndex = 0;
const totalSlides = slides.length;

// 슬라이드 이동 함수
function goToSlide(index) {
  sliderWrapper.style.transform = `translateX(-${index * 100}%)`;
  currentIndex = index;
  updateDots();
}

// 점(dot) 상태 업데이트
function updateDots() {
  dots.forEach((dot, idx) => {
    dot.classList.toggle('active', idx === currentIndex);
  });
}

// 이전 버튼 클릭
prevBtn.addEventListener('click', () => {
  const nextIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  goToSlide(nextIndex);
});

// 다음 버튼 클릭
nextBtn.addEventListener('click', () => {
  const nextIndex = (currentIndex + 1) % totalSlides;
  goToSlide(nextIndex);
});

// 점(dot) 클릭
dots.forEach((dot, idx) => {
  dot.addEventListener('click', () => {
    goToSlide(idx);
  });
});

// 자동 슬라이드 (선택사항)
setInterval(() => {
  const nextIndex = (currentIndex + 1) % totalSlides;
  goToSlide(nextIndex);
}, 4000); // 4초마다 왼쪽으로 이동
