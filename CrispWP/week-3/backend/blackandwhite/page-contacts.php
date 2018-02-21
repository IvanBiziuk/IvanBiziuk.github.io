<?php
/*
Template Name: Contacts template 
Template Post Type: page
*/
?>

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
    <form>
      <div class="row">
          <label>Text:</label>
          <input type="text" placeholder="Input type text">
      </div>
      <div class="row">
          <label>Select:</label>
          <select>
              <option>Option</option>
              <option>Option 1</option>
              <option>Option 2</option>
              <option>Option 3</option>
          </select>
      </div>
      <div class="row">
          <label><input type="checkbox">Sed ut perspiciatis unde omnis iste natus</label>
          <label><input type="radio" name="radiobutton" value="radiobutton">Lorem ipsum dolor sit amet, consectetur</label>
      </div>
      <div class="row">
          <label>Textarea:</label>
          <textarea></textarea>
      </div>
      <div class="row">
          <button type="submit">Button</button>
      </div>
    </form> 
  </div>

<?php endwhile; ?>
<?php else : ?>
<?php endif; ?>

<?php get_footer(); ?>