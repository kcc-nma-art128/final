
var $logo = $('.logo');
var $logoOffsetTop = $logo.offset().top;

$(window).scroll(function() {
  if( $(this).scrollTop() > ($logoOffsetTop) ) {
    $logo.addClass("fixed");
  } else {
    $logo.removeClass("fixed");
  }
});


/*classifying mainnav as $mainNav*/
var $mainNav = $(".mainnav");

/*classifying headerheight as 150*/
var $headerHeight = 150;

/*classifying mainnav behavior*/
$(window).scroll(function() {
  if( $(this).scrollTop() > ($headerHeight) ) {
    $mainNav.addClass("fixed");
    $logo.addClass("hide-text");
  } else {
    $mainNav.removeClass("fixed");
    $logo.removeClass("hide-text");
  }
});

/*setting smoothscroll*/
$(document).ready(function(){
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});
});




/*setting point on google maps*/
function initMap() {
  var myLatLng = {lat: 21.292073, lng: -157.839175};

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 17,
    scrollwheel: false,
    center: myLatLng
  });



  marker = new google.maps.Marker({
  map: map,
  draggable: true,
  animation: google.maps.Animation.DROP,
  position: {lat: 21.292073, lng: -157.839175}
});
marker.addListener('click', toggleBounce);
}

function toggleBounce() {
if (marker.getAnimation() !== null) {
  marker.setAnimation(null);
} else {
  marker.setAnimation(google.maps.Animation.BOUNCE);
}
}
