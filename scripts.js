
var offsetHeight = 109;
var $mainNav = $(".main-nav");

// SMOOTH SCROLL
$(".main-nav a").click(function(e) {
  e.preventDefault();

  var $this = $(this);
  var sectionId = $this.attr('href');

  $('html, body').animate({
    scrollTop: $(sectionId).offset().top
  }, 750);
});


// STICKY NAV
var $navHeight = $mainNav.outerHeight();
var $headerHeight = 109;

// $('.nav-wrapper').height($navHeight);

$(window).scroll(function() {
  if( $(this).scrollTop() > ($headerHeight) ) {
    $mainNav.addClass("fixed");
  } else {
    $mainNav.removeClass("fixed");
  }
});

if( $(window).scrollTop() > ($headerHeight) ) {
  $mainNav.addClass("fixed");
}

var $searchbarToggle = $(".searchbar-toggle");
var $searchbarInput = $(".searchbar input");
$searchbarToggle.click(function(){
  $searchbarInput.toggleClass("show");
})


// $( "#scroll-logo" ).scroll(function() {
//  $("#small-logo").fadeIn();
// });
// var offsetHeight = 10;
// var $searchbarToggle = $(".searchbar-toggle")
//
// $(window).scroll(function() {
//   var currentPosition = $(this).scrollTop();
//
//
//   var top = 109;
//
//   if (currentPosition >= top) {
//     $mainNav.find('a').removeClass('active');
//
//     $(this).addClass('active');
//     $mainNav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
//   }
//
// });

// ACTIVE STATE
var $sections = $('#about, #menu, #gallery, #contact, #home');

$(window).scroll(function() {
  var currentPosition = $(this).scrollTop();

  $sections.each(function() {
    var top = $(this).offset().top;
    var bottom = top + $(this).height();

    if (currentPosition >= top && currentPosition <= bottom) {
      $mainNav.find('a').removeClass('active');
      $sections.removeClass('active');

      $(this).addClass('active');
      $mainNav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
    }
  });

});

// FLOAT LOGO
var $logo = $('.big-logo');
var $logoOffsetTop = $logo.offset().top;

$(window).scroll(function() {
  if( $(this).scrollTop() > ($logoOffsetTop) ) {
    $logo.addClass("fixed");
  } else {
    $logo.removeClass("fixed");
  }
});


// SHOW/HIDE
var $ = jQuery.noConflict();
$(document).ready(function(){
  $('#menubowls, #menufood').hide();
		$('#a').click(function(){
		$('#menudrinks').show();
		$('#menubowls, #menufood').hide();
		});

		$('#b').click(function(){
		$('#menubowls').show();
		$('#menudrinks, #menufood').hide();
		});

		$('#c').click(function(){
		$('#menufood').show();
		$('#menudrinks, #menubowls').hide();
        });

});
