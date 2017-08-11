var $document = $(document);
var $window = $(window);
var $mansionNavbar = $('#mansion-navbar');
var $homePage = $('.home-page');
var ctr = 1;
var photosMax = 25;

var checkTop = function() {
	return ($window.scrollTop() > 0) 
}



var carouselIncrement = function(elem, filePrefix, fileType) {
  ctr = (ctr + 1) % (photosMax + 1);
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
    case 0:
      console.log(ctr);
      ctr = ctr + 1
      console.log(ctr);
      elem.last().after("<div class='banner-carousel'><img class='banner-icon' src='dist/images/logos/tpm-w.svg' /></div>");
      $('.banner-carousel').last().css("background-image", "linear-gradient(180deg, rgba(0,0,0,0.6), rgba(0,0,0,0.0) 50%, rgba(0,0,0,0.0)), url(" + filePrefix + ctr + fileType + ")");
      elem.last().css("opacity", 1);
      if(elem.length > 2) {
        elem.first().remove();
      }
      break;
    // case 2:
    //   console.log(ctr);
    //   elem.last().after("<div class='banner-carousel'><div class='carousel-divider text-white text-titling font-80 text-center uppercase text-space-xwide'>The Mansion</div></div>");
    //   elem.last().css("opacity", 1);
    //   if(elem.length > 2) {
    //     elem.first().remove();
    //   }
    //   break;
    case 6:
      console.log(ctr);
      elem.last().after("<div class='banner-carousel'><div class='carousel-divider text-white text-titling font-80 text-center uppercase text-space-xwide'>Suites & Amenities</div></div>");
      elem.last().css("opacity", 1);
      if(elem.length > 2) {
        elem.first().remove();
      }
      break;
    case 20:
      console.log(ctr);
      elem.last().after("<div class='banner-carousel'><div class='carousel-divider text-white text-titling font-80 text-center uppercase text-space-xwide'>Outdoor Venue</div></div>");
      elem.last().css("opacity", 1);
      if(elem.length > 2) {
        elem.first().remove();
      }
      break;
    default:
      console.log(ctr);
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
  setInterval(function() {carouselIncrement($('.banner-carousel'), "dist/images/banners/", ".jpg")}, 1200);
});