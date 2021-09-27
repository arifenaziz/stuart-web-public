(function ($) {
"use strict";

	var win = $(window);

	win.on('scroll',function() {
	if ($(this).scrollTop() > 1){  
		$('#sticky-header').addClass("sticky");
	  }
	  else{
		$('#sticky-header').removeClass("sticky");
	  }
	}); 

	/* meanmenu */
	 // $('#mobile-nav').meanmenu({
		//  meanMenuContainer: '.basic-mobile-menu',
		//  meanScreenWidth: "767"
	 // });



  // var trigger = $('.hamburger'),
  //     overlay = $('.overlay'),
  //    isClosed = false;

  //   trigger.click(function () {
  //     hamburger_cross();      
  //   });

  //   function hamburger_cross() {

  //     if (isClosed == true) {          
  //       overlay.hide();
  //       trigger.removeClass('is-open');
  //       trigger.addClass('is-closed');
  //       isClosed = false;
  //     } else {   
  //       overlay.show();
  //       trigger.removeClass('is-closed');
  //       trigger.addClass('is-open');
  //       isClosed = true;
  //     }
  // }
  
  // $('[data-toggle="offcanvas"]').click(function () {
  //       $('#wrapper').toggleClass('toggled');
  // });

	 
	/* hamburgers menu option  */
    $('.hamburger').on('click', function() {
        $(this).toggleClass('is-active');
        $(this).next().toggleClass('nav-menu-show')
    }); 



})(jQuery);	    