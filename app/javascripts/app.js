var $document = $(document);
var $window = $(window);
var $mansionNavbar = $('#mansion-navbar');
var $homePage = $('.home-page');
var ctr = 1;
var photosMax = 14;

var checkTop = function() {
	return ($window.scrollTop() > 0) 
} 

var carouselIncrement = function(elem, filePrefix, fileType) {
  ctr = (ctr + 1) % photosMax;
  elem.last().after("<div class='banner-carousel'></div>");
  $('.banner-carousel').last().css("background-image", "linear-gradient(180deg, rgba(0,0,0,0.6), rgba(0,0,0,0.0) 50%, rgba(0,0,0,0.0)), url(" + filePrefix + ctr + fileType + ")");
  elem.last().css("opacity", 1);
  if(elem.length > 2) {
    elem.first().remove();
  }
}

$document.ready(function() {

	// $window.on('scroll', function() {
	// 	if(checkTop()) {
	// 		$mansionNavbar.addClass('sticky');
	// 	} else {
	// 		$mansionNavbar.removeClass('sticky');
	// 	}
	// });
  setInterval(function() {carouselIncrement($('.banner-carousel'), "dist/images/banners/", ".jpg")}, 4500);
});