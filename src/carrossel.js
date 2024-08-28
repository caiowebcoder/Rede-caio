let currentSlide = 0;
let slideInterval;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    const totalSlides = slides.length;

    // Ajusta o índice do slide para ser cíclico
    if (index >= totalSlides) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = index;
    }

    // Muda a posição do contêiner interno
    const carouselInner = document.querySelector('.carousel-inner');
    carouselInner.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function moveSlide(direction) {
    showSlide(currentSlide + direction);
}

// Função para iniciar o timer
function startSlideTimer() {
    slideInterval = setInterval(() => {
        moveSlide(1);
    }, 4000); // 4 segundos
}

// Função para parar o timer (opcional, caso queira adicionar esta funcionalidade)
function stopSlideTimer() {
    clearInterval(slideInterval);
}

// Inicializa o carrossel na primeira imagem e inicia o timer
document.addEventListener('DOMContentLoaded', function () {
    showSlide(currentSlide);
    startSlideTimer();
});
