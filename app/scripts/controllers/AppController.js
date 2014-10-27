define(function(require) {
	'use strict';

	var $          = require('jquery');
	var _          = require('underscore');
	var Backbone   = require('backbone');
	var Bootstrap  = require('bootstrap');
	var Marionette = require('marionette');
	var async      = require('async');

	var applications = {
		'User' : require( 'Users' )
	};
	var views = {
		'SignIn' : require('views/forms/SignIn'),
		'SignUp' : require('views/forms/SignUp')
	};

	var layouts = {
		'Header'    : require('views/layouts/Header'),
		'Dashboard' : require('views/layouts/Dashboard'),
		'Footer'    : require('views/layouts/Footer'),
	};

	return Backbone.Marionette.Controller.extend({

		initialize: function(options) {
			_.bindAll(this);
			_.extend(this, options);

			return this;
		},

		'showLogIn' : function() {
			this.signIn = new views.SignIn();
			this.getHeaderLayout();
			this.App.content.show( this.signIn );
		},

		'showSignUp' : function() {
			this.signUp = new views.SignUp();
			this.getHeaderLayout();
			this.App.content.show( this.signUp );
		},

		'showDefault' : function() {
			this.App.Router.navigate( '', true );
			this.getHeaderLayout();
			this.getDashboardLayout();
			this.getFooterLayout();
		},

		'getHeaderLayout' : function() {
			this.layout = new layouts.Header();
			this.App.header.show( this.layout );
		},

		'getFooterLayout' : function() {
			this.layout = new layouts.Footer();
			this.App.footer.show( this.layout );
		},

		'getDashboardLayout': function() {
			this.layout = new layouts.Dashboard();
			this.App.content.show( this.layout );
		},

		// ## sub application bootstraps
		'bootstrapUserApp' : function ( actions ) {
			this.bootstrapApp( 'users', applications.User );
		},

		// app helper function
		'bootstrapApp': function( appName, app ) {
			var self = this;

			if (!self[appName]) {
				self[appName] = app;
				self[appName].start({
					'regions': {
						'content': self.App.content
					},
					'Vent': self.Vent
				});
			}
		},

		// ## Region management methods
		'_setContent': function(View, options) {
			var view;
			if (typeof View === 'function') {
				options = options || {};
				view = new View(options);
			} else {
				view = View;
			}
			this.regions.content.show(view);

			return view;
		},
	});

});