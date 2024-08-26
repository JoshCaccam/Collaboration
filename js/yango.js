const navSpan = document.querySelector(".header_span");
const navToggles = document.querySelector(".header_toggles");

navSpan.addEventListener("click", () => {
    navSpan.classList.toggle("open");
    navToggles.classList.toggle("open");
 });

 