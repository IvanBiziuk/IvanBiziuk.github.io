<!--Подвал-->
	<div class="footer">
		<p>&copy; Footer content <a href="http://psd-html-css.ru">Link footer</a></p>
	<?php 
		if(function_exists("wp_nav_menu"))
			wp_nav_menu(
				array(
					"theme_location" => "footer_location",
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