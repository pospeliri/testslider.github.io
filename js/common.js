$(function() {
	//test__slider
	var testSlider = $('.test__slider');
	testSlider.owlCarousel({
		nav: false,
		dots: false,
		items: 4,
		margin: 10,
    loop: true,
    autoWidth: true,
    autoplay: true,
    autoplayTimeout: 1000,
    smartSpeed: 5000,
    autoplayHoverPause: true,
	});
  

});
