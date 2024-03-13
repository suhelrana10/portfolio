(function($){
	'use script';
	$(window).on('load', function(event) {
        $('#preloader').delay(500).fadeOut(500);
    });
	// WOW JS
	new WOW().init();
	// Menu Responsive
	$('.mobile-menu').click(function(){
	    $('.menu ul').slideToggle();
	  });
	// Scroll Area
	$(document).ready(function(){
	    $('.scroll-area').click(function(){
	      	$('html').animate({
	        	'scrollTop' : 0,
	      	},700);
	      	return false;
	    });
	    $(window).on('scroll',function(){
	      	var a = $(window).scrollTop();
	      	if(a>400){
	            $('.scroll-area').slideDown(300);
	        }else{
	            $('.scroll-area').slideUp(200);
	        }
	    });
	});
	// Counter
    var $CounterUp = $('.counter');
    if($CounterUp.length > 0){
		$('.counter').counterUp({
	        delay: 10,
	        time: 2000
	    });
	}
	// Portfolio
	var $PortfolioMixIT = $('.portfolio-full');
    if($PortfolioMixIT.length > 0){
    	var mixer = mixitup('.portfolio-full');
    	var mixer = mixitup('.portF');
    	var mixer = mixitup('.portF', {
    		selectors: {
    			target: '.blog-item'
    		},
    		animation: {
    			duration: 100
    		}
    	});
    }
     /*---Client Testimonial---*/
    var $TestimonialSlider = $('.testimonial-full');
        if($TestimonialSlider.length > 0){
        $('.testimonial-full').owlCarousel({
            autoplay: true,
            loop: false,
            nav: false,
            autoplay: false,
            autoplayTimeout: 8000,
            items: 2,
            margin:30,
            dots:true,
            responsiveClass:true,
            responsive:{
                    0:{
                    items: 1,
                    stagePadding: 0,
                    margin: 0,
                },
                600:{
                    items:1,
                },
                876:{
                    items:1,
                },
                992:{
                    items:2,
                },
            }
        });
    } 
	// Sticky Menu
	$(document).ready(function(){
		$(window).on('scroll',function(){
			var scroll = $(window).scrollTop();
			if(scroll < 150){
				$('.header').removeClass('sticky');
			}else{
				$('.header').addClass('sticky');
			}
		});
	});
	$('a[data-rel^=lightcase]').lightcase({
        transition: 'elastic',
        swipe: true,
        maxWidth: 1170,
        maxHeight: 600,
    });
	$('.menu ul').onePageNav({
		currentClass: 'current',
		changeHash: false,
		scrollSpeed: 150,
		scrollThreshold: 0.2,
	});

	$(".toggle-btn-lg span").click(function () {
      	if ($('body').hasClass("drak")) {
        	$("body, .toggle-btn-lg span").removeClass("drak");
      	}
      	else {
        	$("body").removeClass("drak");
        	$('body, .toggle-btn-lg span').addClass("drak");
      	}
  	});

}(jQuery));