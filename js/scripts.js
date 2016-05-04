// DATE PICKER
$("li").mouseover(function(){
 $(this).find(".drop-down").slideDown(300);
 $(this).find(".accent").addClass("animate");
 $(this).find(".item").css("color","#FFF");
}).mouseleave(function(){
  $(this).find(".drop-down").slideUp(300);
   $(this).find(".accent").removeClass("animate");
   $(this).find(".item").css("color","#000");
});

// CALENDAR
$(function() {
  $( "#datepicker" ).datepicker({ firstDay: 1});
});

// COMMENTS
$(document).ready(function() {

	//if the submit button has been clicked
	$('#submit').click(function () {

		//Get the data from all the fields
		var name = $('input[name=name]');
		var email = $('input[name=email]');
		var message = $('textarea[name=message]');

		//Simple validation to make sure user entered something
		//If error found, add highlight class to the text field
		if (name.val()=='') {
			name.addClass('highlight');
			return false;
		} else name.removeClass('highlight');

		if (email.val()=='') {
			email.addClass('highlight');
			return false;
		} else email.removeClass('highlight');

		if (message.val()=='') {
			message.addClass('highlight');
			return false;
		} else message.removeClass('highlight');

		//organize the data properly
		var data = 'name=' + name.val() + '&email=' + email.val() + '&website='
		+ website.val() + '&comment='  + encodeURIComponent(message.val());

		//disabled all the text fields
		$('.text').attr('disabled','true');

		//show the loading sign
		$('.loading').show();

		//start the ajax
		$.ajax({
			//this is the php file that processes the data and send mail
			url: "processinput.php",

			//GET method is used
			type: "GET",

			//pass the data
			data: data,

			//Do not cache the page
			cache: false,

			//success
			success: function (html) {
				//if processinput.php returned 1/true (send mail success)
				if (html==1) {
					//hide the form
					$('.form').fadeOut('slow');

					//show the success message
					$('.done').fadeIn('slow');

				//if processinput.php returned 0/false (send mail failed)
				} else alert('Sorry, unexpected error. Please try again later.');
			}
		});

		//cancel the submit button default behaviours
		return false;
	});
});	
