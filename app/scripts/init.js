require.config( {

	'baseUrl' : '/scripts',

	'paths' : {

		// Libraries and utility scripts
		'jquery'     : '../bower_components/jquery/jquery',
		'bootstrap'  : '../bower_components/sass-bootstrap/dist/js/bootstrap',
		'backbone'   : '../bower_components/backbone-amd/backbone',
		'underscore' : '../bower_components/underscore-amd/underscore',
		'modernizr'  : '../bower_components/modernizr/modernizr',

		/* alias all marionette libs */
		'marionette'          : '../bower_components/backbone.marionette/lib/core/amd/backbone.marionette',
		'backbone.wreqr'      : '../bower_components/backbone.wreqr/lib/amd/backbone.wreqr',
		'backbone.babysitter' : '../bower_components/backbone.babysitter/lib/amd/backbone.babysitter',

		/* alias the bootstrap js lib */
		'text'          : '../bower_components/requirejs-text/text',
		'async'         : '../bower_components/async/lib/async',
		'jquery-cookie' : '../bower_components/jquery.cookie/jquery.cookie',
		'base64'        : '../bower_components/base64', // *! utility to encode/decode
		'shim'          : '../bower_components/shim', // *! utility for object prototypes
		'nivo-slider'   : '../bower_components/nivo-slider/jquery.nivo.slider',

		// root folders
		'models'      : 'models',
		'collections' : 'collections',
		'views'       : 'views',
        'templates' : '../templates',

		// Base application level classes
		'App'          : 'App',
		'Communicator' : 'Communicator',
		'Router'       : 'routers/AppRouter',
		'Controller'   : 'controllers/AppController'

	},

	'shim' : {
		'backbone' : {
			'deps' : [
				'underscore',
				'jquery'
			],
			'exports' : 'Backbone'
		},
		'bootstrap' : {
			'exports' : 'bootstrap',
			'deps'    : ['jquery']
		}
	},

	'deps' : [ 'marionette', 'bootstrap', 'main' ]

} );