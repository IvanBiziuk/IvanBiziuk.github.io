<?php get_header(); ?>
  <div class="content">
    <div class="main">
			<div class="posts">
				<?php if(have_posts()) : ?>
				<?php while ( have_posts() ) : the_post(); ?>
					<h1><?php the_title(); ?></h1>
					<p><?php the_content(); ?></p>
				<?php endwhile; ?>
				<?php else : ?>
				<?php endif; ?>
			</div>
    </div>
  </div>
<?php get_footer(); ?>