//Header
const navSpan = document.querySelector(".header_span");
const navToggles = document.querySelector(".header_toggles");

navSpan.addEventListener("click", () => {
    navSpan.classList.toggle("open");
    navToggles.classList.toggle("open");
    if(navToggles.classList.contains("open")){
        navToggles.style.maxHeight = navToggles.scrollHeight + "px";
    } else {
        navToggles.style.maxHeight = null;
    }
 });

 const down = document.querySelectorAll(".js-click");

down.forEach(toggle =>{
    toggle.addEventListener("click", () =>{
        if (toggle.classList.contains("open")&&window.innerWidth<760){
            toggle.classList.remove("open");
            toggle.nextElementSibling.style.maxHeight = null;
        }else if(!toggle.classList.contains("open")&&window.innerWidth<760){
            toggle.nextElementSibling.style.maxHeight = toggle.nextElementSibling.scrollHeight + "px";
            toggle.classList.add("open");
        }

    })
})

 //Slider
 document.addEventListener('DOMContentLoaded', () => {
    let currentIndex = 0;
    const slides = document.querySelectorAll('.Members_cards1');
    const dots = document.querySelectorAll('.owl-dot');
    const totalSlides = slides.length;

    function updateSlider(index) {
        if (index >= totalSlides) {
            currentIndex = 0;
        } else if (index < 0) {
            currentIndex = totalSlides - 1;
        } else {
            currentIndex = index;
        }

        slides.forEach((slide, i) => {
            slide.style.display = (i === currentIndex) ? 'block' : 'none';
        });

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

    updateSlider(currentIndex);

    document.querySelector('.owl-dot').addEventListener('click', prevSlide);
    document.querySelector('.owl-dot').addEventListener('click', nextSlide);

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
  container.style.flexDirection = 'row';
  dots.forEach(dot => {
    dot.style.flex = '0 0 calc(50% / 8)'; 
  });
} else {
  container.style.flexDirection = 'row';
  dots.forEach(dot => {
    dot.style.flex = '0 0 calc(10% / 4)'; 
  });
}
}

updateDotLayout();

window.addEventListener('resize', updateDotLayout);