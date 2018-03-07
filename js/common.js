$(function() {
	//test__slider
	var testSlider = $('.test__slider');
	testSlider.owlCarousel({
    nav: false,
    dots: false,
    //items: 4,
    loop: true,
    margin: 20,
    autoWidth: true,
    autoplay: true,
    autoplayTimeout: 0,
    //autoplayTimeout: 1000,
    autoplayHoverPause: true,
    //autoplaySpeed: 5000,
    smartSpeed: 30000,
    //fluidSpeed: 100000,
    //slideTransition: 'linear',

  });
  /*
  $('.owl-carousel .owl-item').on('mouseenter',function(e){
    $(this).closest('.owl-carousel').trigger('stop.owl.autoplay');
  })
  $('.owl-carousel .owl-item').on('mouseleave',function(e){
    $(this).closest('.owl-carousel').trigger('play.owl.autoplay',[500]);
  })
  */
/*
  var windowWidth = window.innerWidth;
  var nav = $(".nav");

  var menuFix = false;
  function onScroll(event){
    var offset = window.pageYOffset || document.documentElement.scrollTop;  
    console.log(menuFix);
    //console.log(offset)
    //fixed menu
    if (windowWidth >= 1024) {
      if (offset < 650) {
        if (menuFix) {
          nav.addClass("nav-fixed-leave");
          nav.one("transitionend webkitTransitionEnd oTransitionEnd", function() {
            nav.removeClass("nav-fixed");
            nav.addClass("nav-enter");
            nav.removeClass("nav-fixed-leave");
            reqAnimFram(function(){
              nav.addClass("nav-active");
              nav.one("transitionend webkitTransitionEnd oTransitionEnd", function() {
                nav.removeClass("nav-enter");
                nav.removeClass("nav-active");
                menuFix = false;
              });
            });
          });
        }

      }
      else {
        nav.addClass("nav-fixed-enter");
        reqAnimFram(function(){
          nav.addClass("nav-fixed");
          nav.removeClass("nav-fixed-enter");
          menuFix = true;
          //alert("WOW");
        });
        
      }
    }
    //fixed menu END
  
  }
  //vue.js animation
  function reqAnimFram(fn) {
    window.requestAnimationFrame(function() {
      window.requestAnimationFrame(function() {
        fn();
      });
    });
  }
  //vue.js animation END
  
  window.addEventListener('scroll', onScroll);
  */
});
