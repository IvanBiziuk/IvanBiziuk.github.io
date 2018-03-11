<?php 
    $query = new WP_Query( array( 'books' => '2007' ) );
  ?>
  <div class="content">
    <h2>Posts from taxonomy</h2>
		<?php while ( $query->have_posts() ) : $query->the_post(); ?>
			  <h1><?php the_title(); ?></h1>
				<p><?php the_content(); ?></p>
		<?php endwhile; wp_reset_postdata()?>
  </div>

<?php get_footer(); ?>