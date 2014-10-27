'use strict';

var mongoose = require( 'mongoose' );
var User     = mongoose.model( 'User' );


exports.getProfile = function( req, res ) {
	var idProfile = {};
	if ( req.params.id ) {
		idProfile._id = req.params.id;
	}
	User.find( idProfile, function( err, data ) {
		if ( err ) {
			return res.end( JSON.stringify( err ) );
		}
		return res.end( JSON.stringify( data ) );
	} );
};

exports.addProfile = function( req, res ) {
	var user = new User( req.body );
	user.save( function( err ) {
		if ( err ) {
			return res.end( JSON.stringify( err ) );
		}
		return res.end( JSON.stringify( user ) );
	} );
};