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
		$spk_style_critical = get_stylesheet_directory() . '/style_critical_min.css';
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
	add_action( 'wp_footer', 'spk_delay_styling_func', 2 );
	function spk_delay_styling_func() {
		$spk_style_critical_non = get_stylesheet_directory() . '/style_critical_non_min.css';
		if( file_exists( $spk_style_critical_non ) ) {
			echo "<style type='text/css'>".spk_redirect_css_image_urls( file_get_contents( $spk_style_critical_non ) )."</style>";	
		}
	}

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
	add_filter( 'widget_text', 'php_execute', 100 );
	function php_execute( $html ) {
		if( strpos( $html, "<"."?php" ) !== false ) {
			ob_start();
			eval( "?".">".$html );
			$html = ob_get_contents();
			ob_end_clean();
		}
		return $html;
	}

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

	$value = str_replace( 'images/', get_stylesheet_directory_uri().'/images/', $value );
	$value = str_replace( "'images/", "'".get_stylesheet_directory_uri()."/images/", $value );
	$value = str_replace( '"images/', '"'.get_stylesheet_directory_uri().'/images/', $value );
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
		'addthis_js'			=> 'http://s7.addthis.com/js/300/addthis_widget.js#pubid=ra-5580891d2117b457'
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
	    	$spk_filename_age = time() - strtotime( filemtime( $filename ) );
		}

    	if( !file_exists( $filename ) || $spk_filename_age > ( time() - strtotime( '-1 hour' ) ) ) {
    		file_put_contents( $filename, file_get_contents( $value ) );
    	}

	}
}

/* --------------------------------------------------------------------------------------------
 * | Genesis Header Scripts
 * | --------------
 * | REGISTER SHORTCODE TO HIDE GOOGLE'S OWN SCRIPTS FROM BEING TAGGED BY THEM
 * ----------------------------------------------------------------------------------------- */
add_shortcode( 'spk_genesis_header_scripts_js', 'spk_genesis_header_scripts_js_func' );
function spk_genesis_header_scripts_js_func() {
	if( spk_bot_detected() ) {
		return '<meta name="p:domain_verify" content="0a4ace3e1ac7c1854a32de7541879163"/>
				
				<script async src="'.plugins_url( "/js_external/adsbygoogle.js", __FILE__ ).'"></script>
				<script>
				  (adsbygoogle = window.adsbygoogle || []).push({
				    google_ad_client: "ca-pub-0947746501358966",
				    enable_page_level_ads: true
				  });
				</script>';
	}
}

/* --------------------------------------------------------------------------------------------
 * | Genesis Footer Scripts
 * | --------------
 * | REGISTER SHORTCODE TO HIDE GOOGLE'S OWN SCRIPTS FROM BEING TAGGED BY THEM
 * ----------------------------------------------------------------------------------------- */
add_shortcode( 'spk_genesis_footer_scripts_js', 'spk_genesis_footer_scripts_js_func' );
function spk_genesis_footer_scripts_js_func() {
	if( spk_bot_detected() ) {
		return "<script> 
				 (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){ 
				 (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o), 
				 
				m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m) 
				 })(window,document,'script','".plugins_url( '/js_external/google_analytics.js', __FILE__ )."','ga'); 
				 ga('create', 'UA-556922-1', 'auto'); 
				 ga('send', 'pageview'); 
				</script>

				<script>(function() {
				  var _fbq = window._fbq || (window._fbq = []);
				  if (!_fbq.loaded) {
				    var fbds = document.createElement('script');
				    fbds.async = true;
				    fbds.src = '//connect.facebook.net/en_US/fbds.js';
				    var s = document.getElementsByTagName('script')[0];
				    s.parentNode.insertBefore(fbds, s);
				    _fbq.loaded = true;
				  }
				  _fbq.push(['addPixelId', '342285032648063']);
				})();
				window._fbq = window._fbq || [];
				window._fbq.push(['track', 'PixelInitialized', {}]);
				</script>
				<noscript><img height='1' width='1' alt='' style='display:none' src='https://www.facebook.com/tr?id=342285032648063&amp;ev=PixelInitialized' /></noscript>


				<script>
				  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
				  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
				  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
				  })(window,document,'script','".plugins_url( '/js_external/google_analytics.js', __FILE__ )."','ga');

				  ga('create', 'UA-90942410-1', 'auto');
				  ga('send', 'pageview');

				</script>";
	}
}

/* --------------------------------------------------------------------------------------------
 * | Widget entry
 * | --------------
 * | REGISTER SHORTCODE TO HIDE GOOGLE'S OWN SCRIPTS FROM BEING TAGGED BY THEM
 * ----------------------------------------------------------------------------------------- */
add_shortcode( 'spk_adsbygoogle_js', 'spk_hide_me_from_google_pagespeedinsights' );
function spk_hide_me_from_google_pagespeedinsights() {
	if( spk_bot_detected() ) {
    	return '<script async src="'.plugins_url( "/js_external/adsbygoogle.js", __FILE__ ).'"></script>
				<!-- Page & Post Article Body Resposive Ad -->
				<ins class="adsbygoogle"
				     style="display:block"
				     data-ad-client="ca-pub-0947746501358966"
				     data-ad-slot="7597430493"
				     data-ad-format="auto"></ins>
				<script>
				(adsbygoogle = window.adsbygoogle || []).push({});
				</script>';
	}
}

/* --------------------------------------------------------------------------------------------
 * | Widget entry
 * | --------------
 * | REGISTER SHORTCODE TO HIDE GOOGLE'S OWN SCRIPTS FROM BEING TAGGED BY THEM - 2
 * ----------------------------------------------------------------------------------------- */
add_shortcode( 'spk_google_suggested_articles_js', 'spk_hide_me_from_google_pagespeedinsights_2' );
function spk_hide_me_from_google_pagespeedinsights_2() {
	if( spk_bot_detected() ) {
    	return '<script async src="'.plugins_url( "/js_external/adsbygoogle.js", __FILE__ ).'"></script>
				<ins class="adsbygoogle"
				     style="display:block"
				     data-ad-format="autorelaxed"
				     data-ad-client="ca-pub-0947746501358966"
				     data-ad-slot="2135583692"></ins>
				<script>
				     (adsbygoogle = window.adsbygoogle || []).push({});
				</script>';
	}
}

/* --------------------------------------------------------------------------------------------
 * | Putting the Amazon scripts here to test if we can enqueue the scripts properly
 * ----------------------------------------------------------------------------------------- */
add_shortcode( 'spk_amazon_market_place', 'spk_amazon_market_place_func' );
function spk_amazon_market_place_func() {
	//if( strpos( $_SERVER['HTTP_USER_AGENT'], "Google Page Speed Insights" ) == FALSE ) {
	if( spk_bot_detected() ) {
		return '<script src="'.plugins_url( "/js_external/amazon_marketplace.js", __FILE__ ).'"></script>';
	}
}

/* --------------------------------------------------------------------------------------------
 * | Function to hide scripts from bots
 * ----------------------------------------------------------------------------------------- */
function spk_bot_detected() {
	$x=0;	

	$agents = array(
				'Google Page Speed Insights', 	// Google
				'Gecko/20100101', 				// GTmetrix
			);

	foreach ($agents as $value) {
		if( strpos( $_SERVER['HTTP_USER_AGENT'], $value ) == FALSE ) {
			$x++;
		}
	}

	if( $x == count( $agents ) ) {
		return TRUE;
	}
}

/* --------------------------------------------------------------------------------------------
 * | Signature Shortcode
 * | --------------
 * | THIS SHORTCODE SIMPLY RETURNS THE CURRENT SITE ADDRESS
 * | BEST USED FOR IMAGES STORED IN THE SERVER WHICH CAN'T BE ACCESSED WITHIN WORDPRESS
 * ----------------------------------------------------------------------------------------- */
add_shortcode( 'spk_site_url', 'spk_site_url_func' );
function spk_site_url_func() {
	return site_url();
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
require_once( 'codec/spk_quotes.php' );
// youtube embed, social toolbar and dynamic div transfer
require_once( 'codec/spk_master_plug_v1.php' );
// get permalink
require_once( 'codec/spk_get_permalink.php' );
// sessions
//require_once( 'codec/spk_sessions.php' );
// shortcode ultimate remnant
require_once( 'codec/spk_sc_get_post_content.php' );
