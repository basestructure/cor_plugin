<?php
/**
 * Plugin Name: SPK - Master Plugin
 * Description: Combining all SmarterWebPackages plugins into one: Quotes, Youtube Embed, Social Toolbar, Dynamic Transfers and Get Permalink
 * Version: 3.1
 * Author: Jake Almeda
 * Author URI: http://smarterwebpackages.com/
 * Network: true
 * License: GPL2
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly
}

/* --------------------------------------------------------------------------------------------
 * | APPLY HACKS
 * ----------------------------------------------------------------------------------------- */
if ( !is_admin() ) {

	/*add_action( 'wp_enqueue_scripts', 'spk_remove_head_scripts' );
	function spk_remove_head_scripts() { 
	   remove_action('wp_head', 'wp_print_scripts'); 
	   remove_action('wp_head', 'wp_print_head_scripts', 9); 
	   remove_action('wp_head', 'wp_enqueue_scripts', 1);
	 
	   add_action('wp_footer', 'wp_print_scripts', 5);
	   add_action('wp_footer', 'wp_enqueue_scripts', 5);
	   add_action('wp_footer', 'wp_print_head_scripts', 5); 
	}*/
	
	// Defer Javascripts
	add_filter( 'clean_url', 'defer_parsing_of_js', 11, 1 );
    function defer_parsing_of_js ( $url ) {
        if( FALSE === strpos( $url, '.js' ) ) return $url;
        if( strpos( $url, 'jquery.js' ) ) return $url;//."' async='async";
      	
        return $url."' defer='defer";
    }

	// FORCE THE CRITICAL CSS TO LOAD INLINE (INSIDE <head></head> TAGS)
    add_action( 'wp_head', 'cor_critical_styling', 10 );
	function cor_critical_styling() {
		// check if critical style file exists
		//$spk_style_critical = get_stylesheet_directory() . '/style_critical_min.css';
		$spk_style_critical = get_stylesheet_directory() . '/style-min.css';
		if( file_exists( $spk_style_critical ) ) {
			$spk_verified = 1;
			$spk_style_critical = spk_redirect_css_image_urls( file_get_contents( $spk_style_critical ) );
		}

		// verify if minimized soliloquy css file exists
		$spk_soli_style = plugin_dir_path( __FILE__ ) . 'css/soliloquy_min.css';
		if( file_exists( $spk_soli_style ) ) {
			$spk_verified = $spk_verified + 1;
			$spk_soli_style = spk_redirect_soliloquy_image_urls( file_get_contents( $spk_soli_style ) );
		}

		// one or both file exists - display
		if( $spk_verified ) {
			echo '<style type="text/css">'.$spk_style_critical.$spk_soli_style.'</style>';
		}
	}
		
	// ADD NON-CRITICAL STYLING TO THE FOOTER
	// NOTE: Enqueued scripts are executed at priority level 20
	/*add_action( 'wp_footer', 'spk_delay_styling_func', 2 );
	function spk_delay_styling_func() {
		$spk_style_critical_non = get_stylesheet_directory() . '/style_critical_non_min.css';
		if( file_exists( $spk_style_critical_non ) ) {
			echo "<style type='text/css'>".spk_redirect_css_image_urls( file_get_contents( $spk_style_critical_non ) )."</style>";	
		}
	}*/

	// DEREGISTER SCRIPTS/STYLES FROM THE FOOTER
	add_action( 'wp_footer', 'spk_remove_scripts_styles_footer');
	function spk_remove_scripts_styles_footer() {
		wp_dequeue_style( 'soliloquy-style-css' );
		wp_deregister_style( 'soliloquy-style-css' );
	}

	add_action( 'wp_footer', 'spk_de_reg_sol_sript', 200 );
	function spk_de_reg_sol_sript() {
	    wp_deregister_script( 'soliloquy-script' );
		wp_register_script( 'soliloquy-script', plugins_url().'/soliloquy/assets/js/min/soliloquy-min.js', NULL, NULL, TRUE );
		wp_enqueue_script( 'soliloquy-script' );
	}

	// DEREGISTER CHILD THEME'S STYLE.CSS - it doesn't contain any styling and is classified by google as a render-blocking css
	add_action( 'wp_enqueue_scripts', 'spk_deregsiter_themes_style_css' );
	function spk_deregsiter_themes_style_css() {
		$child_theme_style_id = str_replace( ' ', '-', strtolower( CHILD_THEME_NAME ) );
	    wp_dequeue_style( $child_theme_style_id );
	    wp_deregister_style( $child_theme_style_id );
	}

	// DOWNLOAD GOOGLE JAVASCRIPT FILES AFTER VALIDATING THE FILE'S AGE (DAILY FILE DOWNLOAD)
	spk_download_external_files();

	// ALLOW PHP TO EXECUTE IN WIDGETS
	//add_filter( 'widget_text', 'php_execute', 100 );
	function php_execute( $html ) {
		if( strpos( $html, "<"."?php" ) !== false ) {
			ob_start();
			eval( "?".">".$html );
			$html = ob_get_contents();
			ob_end_clean();
		}
		return $html;
	}

	// Enable the use of shortcodes in text widgets.
	add_filter( 'widget_text', 'do_shortcode' );

	// DISPLAY JAVASCRIPT HANDLERS (REGISTERED NAMES)
	/*add_action( 'wp_print_scripts', 'wsds_detect_enqueued_scripts' );
	function wsds_detect_enqueued_scripts() {
		global $wp_scripts;
		foreach( $wp_scripts->queue as $handle ) :
			echo $handle . ' | ';
		endforeach;
	}*/

}

/* --------------------------------------------------------------------------------------------
 * | REPLACE THE IMAGE'S URL TO BE SPECIFIC
 * | INSTEAD OF images/name.jpg, it should be changed to FULL-URL/themes/images/name.jpg
 * ----------------------------------------------------------------------------------------- */
function spk_redirect_css_image_urls( $value ) {

	// images
	$value = str_replace( 'images/', get_stylesheet_directory_uri().'/images/', $value );
	$value = str_replace( "'images/", "'".get_stylesheet_directory_uri()."/images/", $value );
	$value = str_replace( '"images/', '"'.get_stylesheet_directory_uri().'/images/', $value );

	// fonts
	$value = str_replace( 'fonts/', get_stylesheet_directory_uri().'/fonts/', $value );
	$value = str_replace( "'fonts/", "'".get_stylesheet_directory_uri()."/fonts/", $value );
	$value = str_replace( '"fonts/', '"'.get_stylesheet_directory_uri().'/fonts/', $value );

	return $value;

}

/* --------------------------------------------------------------------------------------------
 * | REPLACE THE SOLILOQUY'S IMAGE URLs TO BE SPECIFIC
 * | INSTEAD OF images/name.jpg, it should be changed to PLUGIN-FULL-URL/soliloquy/assets/css/images/name.jpg
 * ----------------------------------------------------------------------------------------- */
function spk_redirect_soliloquy_image_urls( $value ) {

	$value = str_replace( 'images/', plugins_url().'/soliloquy/assets/css/images/', $value );
	$value = str_replace( "'images/", "'".plugins_url()."/soliloquy/assets/css/images/", $value );
	$value = str_replace( '"images/', '"'.plugins_url().'/soliloquy/assets/css/images/', $value );
	return $value;

}

/* --------------------------------------------------------------------------------------------
 * | FUNCTION TO DOWNLOAD EXTERNAL FILES
 * ----------------------------------------------------------------------------------------- */
function spk_download_external_files() {

	$spk_externals = array(
		'amazon_marketplace' 	=> 'http://z-na.amazon-adsystem.com/widgets/onejs?MarketPlace=US&adInstanceId=9f2cb097-ecee-468c-b007-0b4fcd5a22c9',
		'adsbygoogle' 			=> 'http://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js',
		'google_analytics' 		=> 'https://www.google-analytics.com/analytics.js',
		'addthis'				=> 'http://s7.addthis.com/js/300/addthis_widget.js#pubid=ra-5580891d2117b457'
		); //		'osd' 					=> 'https://pagead2.googlesyndication.com/pagead/osd.js',

	// set directory
	$spk_file_dir = dirname(__FILE__).'/js_external/';

	// loop through each entry
	foreach( $spk_externals as $key => $value ) {
		
		// set filename
		$filename = $spk_file_dir.$key.'.js';
		
		// change file if the age is more than an hour (insures the local file is updated)
		if( file_exists( $filename ) ) {
			// get file's age
	    	$spk_filename_age = time() - strtotime( filectime( $filename ) );
		}
		
    	if( !file_exists( $filename ) || $spk_filename_age > ( time() - strtotime( '-1 hour' ) ) ) {
    		//echo $filename.' | '.$spk_filename_age.' > '.( time() - strtotime( '-1 hour' ) ).'<br />';
    		file_put_contents( $filename, file_get_contents( $value ) );
    	}/* else {
    		echo ' ----- '.$filename.' | '.$spk_filename_age.' < '.( time() - strtotime( '-1 hour' ) ).'<br />';
    	}*/

	}
}

/* --------------------------------------------------------------------------------------------
 * | ENQUEUE SCRIPTS
 * ----------------------------------------------------------------------------------------- */
add_action( 'wp_enqueue_scripts', 'spk_masterplug_js_scripts' );
function spk_masterplug_js_scripts() {

	$scripts = array( 'jquery-ui-core', 'jquery-effects-core', 'jquery-effects-slide', 'jquery-effects-fade', 'jquery-ui-accordion' );

	foreach ( $scripts as $value ) {
		if( !wp_script_is( $value, 'enqueued' ) ) {
        	wp_enqueue_script( $value );
    	}
	}

}

/* ----------------------------------------------------------------------------
 * INCLUDE OTHER PLUGIN FILES
 * ------------------------------------------------------------------------- */
// quotes
//require_once( 'codec/spk_quotes.php' );
// youtube embed, social toolbar and dynamic div transfer
require_once( 'codec/spk_master_plug_v1.php' );
// get permalink
require_once( 'codec/spk_get_permalink.php' );
// sessions
//require_once( 'codec/spk_sessions.php' );
// shortcode ultimate remnant
require_once( 'codec/spk_sc_get_post_content.php' );
// hardcoded shortcodes
require_once( 'more_shortcodes.php' );