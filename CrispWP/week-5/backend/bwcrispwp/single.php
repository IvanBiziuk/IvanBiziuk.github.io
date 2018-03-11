<?php get_header(); ?>
<?php if(have_posts()) : ?>
<?php while ( have_posts() ) : the_post(); ?>

  <div class="content">
    <div class="main">
      <h1><?php the_title(); ?></h1>
			<div class="body-post">
				<p><?php the_content(); ?></p>
			</div>
			<div class="comments">
				<?php comments_template(); ?>
			</div>
    </div>

		<?php endwhile; ?>
		<?php else : ?>
		<?php endif; ?> 

<!-- Related posts -->

		<?php 
			$getcat = get_the_category();
			$cat = $getcat[0]->cat_ID; //получаем ID категории записи
			$new_query = new WP_Query('orderby=rand&posts_per_page=2&cat='. $cat);
		?>
		<h2>Related Posts</h2>
		<?php while ( $new_query->have_posts() ) : $new_query->the_post(); ?>
			<a href="<?php the_permalink(); ?>"></a>
			<a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
		<?php endwhile; wp_reset_postdata()?>

</div>
<?php get_footer(); ?>