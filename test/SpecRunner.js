require.config({
    baseUrl: '../../app/scripts',
    urlArgs: 'cb=' + Math.random(),

    deps: ['backbone.marionette'],

    paths: {
	spec: '../../test/public/spec', // lives in the test directory

	jquery     : '../../app/bower_components/jquery/jquery',
	backbone   : '../../app/bower_components/backbone-amd/backbone',
	underscore : '../../app/bower_components/underscore-amd/underscore',

	/* backbone plugins */
	'backbone.syphon' : '../../app/bower_components/backbone.syphon/lib/amd/backbone.syphon',
	'backbone.iobind' : '../../app/bower_components/backbone.iobind/dist/backbone.iobind',

	/* alias all marionette libs */
	'backbone.marionette' : '../../app/bower_components/backbone.marionette/lib/core/amd/backbone.marionette',
	'backbone.wreqr'      : '../../app/bower_components/backbone.wreqr/lib/amd/backbone.wreqr',
	'backbone.babysitter' : '../../app/bower_components/backbone.babysitter/lib/amd/backbone.babysitter',

	/* alias the bootstrap js lib */
	'bootstrap'        : 'vendor/bootstrap',
	'bootstrap-button' : 'vendor/bootstrap-button',

	/* Alias text.js for template loading and shortcut the templates dir to tmpl */
	text     : '../../app/bower_components/requirejs-text/text',
	template : '../templates'
    },
});

/* require test suite */
require([
    'jquery',
    'spec/testSuite'
],
function( $, testSuite ) {
    'use strict';

    /* on dom ready require all specs and run */
    $( function () {
		require( testSuite.specs, function () {
		    if (window.mochaPhantomJS) {
				window.mochaPhantomJS.run();
		    } else {
				window.mocha.run();
		    }
		});
    });
});
