<?php 
/*
Template Name: Output new taxonomy Year
Template Post Type: page
*/
?>

<?php get_header(); ?>

  <?php
    $query = new WP_Query( array( 'year' => '2018' ) );
  ?>
  <div class="content">
    <h2>Posts from taxonomy</h2>
		<?php while ( $query->have_posts() ) : $query->the_post(); ?>
			  <h1><?php the_title(); ?></h1>
				<p><?php the_content(); ?></p>
		<?php endwhile; wp_reset_postdata()?>
  </div>


<?php get_footer(); ?>