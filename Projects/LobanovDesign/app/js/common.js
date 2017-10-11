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

	$("form.callback").submit(function() { //Change
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

	var imgHead = [
	            'img/bg-header.jpg',
	            'img/bg-header-2.jpg',
							'img/bg-header-3.jpg',
							'img/bg-header-4.jpg',
							'img/bg-header-5.jpg',
	        ], i = 1;

  function csaHead(){
      if(i > (imgHead.length-1)){
          $('.site-header').animate({'opacity':'.85'},500,function(){
              i = 1;
              $('.site-header').css({'background-image':'url('+imgHead[0]+')'});
          });
          $('.site-header').animate({'opacity':'1'},500);
      } else {
          $('.site-header').animate({'opacity':'.85'},500,function(){
              $('.site-header').css({'background-image':'url('+imgHead[i]+')'});
              i++;
          });
          $('.site-header').animate({'opacity':'1'},500);
      }
  }
  var intervalCsaHead = setInterval(csaHead, 10000);


	$("#demo").elastic_grid({
	'filterEffect': '<a href="http://www.jqueryscript.net/tags.php?/popup/">popup</a>', // moveup, scaleup, fallperspective, fly, flip, helix , popup
	'hoverDirection': true,
	'hoverDelay': 0,
	'hoverInverse': false,
	'expandingSpeed': 500,
	'expandingHeight': 500,
	'items' :
	[
	{
	'title' : 'Gallery 1',
	'description'   : 'Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage soko coriander sweet pepper water spinach winter purslane shallot tigernut lentil beetroot.Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage.',
	'thumbnail' : ['images/small/1.jpg', 'images/small/2.jpg', 'images/small/3.jpg', 'images/small/10.jpg', 'images/small/11.jpg'],
	'large' : ['images/large/1.jpg', 'images/large/2.jpg', 'images/large/3.jpg', 'images/large/10.jpg', 'images/large/11.jpg'],
	'button_list'   :
	[
	{ 'title':'Demo', 'url' : 'http://porfolio.bonchen.net/' },
	{ 'title':'Download', 'url':'http://porfolio.bonchen.net/'}
	],
	'tags'  : ['Portrait']
	},
	{
	'title' : 'Swiss chard pumpkin',
	'description'   : 'Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage soko coriander sweet pepper water spinach winter purslane shallot tigernut lentil beetroot.Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage.',
	'thumbnail' : ['images/small/4.jpg', 'images/small/5.jpg', 'images/small/6.jpg', 'images/small/7.jpg'],
	'large' : ['images/large/4.jpg', 'images/large/5.jpg', 'images/large/6.jpg', 'images/large/7.jpg'],
	'button_list'   :
	[
	{ 'title':'Demo', 'url' : 'http://porfolio.bonchen.net/' },
	{ 'title':'Download', 'url':'http://porfolio.bonchen.net/'}
	],
	'tags'  : ['Landscape']
	},
	{
	'title' : 'Spinach winter purslane',
	'description'   : 'Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage soko coriander sweet pepper water spinach winter purslane shallot tigernut lentil beetroot.Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage.',
	'thumbnail' : ['images/small/15.jpg','images/small/8.jpg', 'images/small/9.jpg', 'images/small/10.jpg'],
	'large' : ['images/large/15.jpg','images/large/8.jpg', 'images/large/9.jpg', 'images/large/10.jpg'],
	'button_list'   :
	[
	{ 'title':'Demo', 'url' : 'http://porfolio.bonchen.net/' },
	{ 'title':'Download', 'url':'http://porfolio.bonchen.net/'}
	],
	'tags'  : ['Portrait', 'Landscape']
	},
	{
	'title' : 'Aubergine napa cabbage',
	'description'   : 'Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage soko coriander sweet pepper water spinach winter purslane shallot tigernut lentil beetroot.Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage.',
	'thumbnail' : ['images/small/12.jpg', 'images/small/13.jpg', 'images/small/14.jpg', 'images/small/15.jpg', 'images/small/16.jpg'],
	'large' : ['images/large/12.jpg', 'images/large/13.jpg', 'images/large/14.jpg', 'images/large/15.jpg', 'images/large/16.jpg'],
	'button_list'   :
	[
	{ 'title':'Demo', 'url' : 'http://porfolio.bonchen.net/' },
	{ 'title':'Download', 'url':'http://porfolio.bonchen.net/'}
	],
	'tags'  : ['Portrait']
	},
	{
	'title' : 'Swiss chard pumpkin',
	'description'   : 'Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage soko coriander sweet pepper water spinach winter purslane shallot tigernut lentil beetroot.Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage.',
	'thumbnail' : ['images/small/17.jpg', 'images/small/18.jpg', 'images/small/19.jpg', 'images/small/20.jpg'],
	'large' : ['images/large/17.jpg', 'images/large/18.jpg', 'images/large/19.jpg', 'images/large/20.jpg'],
	'button_list'   :
	[
	{ 'title':'Demo', 'url' : 'http://porfolio.bonchen.net/' },
	{ 'title':'Download', 'url':'http://porfolio.bonchen.net/'}
	],
	'tags'  : ['Landscape']
	},
	{
	'title' : 'Spinach winter purslane',
	'description'   : 'Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage soko coriander sweet pepper water spinach winter purslane shallot tigernut lentil beetroot.Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage.',
	'thumbnail' : ['images/small/13.jpg','images/small/15.jpg', 'images/small/11.jpg', 'images/small/10.jpg'],
	'large' : ['images/large/13.jpg','images/large/15.jpg', 'images/large/11.jpg', 'images/large/10.jpg'],
	'button_list'   :
	[
	{ 'title':'Demo', 'url' : 'http://porfolio.bonchen.net/' },
	{ 'title':'Download', 'url':'http://porfolio.bonchen.net/'}
	],
	'tags'  : ['Vintage']
	},
	{
	'title' : 'Spinach winter purslane',
	'description'   : 'Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage soko coriander sweet pepper water spinach winter purslane shallot tigernut lentil beetroot.Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage.',
	'thumbnail' : ['images/small/7.jpg','images/small/8.jpg', 'images/small/9.jpg', 'images/small/10.jpg'],
	'large' : ['images/large/7.jpg','images/large/8.jpg', 'images/large/9.jpg', 'images/large/10.jpg'],
	'button_list'   :
	[
	{ 'title':'Demo', 'url' : 'http://porfolio.bonchen.net/' },
	{ 'title':'Download', 'url':'http://porfolio.bonchen.net/'}
	],
	'tags'  : ['Portrait']
	},
	{
	'title' : 'Azuki bean',
	'description'   : 'Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage soko coriander sweet pepper water spinach winter purslane shallot tigernut lentil beetroot.Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage.',
	'thumbnail' : ['images/small/16.jpg', 'images/small/13.jpg', 'images/small/14.jpg', 'images/small/15.jpg', 'images/small/16.jpg'],
	'large' : ['images/large/16.jpg', 'images/large/13.jpg', 'images/large/14.jpg', 'images/large/15.jpg', 'images/large/16.jpg'],
	'button_list'   :
	[
	{ 'title':'Demo', 'url' : 'http://porfolio.bonchen.net/' },
	{ 'title':'Download', 'url':'http://porfolio.bonchen.net/'}
	],
	'tags'  : ['Vintage']
	},
	{
	'title' : 'Swiss chard pumpkin',
	'description'   : 'Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage soko coriander sweet pepper water spinach winter purslane shallot tigernut lentil beetroot.Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage.',
	'thumbnail' : ['images/small/18.jpg', 'images/small/18.jpg', 'images/small/19.jpg', 'images/small/20.jpg'],
	'large' : ['images/large/18.jpg', 'images/large/18.jpg', 'images/large/19.jpg', 'images/large/20.jpg'],
	'button_list'   :
	[
	{ 'title':'Demo', 'url' : 'http://porfolio.bonchen.net/' },
	{ 'title':'Download', 'url':'http://porfolio.bonchen.net/'}
	],
	'tags'  : ['Landscape']
	},
	{
	'title' : 'Winter purslane',
	'description'   : 'Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage soko coriander sweet pepper water spinach winter purslane shallot tigernut lentil beetroot.Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage.',
	'thumbnail' : ['images/small/11.jpg','images/small/15.jpg', 'images/small/11.jpg', 'images/small/10.jpg'],
	'large' : ['images/large/11.jpg','images/large/15.jpg', 'images/large/11.jpg', 'images/large/10.jpg'],
	'button_list'   :
	[
	{ 'title':'Demo', 'url' : 'http://porfolio.bonchen.net/' },
	{ 'title':'Download', 'url':'http://porfolio.bonchen.net/'}
	],
	'tags'  : ['Portrait']
	},
	{
	'title' : 'Spinach winter purslane',
	'description'   : 'Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage soko coriander sweet pepper water spinach winter purslane shallot tigernut lentil beetroot.Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage.',
	'thumbnail' : ['images/small/3.jpg','images/small/15.jpg', 'images/small/11.jpg', 'images/small/10.jpg'],
	'large' : ['images/large/3.jpg','images/large/15.jpg', 'images/large/11.jpg', 'images/large/10.jpg'],
	'button_list'   :
	[
	{ 'title':'Demo', 'url' : 'http://porfolio.bonchen.net/' },
	{ 'title':'Download', 'url':'http://porfolio.bonchen.net/'}
	],
	'tags'  : ['Vintage']
	},
	{
	'title' : 'Spinach winter purslane',
	'description'   : 'Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage soko coriander sweet pepper water spinach winter purslane shallot tigernut lentil beetroot.Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage.',
	'thumbnail' : ['images/small/5.jpg','images/small/8.jpg', 'images/small/9.jpg', 'images/small/10.jpg'],
	'large' : ['images/large/5.jpg','images/large/8.jpg', 'images/large/9.jpg', 'images/large/10.jpg'],
	'button_list'   :
	[
	{ 'title':'Demo', 'url' : 'http://#' },
	{ 'title':'Download', 'url':'http://#'}
	],
	'tags'  : ['Portrait', 'Landscape']
	},
	{
	'title' : 'Azuki bean',
	'description'   : 'Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage soko coriander sweet pepper water spinach winter purslane shallot tigernut lentil beetroot.Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage.',
	'thumbnail' : ['images/small/6.jpg', 'images/small/13.jpg', 'images/small/14.jpg', 'images/small/15.jpg', 'images/small/16.jpg'],
	'large' : ['images/large/6.jpg', 'images/large/13.jpg', 'images/large/14.jpg', 'images/large/15.jpg', 'images/large/16.jpg'],
	'button_list'   :
	[
	{ 'title':'Demo', 'url' : 'http://#' },
	{ 'title':'Download', 'url':'http://#'}
	],
	'tags'  : ['Vintage']
	},
	{
	'title' : 'Swiss chard pumpkin',
	'description'   : 'Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage soko coriander sweet pepper water spinach winter purslane shallot tigernut lentil beetroot.Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage.',
	'thumbnail' : ['images/small/8.jpg', 'images/small/18.jpg', 'images/small/19.jpg', 'images/small/20.jpg'],
	'large' : ['images/large/8.jpg', 'images/large/18.jpg', 'images/large/19.jpg', 'images/large/20.jpg'],
	'button_list'   :
	[
	{ 'title':'Demo', 'url' : 'http://#' },
	{ 'title':'Download', 'url':'http://#'}
	],
	'tags'  : ['Landscape']
	},
	{
	'title' : 'Spinach winter purslane',
	'description'   : 'Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage soko coriander sweet pepper water spinach winter purslane shallot tigernut lentil beetroot.Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage.',
	'thumbnail' : ['images/small/9.jpg','images/small/15.jpg', 'images/small/11.jpg', 'images/small/10.jpg'],
	'large' : ['images/large/9.jpg','images/large/15.jpg', 'images/large/11.jpg', 'images/large/10.jpg'],
	'button_list'   :
	[
	{ 'title':'Demo', 'url' : 'http://#' },
	{ 'title':'Download', 'url':'http://#'}
	],
	'tags'  : ['Vintage', 'Landscape']
	}

	]
	});


});
