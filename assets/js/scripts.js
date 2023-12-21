(function($) {
	'use strict';
		jQuery(document).ready(function($) {
			//Active Menu
			$(".mobile_menu").simpleMobileMenu({			
				"menuStyle": "slide"
			});
		});
		
		/*PRELOADER JS*/
		$(window).on('load', function() { 
			$('.preloader').fadeOut();
			$('.preloader').delay(350).fadeOut('slow'); 
		}); 
		/*END PRELOADER JS*/		
		
		/*START Home Slider JS*/	
		$('.home-slider').slick({
		  dots: false,
		  infinite: true,
		  speed: 300,
		  slidesToShow: 1,
		  speed: 500,
		  cssEase: 'linear',
		  fade: true,
		  adaptiveHeight: true
		});
		
		/*START Tour Details Slider JS*/	
		setTimeout(() => {
			$('.tour_slider').slick({
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: true,
				fade: true,
				asNavFor: '.tour_slider_nav'
			  });
			  
			   $('.tour_slider_nav').slick({
					slidesToShow: 4,
					slidesToScroll: 1,
					asNavFor: '.tour_slider',
					dots: true,
					arrows: false,
					centerMode: true,
					focusOnSelect: true
			  });
			  console.log('delayeedddd')
		}, 3000);
})(jQuery);