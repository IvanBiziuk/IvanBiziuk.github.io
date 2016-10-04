
(function($) {
	
	//carousel
	
    $(function() {
        $('.jcarousel').jcarousel();

        $('.jcarousel-control-prev')
            .on('jcarouselcontrol:active', function() {
                $(this).removeClass('inactive');
            })
            .on('jcarouselcontrol:inactive', function() {
                $(this).addClass('inactive');
            })
            .jcarouselControl({
                target: '-=1'
            });

        $('.jcarousel-control-next')
            .on('jcarouselcontrol:active', function() {
                $(this).removeClass('inactive');
            })
            .on('jcarouselcontrol:inactive', function() {
                $(this).addClass('inactive');
            })
            .jcarouselControl({
                target: '+=1'
            });

        $('.jcarousel-pagination')
            .on('jcarouselpagination:active', 'a', function() {
                $(this).addClass('active');
            })
            .on('jcarouselpagination:inactive', 'a', function() {
                $(this).removeClass('active');
            })
            .jcarouselPagination();
    });
	
	//select checkbox
	
	$(function() {
		$('select').select2();
	});
	
	$(function(){
		$('#js-checkbox').iCheck({
			 checkboxClass: 'icheckbox_futurico'
		});
	});

	// menu dropdown
	$(function(){
		$('.dropdown-menu').hover(
			function(){
				  $(this).children('.sub-menu').slideDown(200);
				}, 
				function(){
				  $(this).children('.sub-menu').slideUp(200);
				});
	});
	
	/*	
	//When mouse is over element
	
	$(function(){
		$('.dropdown-level2').mouseover(function(){
			$('.anim').css({"overflow":"visible"});
			$('.sub-menu2').css({"opacity":"1"});
		});
	});
	$(function(){
		$('.dropdown-level1').mouseover(function(){
			$('.sub-menu').stop().animate({
				height:"200px",
				opacity:"1"
			}, 500,
				function(){
					$(this).stop().animate({
						left:"-30px",
						width:"150px",
					}, 300)
			});
		});
	});
	
	//When mouse is removed
	$(function(){
		$('.dropdown-level1').mouseout(function(){
			$('.sub-menu').stop().animate({
				width:"2px",
				left:"50%"
			}, 300,
				function(){
					$(this).stop().animate({
						height:"2px"
				}, 500)	
			});
		});
	});
*/
})(jQuery);