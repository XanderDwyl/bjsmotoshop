define( function ( require ) {
	'use strict';

	var Marionette = require( 'marionette' );
	var Backbone   = require( 'backbone' );

	// Project scripts
	var Router     = require( 'routers/UsersRouter' );
	var Controller = require( 'controllers/UsersController' );

	// App instantiation
	var App = new Marionette.Application();

	// ## Initializers

	// The regions for the application
	App.on( 'initialize:before', function ( options ) {
		if ( options.regions ) {
			App.addRegions( options.regions );
		}
	} );

	App.addInitializer( function ( options ) {

		if ( options.session ) {
			App.session = options.session;
		}
		if ( options.Vent ) {
			App.Vent = options.Vent;
		}

		// Controller init
		App.Controller = new Controller( {
			'token'     : options.token,
			'session'   : App.session,
			'App'       : App,
			'container' : App.content
		} );

		// Router init
		App.Router = new Router( { 'controller' : App.Controller } );

	} );

	// Restart history for new router
	App.on( 'initialize:after', function () {
		if ( Backbone.History.started === true ) {
			Backbone.history.stop();
		}

		Backbone.history.start();
	} );

	return App;
} );