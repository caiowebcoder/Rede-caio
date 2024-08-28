let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    const totalSlides = slides.length;

    console.log("Current Slide:", currentSlide); // Log do slide atual
    console.log("Index Requested:", index); // Log do índice solicitado

    // Ajusta o índice do slide para ser cíclico
    if (index >= totalSlides) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = index;
    }

    console.log("Slide After Adjustment:", currentSlide); // Log do slide após ajuste

    // Muda a posição do contêiner interno
    const carouselInner = document.querySelector('.carousel-inner');
    carouselInner.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function moveSlide(direction) {
    showSlide(currentSlide + direction);
}

// Inicializa o carrossel na primeira imagem
document.addEventListener('DOMContentLoaded', function () {
    showSlide(currentSlide);
});
