const slide = document.getElementById('slide');
const images = document.querySelectorAll('.carousel-slide img');
let counter = 0;

function updateSlide() {
    slide.style.transform = `translateX(${-100 * counter}%)`;
}

// Botón Siguiente
document.getElementById('nextBtn').onclick = function() {
    counter = (counter + 1) % images.length;
    updateSlide();
};

// Botón Anterior
document.getElementById('prevBtn').onclick = function() {
    counter = (counter - 1 + images.length) % images.length;
    updateSlide();
};

// Soporte táctil (Swipe) para celulares
let touchStartX = 0;
slide.addEventListener('touchstart', e => touchStartX = e.touches[0].clientX);
slide.addEventListener('touchend', e => {
    const touchEndX = e.changedTouches[0].clientX;
    if (touchStartX - touchEndX > 50) {
        // Deslizar a la izquierda -> Siguiente
        counter = (counter + 1) % images.length;
        updateSlide();
    }
    if (touchStartX - touchEndX < -50) {
        // Deslizar a la derecha -> Anterior
        counter = (counter - 1 + images.length) % images.length;
        updateSlide();
    }
});
