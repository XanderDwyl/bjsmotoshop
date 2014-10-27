define( function ( require ) {
	'use strict';

	var HeaderItemView = require( 'views/item/HeaderItemView' );

	describe( 'HeaderItemView Itemview', function () {

		it('should be an instance of HeaderItemView Itemview', function () {
			var headerItemView = new HeaderItemView();
			headerItemView.should.be.an.instanceof( HeaderItemView );
		} );

		it('should have more test written', function () {
			( false ).should.be.ok;
		} );
	} );

} );