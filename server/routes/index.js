'use strict';
var config = require( '../../package');

exports.index = function( req, res ) {

    var index = {};
    index.name    = config.name;
    index.version = config.version;

    res.end( JSON.stringify( index ) );

};

exports.accessControl = function( req, res, next ) {

    res.setHeader( 'Access-Control-Allow-Origin', '*' );
    res.setHeader( 'Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS' );
    res.setHeader( 'Access-Control-Allow-Headers', 'Content-Type' );

    if ( req.method === 'OPTIONS' ) {
        return res.end( );
    }

    res.setHeader( 'Content-Type', 'application/json' );

    if ( req.url.match( /(\/|user-login|reset-password|reports|public)/ ) ) {
		return next( );
    }
};