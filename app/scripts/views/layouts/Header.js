define( function ( require ) {
	'use strict';

	var Marionette = require( 'marionette' );
	var _          = require( 'underscore' );
	var $          = require( 'jquery' );

	var template   = require( 'text!templates/layouts/Header.html' );

	/* Return a Layout class definition */
	return Marionette.ItemView.extend({

		initialize: function() {},

		'template' : _.template(template),

		'tagName'   : 'div',
		'className' : 'header-layout',

		'regions' : {}
	});

});
