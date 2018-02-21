<?php

// register style and scripts

function blackandwhite_scripts() {
	wp_register_script( 'jquery', get_template_directory_uri() . '/js/jquery.js', array(), null, true );
  wp_register_style( 'blackandwhite-style', get_template_directory_uri() . '/style/style.css' );
  wp_register_script( 'bootstrap-carousel', get_template_directory_uri() . '/js/bootstrap-carousel.js', array('jquery'), null, true );
  wp_register_script( 'bootstrap-transition', get_template_directory_uri() . '/js/bootstrap-transition.js', array('jquery'), null, true );
  wp_register_script( 'blackandwhite-js', get_template_directory_uri() . '/js/js.js', array('jquery'), null, true );
  wp_register_script( 'google-api', 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCh8Tzb1sIvCwkaFmup_5nNElyUk45UgGA', array(), null, true );

  wp_enqueue_script( 'jquery');	
  wp_enqueue_style( 'blackandwhite-style');	
  wp_enqueue_script( 'bootstrap-carousel');
  wp_enqueue_script( 'bootstrap-transition');
  wp_enqueue_script( 'google-api');
  wp_enqueue_script( 'blackandwhite-js');
  wp_enqueue_script( 'google-api');


	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}
}
add_action( 'wp_enqueue_scripts', 'blackandwhite_scripts' );

// custom thumbnail

add_theme_support ('post-thumbnails');
add_image_size ('small-thumb', 160, 160, true);
add_image_size ('medium-thumb', 360, 360, true);
add_image_size ('large-thumb', 560, 560, true);

function sgr_filter_image_sizes( $sizes) {
		
	unset( $sizes['thumbnail']);
	unset( $sizes['medium']);
	unset( $sizes['large']);
	
	return $sizes;
}
add_filter('intermediate_image_sizes_advanced', 'sgr_filter_image_sizes');


// register menu

if (function_exists("register_nav_menus")) {
  register_nav_menus(
    array(
      "menutop" =>__("Menu top"),
      "menubottom" =>__("Menu bottom"),
    )
  );
}

function custom_menu() {
  echo "<ul>";
  wp_list_pages("title_li=&");
  echo "</ul>";
}


//ACF

function my_acf_google_map_api( $api ){
	
	$api['key'] = 'AIzaSyBhefbdh-XY8fRbHQuWu-l9MykUAW3ssp8';
	
	return $api;
	
}

add_filter('acf/fields/google_map/api', 'my_acf_google_map_api');
?>