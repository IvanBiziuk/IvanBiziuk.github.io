// Прелоадер

$(document).ready(function () {
	$('.preloader').delay(1000).fadeOut('slow');
});

$(function() {

//Настройки плагина mmenu

	$('#my-menu').mmenu({
    offCanvas: {
      position: 'right'
    },
		pageScroll: {
    	'pageScroll': 'true'
    },
    "extensions": ['theme-white', 'pagedim-black', 'fx-menu-slide', 'fx-listitems-fade']
  });

//Использование api mmenu в пирожке

  var api = $('#my-menu').data('mmenu');
  api.bind('open:finish', function() {
    $('.hamburger').addClass('is-active');
		$('.flex-center').addClass('header-hide');
  })
  api.bind('close:finish', function() {
    $('.hamburger').removeClass('is-active');
		$('.flex-center').removeClass('header-hide');
  });

//Owl carousel reviews

	$('.reviews').owlCarousel({
		loop: true,
		smartSpeed: 700,
		nav: true,
		navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
		stagePadding: 5,
		margin: 40,
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 1
			},
			1000: {
				items: 2
			}
		}
	});
	
	//Owl carousel partners

	$('.partners').owlCarousel({
		loop: true,
		dots: false,
		smartSpeed: 700,
		margin:50,
		responsive: {
			0: {
				items: 1
			},
			800: {
				items: 2
			},
			1100: {
				items: 6
			}
		},
		autoplay: true,
		autoplayTimeout: 3000,
		autoplayHoverPause: true
	});
	
// Scroll Top

	$(window).scroll(function () {
		if ($(this).scrollTop() > $(this).height()) {
			$('.top').addClass('active');
		} else {
			$('.top').removeClass('active');
		}
	});
	$('.top').click(function () {
		$('html, body').stop().animate({ scrollTop: 0 }, 'slow', 'swing')
	});


//Team

var elemOne = document.getElementById('about-name-one');
var elemTwo = document.getElementById('about-name-two');
var elemThree = document.getElementById('about-name-three');

elemOne.addEventListener("mouseover", function () {
	document.getElementById('hide-block-one').classList.add('show-scills');
});
elemOne.addEventListener("mouseout", function () {
	 document.getElementById('hide-block-one').classList.remove('show-scills');
});

elemTwo.addEventListener("mouseover", function () {
	document.getElementById('hide-block-two').classList.add('show-scills');
});
elemTwo.addEventListener("mouseout", function () {
	 document.getElementById('hide-block-two').classList.remove('show-scills');
});

elemThree.addEventListener("mouseover", function () {
	document.getElementById('hide-block-three').classList.add('show-scills');
});
elemThree.addEventListener("mouseout", function () {
	 document.getElementById('hide-block-three').classList.remove('show-scills');
});



});
