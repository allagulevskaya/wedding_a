// Простая навигация между слайдами
document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    // Автоматическая смена слайдов каждые 5 секунд
    setInterval(() => {
        currentSlide = (currentSlide + 1) % slides.length;
        window.scrollTo({
            top: slides[currentSlide].offsetTop,
            behavior: 'smooth'
        });
    }, 5000);

    // Навигация через клавиши
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowDown') {
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].scrollIntoView({ behavior: 'smooth' });
        } else if (e.key === 'ArrowUp') {
            currentSlide = (currentSlide - 1 + slides.length) % slides.length;
            slides[currentSlide].scrollIntoView({ behavior: 'smooth' });
        }
    });
});