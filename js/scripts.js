//////////////////////////////////////////////NAV
$(function() {
  var $navToggle = $('.nav-toggle');
  var $mainNavUl = $('.mainnav li');
  var $window = $(window);
  var mobileBreakpoint = 768;

  $navToggle.on('click', function() {
    $mainNavUl.slideToggle();
    $navToggle.toggleClass('active');
  });

  $window.on('resize', function() {
    if ($window.width() < mobileBreakpoint & $mainNavUl.is(':hidden')) {
      $mainNavUl.removeAttr('style');
      $navToggle.removeClass('active');
    }
  });
});




//////////////////////////////////////Slideshow

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length} ;
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].classList.add("active");
}
