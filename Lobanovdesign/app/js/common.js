// Прелоадер

// $('.preloader').on('load', function () {
// 	$('.preloader').delay(1000).fadeOut('slow');
// })

$(document).ready(function () {
	$('.preloader').delay(1000).fadeOut('slow');
});

$(function() {

//Настройки плагина mmenu

	$('#my-menu').mmenu({
    offCanvas: {
      position: 'left'
    },
		pageScroll: {
    	'pageScroll': 'true'
    },
    navbar: {
      title: '<img src="img/logo.png" alt="Дизайн интерьеров">'
    },
    extensions: ['theme-white', 'pagedim-black', 'fx-menu-slide', 'fx-listitems-fade']
  });

	// $('nav ul li a').bind('click',function(event){
  //   var $anchor = $(this);
  //
  //   $('nav#my-menu').one('closed.mmenu', function() {
  //     setTimeout(function() {
  //         $('html, body').stop().animate({
  //             scrollTop: $($anchor.attr('href')).offset().top
  //         }, 1000,'easeInOutExpo');
  //     }, 10);
  //   });
  //
  //   $('nav#my-menu').trigger('close.mmenu');
  //
  //   event.preventDefault();
  //   event.stopImmediatePropagation();
  //
	// 	$('nav#my-menu').mmenu({
  //               configuration: {
  //                   //  For some odd reason, the header won't stay "fixed"
  //                   //  when using hardware acceleration
  //                   hardwareAcceleration: false
  //               }
  //           });

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

//Owl carousel

	$('.carousel-services').on('initialized.owl.carousel', function() {
		setTimeout(function() {
				carouselService()
		}, 100)
	});

	$('.carousel-services').owlCarousel({
		loop: true,
		nav: true,
		dots: false,
		smartSpeed: 700,
		navText: ['<i class="fa fa-angle-double-left"></i>', '<i class="fa fa-angle-double-right"></i>'],
		responsiveClass: true,
		responsive: {
			0: {
				items: 1
			},
			800: {
				items: 2
			},
			1100: {
				items: 3
			}
		}
	});

	function carouselService() {
		$('.carousel-services-item').each(function() {
			var	ths  = $(this),
					thsh = ths.find('.carousel-services-content').outerHeight();
					ths.find('.carousel-services-img').css('min-height', thsh);
			});
		};

//Owl carousel Resize

	window.onresize = function() {
		onResize();
		carouselService()
	};

	function onResize() {
		$('.carousel-services-content').equalHeights();
	} onResize();

//Selectize plugin

	$('select').selectize();

//Owl carousel reviews

	$('.reviews').owlCarousel({
		loop: true,
		items: 1,
		smartSpeed: 700,
		nav: false,
		autoHeight: true
	});

//Owl carousel partners

	$('.partners').owlCarousel({
		loop: true,
		nav: true,
		dots: false,
		smartSpeed: 700,
		navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
		responsiveClass: true,
		responsive: {
			0: {
				items: 1
			},
			768: {
				items: 2
			},
			992: {
				items: 3
			},
			1200: {
				items: 4
			}
		}
	});

//E-mail Ajax Send

	$("#form-callback").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			$(th).find('.success').addClass('active').css('display', 'flex').hide().fadeIn();
			setTimeout(function() {
				// Done Functions
				$(th).find('.success').removeClass('active').fadeOut();
				th.trigger("reset");
			}, 3000);
		});
		return false;
	});

	$("#modal-callback").submit(function () { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function () {
			$(th).find('.success').addClass('active').css('display', 'flex').hide().fadeIn();
			setTimeout(function () {
				// Done Functions
				$(th).find('.success').removeClass('active').fadeOut();
				th.trigger("reset");
			}, 3000);
		});
		return false;
	});

	$(function ($) {
		$('[name="Телефон"]').mask("+99(999) 999-9999");
	});
//Portfolio Unitgallery

	$("#gallery").unitegallery({
		gallery_theme: "tilesgrid",
		gallery_width:"100%",
		grid_num_rows:3,
		tile_enable_textpanel:true,
		tile_textpanel_title_text_align: "center",
		tile_width:302,
		tile_height:200,
		grid_space_between_cols:1,
		grid_space_between_rows:1,
		tile_enable_border:false,
		tile_enable_shadow:false,
		tile_enable_image_effect:true,
		tile_enable_overlay:false,
		tile_enable_icons:false,
		grid_padding:0,
	});

	//Changing header's background

	var imgHead = [
		'img/bg-header.jpg',
		'img/bg-header-2.jpg',
		'img/bg-header-3.jpg',
		'img/bg-header-4.jpg',
		'img/bg-header-5.jpg',
	], i = 1;

	function csaHead() {
		if (i > (imgHead.length - 1)) {
			$('.site-header').animate({ 'opacity': '.85' }, 500, function () {
				i = 1;
				$('.site-header').css({ 'background-image': 'url(' + imgHead[0] + ')' });
			});
			$('.site-header').animate({ 'opacity': '1' }, 500);
		} else {
			$('.site-header').animate({ 'opacity': '.85' }, 500, function () {
				$('.site-header').css({ 'background-image': 'url(' + imgHead[i] + ')' });
				i++;
			});
			$('.site-header').animate({ 'opacity': '1' }, 500);
		}
	}
	var intervalCsaHead = setInterval(csaHead, 10000);

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

});
