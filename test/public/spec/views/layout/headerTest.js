define( function ( require ) {
	'use strict';

	var header = require( 'views/layout/Header' );

	describe( 'header Layout', function () {

		it('should be an instance of header Layout', function () {
			var header = new header();
			header.should.be.an.instanceof( header );
		} );

		it('should have more test written', function () {
			( false ).should.be.ok;
		} );
	} );

} );