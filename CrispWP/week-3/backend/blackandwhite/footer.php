<!--Подвал-->
	<div class="footer">

		<?php 

		$location = get_field('google_map');

		if( !empty($location) ):
		?>
		<div class="acf-map">
			<div class="marker" data-lat="<?php echo $location['lat']; ?>" data-lng="<?php echo $location['lng']; ?>"></div>
		</div>
		<?php endif; ?>


		<p>&copy; Footer content <a href="http://psd-html-css.ru">Link footer</a></p>
		<?php 
		if(function_exists("wp_nav_menu"))
			wp_nav_menu(
				array(
					"theme_location" => "menubottom",
					"fallback_cb" => "custom_menu",
					"container" => "div",
					"menu_id" => "nav",
					"menu_class" => "nav"
				)
			);
		else custom_menu();
	?>

	</div>

	<?php wp_footer(); ?>

	</body>
</html>