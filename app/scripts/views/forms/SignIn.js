define( function ( require ) {
	'use strict';

	var Marionette = require( 'marionette' );
	var _          = require( 'underscore' );
	var $          = require( 'jquery' );

	var template   = require( 'text!templates/forms/SignInItemView.html' );

	/* Return a ItemView class definition */
	return Marionette.ItemView.extend({

		initialize: function() {},

		'template'  : _.template( template ),
		'tagName'   : 'div',
		'className' : 'page-wrapper-1150',

		/* ui selector cache */
		ui: {},

		/* Ui events hash */
		events: {},

		/* on render callback */
		onRender: function() {}
	});

});
