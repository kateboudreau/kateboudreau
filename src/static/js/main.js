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

$.getJSON('http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=kateboudreau&api_key=df3a472b44a5cd5c17f1f37dc80d9a15&format=json', function(data) {
  var track = data.recenttracks.track[0]
  $('#lastfm').html(track.artist["#text"])
});