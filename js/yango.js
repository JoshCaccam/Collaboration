<<<<<<< HEAD
=======
//Header
>>>>>>> 4bef4c16c59bb37b24cc2eeb60c0addbf1074780
const navSpan = document.querySelector(".header_span");
const navToggles = document.querySelector(".header_toggles");

navSpan.addEventListener("click", () => {
    navSpan.classList.toggle("open");
    navToggles.classList.toggle("open");
<<<<<<< HEAD
 });
=======
 });

 const down = document.querySelectorAll(".js-click");

down.forEach(toggle =>{
    toggle.addEventListener("click", () =>{
        toggle.classList.toggle("open");
    })
})
 //Slider
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

function updateDotLayout() {
const container = document.querySelector('.Members_dots');
const dots = document.querySelectorAll('.owl-dot');
const viewportWidth = window.innerWidth;

if (viewportWidth < 1024) {
  // Mobile view: 8 dots per row
  container.style.flexDirection = 'row';
  dots.forEach(dot => {
    dot.style.flex = '0 0 calc(50% / 8)'; // 8 dots per row
  });
} else {
  // Desktop view: 4 dots per row
  container.style.flexDirection = 'row';
  dots.forEach(dot => {
    dot.style.flex = '0 0 calc(10% / 4)'; // 4 dots per row
  });
}
}

// Initial layout adjustment
updateDotLayout();

// Adjust layout on window resize
window.addEventListener('resize', updateDotLayout);
>>>>>>> 4bef4c16c59bb37b24cc2eeb60c0addbf1074780
