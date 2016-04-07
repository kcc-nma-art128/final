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
    if ($window.width() > mobileBreakpoint && $mainNavUl.is(':hidden')) {
      $mainNavUl.removeAttr('active');
      $navToggle.removeClass('style');
    }
  });
});
