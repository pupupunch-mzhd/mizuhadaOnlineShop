const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

const slideTitle = document.getElementById('slide-title');
const slideSubtitle = document.getElementById('slide-subtitle');
const slideText = document.getElementById('slide-text');

let currentSlide = 0;
let slideInterval;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
            updateContent(slide);
        }
    });
}

function updateContent(slide) {
    const title = slide.getAttribute('data-title');
    const subtitle = slide.getAttribute('data-subtitle');
    const text = slide.getAttribute('data-text');

    slideTitle.textContent = title;
    slideSubtitle.textContent = subtitle;
    slideText.textContent = text;
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

function startAutoSlide() {
    slideInterval = setInterval(nextSlide, 5000); // เปลี่ยนทุกๆ 5 วินาที
}

function stopAutoSlide() {
    clearInterval(slideInterval);
}

// หยุดการเลื่อนอัตโนมัติเมื่อเมาส์ไปชี้ และเริ่มใหม่เมื่อเมาส์ออก
document.querySelector('.hero-section').addEventListener('mouseenter', stopAutoSlide);
document.querySelector('.hero-section').addEventListener('mouseleave', startAutoSlide);

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

showSlide(currentSlide);
startAutoSlide();

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

document.addEventListener('DOMContentLoaded', function () {
    const videoCards = document.querySelectorAll('.video-card');

    videoCards.forEach(card => {
        const video = card.querySelector('video');
        const playButton = card.querySelector('.play-button');

        card.addEventListener('click', function () {
            if (video.paused) {
                video.play();
                card.classList.add('playing');
            } else {
                video.pause();
                card.classList.remove('playing');
            }
        });
    });
});