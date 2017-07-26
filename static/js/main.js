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

$.getJSON('http://http://ws.audioscrobbler.com/2.0/?method=user.gettopartists&user=kateboudreau&api_key=8bb431899cec4eb655c81217332292f3&format=json', function(data) {
  var track = data.recenttracks.track[0]
  $('#lastfm').html(track.artist["#text"])
});
