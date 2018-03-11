<?php get_header(); ?>
<div class="content">
    <form class="form">
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

    <?php if(have_posts()):while ( have_posts() ) : the_post(); ?>
    <?php the_title(); ?>
    <?php the_content(); ?>
	  <?php endwhile; endif; ?>

  </div>
<?php get_footer(); ?>