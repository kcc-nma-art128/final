$(function() {
  var $sections = $('section.home, section.about, section.activity, section.location, section.contact');
  var $mainNav = $(".mainnav");

  $(window).scroll(function() {
    var currentPosition = $(this).scrollTop();

    $sections.each(function() {
      var top = $(this).offset().top - 132;
      var bottom = top + $(this).height();
      var sectionId = $(this).attr('id');

      if (currentPosition >= top && currentPosition <= bottom) {
        $mainNav.find('a').removeClass('active');
        $sections.removeClass('active');
        $mainNav.removeClass('home-nav activity-nav about-nav location-nav contact-nav');

        $mainNav.addClass(sectionId + '-nav');
        $(this).addClass('active');
        $mainNav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
      }
    });

  });
});
