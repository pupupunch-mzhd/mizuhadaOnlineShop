const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
let currentSlide = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
    // เพิ่มโค้ดนี้เพื่อปรับตำแหน่งปุ่มลูกศรตามขนาดหน้าจอ
    adjustSliderButtons();
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

showSlide(currentSlide);

// Function to adjust button positioning based on screen size
function adjustSliderButtons() {
    const mq = window.matchMedia('(max-width: 992px)');
    if (mq.matches) {
        // On smaller screens, position buttons relative to the slider
        prevBtn.style.left = '15px';
        nextBtn.style.right = '15px';
    } else {
        // On larger screens, position buttons relative to the entire hero section
        // The left button moves with the content block
        prevBtn.style.left = '42%'; // This is relative to the hero section, not the slider itself
        nextBtn.style.right = '30px';
    }
}

// Call on load and resize
window.addEventListener('load', adjustSliderButtons);
window.addEventListener('resize', adjustSliderButtons);