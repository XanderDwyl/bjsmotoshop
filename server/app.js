'use strict';

var express  = require('express');
var http     = require('http');
var path     = require('path');
var async    = require('async');
var mongoose = require('mongoose');

// include schema models and routes
require( './schema/user' );

var apiRoutes = require( './routes' );
var users     = require( './routes/users' );

var db  = mongoose.connection;
var app = express();

// start mongoose
mongoose.connect('mongodb://localhost/bjsManagement');

db.on( 'error', console.error.bind( console, 'connection error:' ) );

db.once( 'open', function callback() {
	module.exports = app;

    app.configure(function() {
        app.set( 'port', 4000 );
		app.set( 'view engine', 'html' );
        app.set( 'views', __dirname + '../app/scripts/views' );

        //app.use( express.urlencoded() );
        app.use( express.bodyParser() );
        app.use( express.methodOverride() );
		app.use( app.router );
    });

    // simple log
    app.use(function(req, res, next) {
        console.log( '%s %s', req.method, req.url );
        next();
    });

    // mount static
    app.use( express.static( path.join( __dirname, '../app') ) );
    app.use( express.static( path.join( __dirname, '../.tmp') ) );

    // route index.html
    app.get( '/', function( req, res ) {
		res.sendfile( path.join( __dirname, '../app/index.html' ) );
    });

    app.get( '/api', apiRoutes.index );
    app.get( '/api/users-login', users.getProfile );
    app.get( '/api/users-profile', users.getProfile );
    app.get( '/api/users-profile/:id', users.getProfile );
    app.post( '/api/users-profile', users.addProfile );

	 // start server
    http.createServer(app).listen(app.get('port'), function() {
        console.log( 'Express App started on port ' + app.get( 'port' ) );
    });
});

