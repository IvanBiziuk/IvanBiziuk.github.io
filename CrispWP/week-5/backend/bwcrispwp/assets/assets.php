<?php

function blackandwhite_scripts() {
	wp_register_script( 'jquery', get_template_directory_uri() . '/js/jquery.js', array(), null, true );
  wp_register_style( 'blackandwhite-style', get_template_directory_uri() . '/style/style.css' );
  wp_register_script( 'bootstrap-carousel', get_template_directory_uri() . '/js/bootstrap-carousel.js', array('jquery'), null, true );
  wp_register_script( 'bootstrap-transition', get_template_directory_uri() . '/js/bootstrap-transition.js', array('jquery'), null, true );
  wp_register_script( 'blackandwhite-js', get_template_directory_uri() . '/js/js.js', array('jquery'), null, true );
  wp_register_script( 'google-api', 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBRebIvs_hwdf1cR7mhL9-9H8bhjws04oQ', array(), null, true );

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

?>