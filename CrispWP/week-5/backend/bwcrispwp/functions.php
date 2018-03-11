<?php

require get_template_directory() . '/assets/assets.php';

if (function_exists("register_nav_menus")) {
  register_nav_menus(
    array(
      "header_location" =>__("Menu Header"),
      "footer_location" =>__("Menu Footer"),
    )
  );
}

function custom_menu() {
  echo "<ul>";
  wp_list_pages("title_li=&");
  echo "</ul>";
}


//Taxonomy

add_filter( 'pre_option_link_manager_enabled', '__return_true' );

function add_new_taxonomies() {	
/* создаем функцию с произвольным именем и вставляем 
в неё register_taxonomy()
*/
	
	register_taxonomy('year',
		array('post', 'books'),
		array(
			'hierarchical' => false,
			/* true - по типу рубрик, false - по типу меток, 
			по умолчанию - false */
			'labels' => array(
				/* ярлыки, нужные при создании UI, можете
				не писать ничего, тогда будут использованы
				ярлыки по умолчанию */
				'name' => 'Years',
				'singular_name' => 'Год',
				'search_items' =>  'Найти год',
				'popular_items' => 'Популярные года',
				'all_items' => 'Все года',
				'parent_item' => null,
				'parent_item_colon' => null,
				'edit_item' => 'Редактировать год', 
				'update_item' => 'Обновить год',
				'add_new_item' => 'Добавить новый год',
				'new_item_name' => 'Название нового года',
				'separate_items_with_commas' => 'Разделяйте года запятыми',
				'add_or_remove_items' => 'Добавить или удалить год',
				'choose_from_most_used' => 'Выбрать из наиболее часто используемых годов',
				'menu_name' => 'Year'
			),
			'public' => true, 
			/* каждый может использовать таксономию, либо
			только администраторы, по умолчанию - true */
			'show_in_nav_menus' => true,
			/* добавить на страницу создания меню */
			'show_ui' => true,
			/* добавить интерфейс создания и редактирования */
			'show_tagcloud' => true,
			/* нужно ли разрешить облако тегов для этой таксономии */
			'update_count_callback' => '_update_post_term_count',
			/* callback-функция для обновления счетчика $object_type */
			'query_var' => true,
			/* разрешено ли использование query_var, также можно 
			указать строку, которая будет использоваться в качестве 
			него, по умолчанию - имя таксономии */
			'rewrite' => array(
			/* настройки URL пермалинков */
				'slug' => 'year', // ярлык
				'hierarchical' => false // разрешить вложенность
 
			),
		)
	);
}
add_action( 'init', 'add_new_taxonomies', 0 );


// Add new post type

function true_register_post_type_init() {
	$labels = array(
		'name' => 'Книги',
		'singular_name' => 'Книгу', // админ панель Добавить->Функцию
		'add_new' => 'Добавить книгу',
		'add_new_item' => 'Добавить новую книгу', // заголовок тега <title>
		'edit_item' => 'Редактировать книгу',
		'new_item' => 'Новая книга',
		'all_items' => 'Все книги',
		'view_item' => 'Просмотр книги на сайте',
		'search_items' => 'Искать книгу',
		'not_found' =>  'Книг не найдено.',
		'not_found_in_trash' => 'В корзине нет книг.',
		'menu_name' => 'Книжонки' // ссылка в меню в админке
	);
	$args = array(
		'labels' => $labels,
		'public' => true,
		'show_ui' => true, // показывать интерфейс в админке
		'has_archive' => true, 
		'menu_icon' => get_stylesheet_directory_uri() .'/img/function_icon.png', // иконка в меню
		'menu_position' => 20, // порядок в меню
		'supports' => array( 'title', 'editor', 'comments', 'author', 'thumbnail')
	);
	register_post_type('books', $args);
}
add_action( 'init', 'true_register_post_type_init' ); // Использовать функцию только внутри хука init
?>