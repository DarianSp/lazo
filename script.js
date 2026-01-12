document.addEventListener("DOMContentLoaded", () => {
    const slide = document.getElementById('slide');
    const images = document.querySelectorAll('.carousel-slide img');
    const nextBtn = document.getElementById('nextBtn');
    const prevBtn = document.getElementById('prevBtn');

    let counter = 0;
    const totalImages = images.length;

    function updateSlide() {
        slide.style.transform = `translateX(${-100 * counter}%)`;
    }

    nextBtn.addEventListener('click', () => {
        counter = (counter + 1) % totalImages;
        updateSlide();
    });

    prevBtn.addEventListener('click', () => {
        counter = (counter - 1 + totalImages) % totalImages;
        updateSlide();
    });

    // Soporte para deslizar con el dedo
    let touchStartX = 0;
    let touchEndX = 0;

    slide.addEventListener('touchstart', e => {
        touchStartX = e.changedTouches[0].screenX;
    }, {passive: true});

    slide.addEventListener('touchend', e => {
        touchEndX = e.changedTouches[0].screenX;
        if (touchStartX - touchEndX > 50) nextBtn.click();
        if (touchEndX - touchStartX > 50) prevBtn.click();
    }, {passive: true});

    // Auto-reproducción cada 4 segundos
    setInterval(() => {
        nextBtn.click();
    }, 4000);
});