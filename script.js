document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.carousel-slide');
    const nextBtn = document.querySelector('.next');
    const prevBtn = document.querySelector('.prev');
    const backgroundOverlay = document.querySelector('.background-overlay');
    let currentIndex = 0;
    const totalSlides = slides.length;

    const updateCarousel = () => {
        slides.forEach((slide, index) => {
            slide.classList.remove('active', 'left', 'right');
            if (index === currentIndex) {
                slide.classList.add('active');
                backgroundOverlay.style.backgroundImage = `url(${slide.querySelector('img').src})`;
            } else if (index === (currentIndex - 1 + totalSlides) % totalSlides) {
                slide.classList.add('left');
            } else if (index === (currentIndex + 1) % totalSlides) {
                slide.classList.add('right');
            }
        });
    };

    const nextSlide = () => {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateCarousel();
    };

    const prevSlide = () => {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        updateCarousel();
    };

    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);

    updateCarousel();
});
