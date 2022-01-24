var hamburger = document.querySelector(".hamburger");
var popup = document.querySelector(".header__navigation");

hamburger.addEventListener("click", function(){
  hamburger.classList.toggle("hamburger_active");
  popup.classList.toggle("header__navigation_open");
});