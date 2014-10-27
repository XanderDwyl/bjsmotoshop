define( function ( require ) {
	'use strict';

	var Marionette = require( 'marionette' );
	var _          = require( 'underscore' );
	var $          = require( 'jquery' );

	var template   = require( 'text!templates/item/HeaderItemView.html' );

	/* Return a ItemView class definition */
	return Marionette.ItemView.extend({

		initialize: function() {},

		'template'  : _.template( template ),

		/* ui selector cache */
		ui: {},

		/* Ui events hash */
		events: {},

		/* on render callback */
		onRender: function() {}
	});

});
