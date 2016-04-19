
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

//////////////////////////////////////////////slide

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







var slideIndex = 1;
showDivs1(slideIndex);

function plusDivs1(n) {
    showDivs1(slideIndex += n);
}

function showDivs1(n) {
    var i;
    var x = document.getElementsByClassName("g-slide1");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length} ;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex-1].style.display = "block";
}


var slideIndex = 1;
showDivs2(slideIndex);

function plusDivs2(n) {
    showDivs2(slideIndex += n);
}

function showDivs2(n) {
    var i;
    var x = document.getElementsByClassName("g-slide2");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length} ;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex-1].style.display = "block";
}




var slideIndex = 1;
showDivs3(slideIndex);

function plusDivs3(n) {
    showDivs3(slideIndex += n);
}

function showDivs3(n) {
    var i;
    var x = document.getElementsByClassName("g-slide3");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length} ;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex-1].style.display = "block";
}









// ACTIVE STATE
var $sections = $('.section01,.section02,.section03,.section04,.section05');
var $mainNav = $(".mainnav");
var navOffset = 50;
$(window).scroll(function() {
  var currentPosition = $(this).scrollTop();

  $sections.each(function() {
    var top = $(this).offset().top -navOffset;
    var bottom = top + $(this).height();

    if (currentPosition >= top && currentPosition <= bottom) {
      $mainNav.find('a').removeClass('active');
      $sections.removeClass('active');

      $(this).addClass('active');
      $mainNav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
    }
  });

});


// SMOOTH SCROLL
$(".mainnav a").click(function(e) {
  e.preventDefault();

  var $this = $(this);
  var sectionId = $this.attr('href');

  $('html, body').animate({
    scrollTop: $(sectionId).offset().top
  }, 750);
});
