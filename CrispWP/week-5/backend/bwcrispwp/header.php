<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<meta name="description" content="<?php bloginfo('description'); ?>">
		<meta name="keywords" content="Шаблоны сайтов бесплатно, дизайн сайта бесплатно, адаптивный дизайн">
		<title><?php bloginfo('name'); ?> <?php wp_title("", true); ?></title>
		<?php wp_head(); ?>
	</head>
	<body>
		<div class="wrapper">
			<!--Шапка-->
			<div class="header">
				<div class="headerContent">
					<div class="logo"><a href="#"><img src="<?php bloginfo('template_url'); ?>/images/logo.png"></a></div>
					<?php get_search_form(); ?>
				</div>
			</div>
			<!--Слайдер-->
			<div class="slider">
				<div id="myCarousel" class="carousel slide">
					<div class="carousel-inner">
						<div class="item active">
							<img src="<?php bloginfo('template_url'); ?>/images/slider-img.jpg" alt="">
							<div class="carousel-caption">
								<h4>Lorem ipsum dolor sit amet</h4>
								<p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
							</div>
						</div>
						<div class="item">
							<img src="<?php bloginfo('template_url'); ?>/images/slider-img2.jpg" alt="">
							<div class="carousel-caption">
								<h4>Sed ut perspiciatis unde omnis</h4>
								<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
							</div>
						</div>
						<div class="item">
							<img src="<?php bloginfo('template_url'); ?>/images/slider-img3.jpg" alt="">
							<div class="carousel-caption">
								<h4>At vero eos et accusamus et iusto</h4>
								<p> Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.</p>
							</div>
						</div>
					</div>
					<a class="left carousel-control" href="#myCarousel" data-slide="prev">&lsaquo;</a>
					<a class="right carousel-control" href="#myCarousel" data-slide="next">&rsaquo;</a>
				</div>
			</div>
			<div class="content">
				<?php 
						if(function_exists("wp_nav_menu"))
							wp_nav_menu(
								array(
									"theme_location" => "header_location",
									"fallback_cb" => "custom_menu",
									"container" => "div",
									"menu_id" => "nav",
									"menu_class" => "nav"
								)
							);
						else custom_menu();
					?>
			</div>
			