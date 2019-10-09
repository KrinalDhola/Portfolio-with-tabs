// JavaScript for Conceito

	// Isotope--portfolio--works filter
	$(window).load(function(){
		var $container = $('.works-container');
    $container.isotope({
		filter: '*',
       animationOptions: {
       duration: 750,
       easing: 'linear',
       queue: false
       }
    });
 
	$('.filter a').click(function(){
	$('.filter .current').removeClass('current');
	$(this).addClass('current');
 
    var selector = $(this).attr('data-filter');
    $container.isotope({
    	filter: selector,
       animationOptions: {
       duration: 750,
       easing: 'linear',
       queue: false
		}
	});
    	return false;
    }); 
});
