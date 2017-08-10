var $document = $(document);
var $window = $(window);
var $mansionNavbar = $('#mansion-navbar');
var $homePage = $('.home-page');
var ctr = 1;
var photosMax = 20;

var checkTop = function() {
	return ($window.scrollTop() > 0) 
}



var carouselIncrement = function(elem, filePrefix, fileType) {
  ctr = (ctr + 1) % photosMax;
  // if (ctr==2||7||15) {

  // } else {
  //   elem.last().after("<div class='banner-carousel'></div>");
  //   $('.banner-carousel').last().css("background-image", "linear-gradient(180deg, rgba(0,0,0,0.6), rgba(0,0,0,0.0) 50%, rgba(0,0,0,0.0)), url(" + filePrefix + ctr + fileType + ")");
  //   elem.last().css("opacity", 1);
  //   if(elem.length > 2) {
  //     elem.first().remove();
  //   }
  // }

  switch (ctr) {
    case 2:
      elem.last().after("<div class='banner-carousel'><div class='carousel-divider text-white text-titling font-80 text-center uppercase text-space-xwide'>The Mansion</div></div>");
      elem.last().css("opacity", 1);
      if(elem.length > 2) {
        elem.first().remove();
      }
      break;
    case 7:
      elem.last().after("<div class='banner-carousel'><div class='carousel-divider text-white text-titling font-80 text-center uppercase text-space-xwide'>Suites & Ameneties</div></div>");
      elem.last().css("opacity", 1);
      if(elem.length > 2) {
        elem.first().remove();
      }
      break;
    case 15:
      elem.last().after("<div class='banner-carousel'><div class='carousel-divider text-white text-titling font-80 text-center uppercase text-space-xwide'>Outdoor Venue</div></div>");
      elem.last().css("opacity", 1);
      if(elem.length > 2) {
        elem.first().remove();
      }
      break;
    default:
      elem.last().after("<div class='banner-carousel'></div>");
      $('.banner-carousel').last().css("background-image", "url(" + filePrefix + ctr + fileType + ")");
      elem.last().css("opacity", 1);
      if(elem.length > 2) {
        elem.first().remove();
      }
      break;
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
  setInterval(function() {carouselIncrement($('.banner-carousel'), "dist/images/banners/", ".jpg")}, 3500);
});