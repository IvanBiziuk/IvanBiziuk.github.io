<?php get_header(); ?>

<?php if(have_posts()) : ?>
<?php while ( have_posts() ) : the_post(); ?>

  <div class="content">
    <?php 
		if(function_exists("wp_nav_menu"))
			wp_nav_menu(
				array(
					"theme_location" => "custom-menu",
					"fallback_cb" => "custom_menu",
					"container" => "div",
					"menu_id" => "nav",
					"menu_class" => "nav"
				)
			);
		else custom_menu();
	?>
    <div class="main">
      <h1><?php the_title(); ?></h1>
      <p>Lorem ipsum dolor sit amet, <a href="#" title="link">consectetur adipisicing elit</a>, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in <b title="bold">reprehenderit in voluptate velit</b> esse cillum dolore eu fugiat nulla pariatur. <i title="italic">Excepteur sint occaecat</i> cupidatat non proident, sunt in culpa qui officia deserunt.</p>
      <p><?php the_content(); ?></p>
    </div>

  </div>

<?php endwhile; ?>
<?php else : ?>
<?php endif; ?>

<?php get_footer(); ?>