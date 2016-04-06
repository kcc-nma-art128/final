$(function() {
  var $navToggle = $('.nav-toggle');
  var $mainNavUl = $('.mainnav ul');
  var $window = $(window);
  var mobileBreakpoint = 767;

  $navToggle.on('click', function() {
    $mainNavUl.slideToggle();
    $navToggle.toggleClass('active');
  });

  $window.on('resize', function() {
    if ($window.width() > mobileBreakpoint && $mainNavUl.is(':hidden')) {
      $mainNavUl.removeAttr('style');
      $navToggle.removeClass('active');
    }
  });
});
