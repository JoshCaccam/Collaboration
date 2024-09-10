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

//Caccam Slider
const menuNav = document.querySelectorAll(".testimonial-slider");
const menuContent = document.querySelectorAll(".creator_slide");

menuNav.forEach((creator) => {
   creator.addEventListener("click", () => {
      removeActiveCreator();
      creator.classList.add('active')

      const activeContent = document.querySelector(`#${creator.id}-content`);
      
      removeActiveContent();
            activeContent.classList.add('active') 
   })
});

function removeActiveCreator() {
   menuNav.forEach((creator) => {
      creator.classList.remove('active')
   });
}

function removeActiveContent() {
   menuContent.forEach((creator) => {
      creator.classList.remove('active')
   });
}



 //Briones Slider
 document.addEventListener('DOMContentLoaded', function () {
  const slides = document.querySelectorAll('.slide');
  const sliderWrapper = document.querySelector('.slider-wrapper');
  const prevButton = document.querySelector('.prev');
  const nextButton = document.querySelector('.next');
  const pagination = document.querySelector('.slider-pagination');

  let currentIndex = 0;

  function updateSlider() {
    const offset = -currentIndex * 100;
    sliderWrapper.style.transform = `translateX(${offset}%)`;
    updatePagination();
  }

  function updatePagination() {
    pagination.querySelectorAll('button').forEach((btn, index) => {
      btn.classList.toggle('active', index === currentIndex);
    });
  }

  function createPagination() {
    slides.forEach((_, index) => {
      const bullet = document.createElement('button');
      bullet.addEventListener('click', () => {
        currentIndex = index;
        updateSlider();
      });
      pagination.appendChild(bullet);
    });  
  }

  prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : slides.length - 1;
    updateSlider();
  });

  nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex < slides.length - 1) ? currentIndex + 1 : 0;
    updateSlider();
  });

  createPagination();
  updateSlider();
});