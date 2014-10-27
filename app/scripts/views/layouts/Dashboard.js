define( function ( require ) {
	'use strict';

	var Marionette = require( 'marionette' );
	var _          = require( 'underscore' );
	var $          = require( 'jquery' );

	require( 'nivo-slider' );

	var template   = require( 'text!templates/layouts/Dashboard.html' );

	/* Return a Layout class definition */
	return Marionette.ItemView.extend({

		'onRender': function() {
			var self   = this;
			var slider = self.$( '#slider' );

			$( slider ).nivoSlider();
		},

		'template'  : _.template( template ),

		'tagName'   : 'div',
		'className' : 'dashboard-layout',

		'regions'   : {},

		'ui': {},

		'events': {}
	});

});
