define( function ( require ) {
	'use strict';

	var Backbone   = require( 'backbone' );
	var Marionette = require( 'marionette' );

	return Backbone.Marionette.AppRouter.extend( {

		'appRoutes' : {
			'sign-in' : 'showLogIn',
			'sign-up' : 'showSignUp',
			'*actions' : 'showDefault'
			// sub application bootstraps
			//'users*actions' : 'bootstrapUserApp',
		}
	} );

} );
