'use strict';
(function($) {
	// $('#overlay').easyModal();
	setTimeout(function() {
		// $('#overlay').overlay
		// $('#overlay').trigger('openModal');
		$('body').addClass('faded');
		$('#gateway').animate({
			// options
			top: 0
		}, 2000, function() {
			// Animation complete
			$('#gateway p').text("Welcome to Ashish's page\n. Please choose an option");
			$('.btn').fadeIn();
		});
	}, 200);
}(jQuery));