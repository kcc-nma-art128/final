var $navToggle = $('.nav-toggle');
var $mainNavUl = $('.nav ul');
var $window = $(window);
var mobileBreakpoint = 767;

$navToggle.on('click', function() {
  $mainNavUl.slideToggle();
  $navToggle.toggleClass('active');
});

$window.on('resize', function() {
  if ($window.width() > mobileBreakpoint) {
    $mainNavUl.show();
    $navToggle.addClass('active');
  }
});

var $faqToggle = $('.faq h5');
$faqToggle.on('click', function() {
  $('.faq p').slideUp();
  $(this).siblings().slideToggle();
});
