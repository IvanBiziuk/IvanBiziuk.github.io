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
      <p><?php the_content(); ?></p>
    </div>  
  </div>

<?php endwhile; ?>
<?php else : ?>
<?php endif; ?>

<?php get_footer(); ?>