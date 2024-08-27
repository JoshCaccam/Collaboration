// document.querySelector('.prev').addEventListener('click', function(){
//     document.querySelector('Members_cards1').scrollBy({
//         top:0,
//         left:-300,
//         behavior:"smooth"
//     });
// });

// document.querySelector('.next').addEventListener('click', function() {
//     document.querySelector('.Members_cards1').scrollBy({
//         top: 0,
//         left: 300, 
//         behavior: 'smooth'
//     });
// });

document.addEventListener('DOMContentLoaded', () => {
    let currentIndex = 0;
    const slides = document.querySelectorAll('.Members_cards1');
    const dots = document.querySelectorAll('.owl-dot');
    const totalSlides = slides.length;

    function updateSlider(index) {
        // Ensure the index wraps around the slides
        if (index >= totalSlides) {
            currentIndex = 0;
        } else if (index < 0) {
            currentIndex = totalSlides - 1;
        } else {
            currentIndex = index;
        }

        // Update the slides
        slides.forEach((slide, i) => {
            slide.style.display = (i === currentIndex) ? 'block' : 'none';
        });

        // Update the dots
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === currentIndex);
        });
    }

    function nextSlide() {
        updateSlider(currentIndex + 1);
    }

    function prevSlide() {
        updateSlider(currentIndex - 1);
    }

    // Initial setup
    updateSlider(currentIndex);

    // Event listeners for buttons
    document.querySelector('.owl-dot').addEventListener('click', prevSlide);
    document.querySelector('.owl-dot').addEventListener('click', nextSlide);

    // Event listeners for dots
    dots.forEach((dot, i) => {
        dot.addEventListener('click', () => {
            updateSlider(i);
        });
    });
});
