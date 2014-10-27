define( function ( require ) {
	'use strict';

	var Marionette   = require( 'marionette' );
	var Backbone     = require( 'backbone' );
	var $            = require( 'jquery' );
	var Communicator = require( 'communicator' );
	var Router       = require( 'routers/AppRouter' );
	var Controller   = require( 'controllers/AppController' );

	var App          = new Marionette.Application();

	var initializeClientRoute = function( app ) {
		$( document ).on( 'click', 'a[href^="/"]', function( e ) {
			var href = $( e.currentTarget ).attr( 'href' );

			if ( !e.altKey && !e.ctrlKey && !e.metaKey && !e.shiftKey ) {
				e.preventDefault( );
				var url = href.replace( /^\//, '' ).replace( '#\/', '' );
				app.Router.navigate( url, {
					trigger: true
				} );
				return false;
			}
		} );
	};

	// The regions for the application
	App.addRegions( {
		'modal'   : '#shared-modal',
		'header'  : '#header',
		'footer'  : '#footer',
		'content' : '#main-container'
	} );

	/* Add initializers here */
	App.addInitializer( function () {
		// Controller init
		App.Controller = new Controller( {
			'App'     : App,
			'regions' : {
				'modal'   : App.modal,
				'header'  : App.header,
				'footer'  : App.footer,
				'content' : App.content
			},
			'Communicator' : Communicator
		} );

		// Router init
		App.Router = new Router( { 'controller' : App.Controller } );

		initializeClientRoute( App );

	});

	// start history
	App.on( 'initialize:after', function () {
		Backbone.history.start( { 'pushState' : false } );
	} );

	return App;
});