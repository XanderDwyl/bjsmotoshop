define( function ( require ) {
	'use strict';

	var AppRouter = require( 'routers/AppRouter' );

	describe( 'AppRouter Router', function () {

		it('should be an instance of AppRouter Router', function () {
			var appRouter = new AppRouter();
			appRouter.should.be.an.instanceof( AppRouter );
		} );

		it('should have more test written', function () {
			( false ).should.be.ok;
		} );
	} );

} );