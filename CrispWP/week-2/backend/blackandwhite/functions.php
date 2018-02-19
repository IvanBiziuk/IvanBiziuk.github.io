<?php
//menu

if (function_exists("register_nav_menus")) {
  register_nav_menus(
    array(
      "custom-menu" =>__("Custom menu"),
    )
  );
}

function custom_menu() {
  echo "<ul>";
  wp_list_pages("title_li=&");
  echo "</ul>";
}

?>