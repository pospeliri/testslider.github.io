$(function() {
	//test__slider
	var testSlider = $('.test__slider');
	testSlider.owlCarousel({
    nav: false,
    dots: false,
    items: 4,
    loop: true,
    margin: 20,
    autoWidth: true,
    autoplay: true,
    //autoplayTimeout: 1000,
    autoplayHoverPause: true,
    autoplaySpeed: 1000,
    smartSpeed: 2000,

  });
  

});
