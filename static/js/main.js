$(document).ready(function() {

	$('.nav-contents').click(function(event) {
		event.preventDefault();
		if($('.navigation-wrapper').hasClass('show-menu')) {
			$('.main-nav').fadeIn();
			$('.navigation-wrapper').removeClass('show-menu');
			$('.navigation').hide();
		} else {
			$('.navigation-wrapper').addClass('show-menu');
			$('.main-nav').hide();
			$('.navigation').fadeIn();
	   }
	});
  
});