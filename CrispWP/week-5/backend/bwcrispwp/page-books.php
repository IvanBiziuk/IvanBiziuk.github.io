<?php get_header(); ?>

<?php 
	$args = array(
				'post_type' => 'books',
				'publish' => true,
				'paged' => get_query_var('paged'),
			);	
	query_posts($args);
?>

  <div class="content">
    <div class="main">
			<?php if(have_posts()) : ?>
				<?php while ( have_posts() ) : the_post(); ?>
					<p><?php the_field('author'); ?></p>
					<h1><?php the_title(); ?></h1>
					<p><?php the_content(); ?></p>
				<?php endwhile; ?>
				<?php else : ?>
				<?php endif; ?>
  </div>


<?php get_footer(); ?>