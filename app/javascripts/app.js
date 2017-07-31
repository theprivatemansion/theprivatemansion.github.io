var $document = $(document);
var $window = $(window);
var $mansionNavbar = $('#mansion-navbar');
var $homePage = $('.home-page');

var checkTop = function() {
	return ($window.scrollTop() > 0) 
} 

$document.ready(function() {
	$window.on('scroll', function() {
		console.log('asdf');
		if(checkTop()) {
			$mansionNavbar.addClass('sticky');
		} else {
			$mansionNavbar.removeClass('sticky');
		}
	})
});
