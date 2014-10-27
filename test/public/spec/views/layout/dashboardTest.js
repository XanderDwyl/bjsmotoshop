define( function ( require ) {
	'use strict';

	var dashboard = require( 'views/layout/Dashboard' );

	describe( 'dashboard Layout', function () {

		it('should be an instance of dashboard Layout', function () {
			var dashboard = new dashboard();
			dashboard.should.be.an.instanceof( dashboard );
		} );

		it('should have more test written', function () {
			( false ).should.be.ok;
		} );
	} );

} );