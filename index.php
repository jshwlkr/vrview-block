<?php
/**
 * Plugin Name:VRView Block
 * Plugin URI:
 * Description: VRView Block plugin
 * Version: 0.1.0
 * Author: jshwlkr
 *
 * @package vrview-block
 */

defined( 'ABSPATH' ) || exit;

add_action( 'enqueue_block_editor_assets', 'vrview_block_enqueue_block_editor_assets' );
function vrview_block_enqueue_block_editor_assets() {

	wp_enqueue_script(
		'google_vrview',
		plugins_url( 'build/vrview.min.js', __FILE__ )
	);

	wp_enqueue_script(
		'google_vrview_init',
		plugins_url( 'build/init.js', __FILE__ )
	);

	wp_enqueue_script(
		'vrview_block',
		plugins_url( 'block.js', __FILE__ ),
		array( 'wp-blocks', 'wp-i18n', 'wp-element' ),
		filemtime( plugin_dir_path( __FILE__ ) . 'block.js' )
	);
}

add_action( 'enqueue_block_assets', 'vrview_block_enqueue_block_assets' );
function vrview_block_enqueue_block_assets() {

	wp_enqueue_script(
		'google_vrview',
		plugins_url( 'build/vrview.min.js', __FILE__ )

	);

	wp_enqueue_script(
		'google_vrview_init',
		plugins_url( 'build/init.js', __FILE__ ),
		array('google_vrview')
	);

}