let slides = document.querySelectorAll('.slide');
let dots = document.querySelectorAll('.dot');
let leftArrow = document.querySelector('.slider-arrow-left');
let rightArrow = document.querySelector('.slider-arrow-right');
let slider = document.querySelector('.slider');
let current = 0;
let timer = null;

// 显示指定下标的图片
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
        dots[i].classList.toggle('active', i === index);
    });
    current = index;
}

// 小圆点点击切换
dots.forEach((dot, i) => {
    dot.onclick = () => showSlide(i);
});

// 左右箭头点击切换
leftArrow.onclick = () => {
    let prev = (current - 1 + slides.length) % slides.length;
    showSlide(prev);
};
rightArrow.onclick = () => {
    let next = (current + 1) % slides.length;
    showSlide(next);
};

// 自动轮播
function startAutoPlay() {
    timer = setInterval(() => {
        let next = (current + 1) % slides.length;
        showSlide(next);
    }, 2000);
}
function stopAutoPlay() {
    clearInterval(timer);
}

// 鼠标悬停暂停，移开继续
slider.addEventListener('mouseenter', stopAutoPlay);
slider.addEventListener('mouseleave', startAutoPlay);

// 初始化
showSlide(0);
startAutoPlay();