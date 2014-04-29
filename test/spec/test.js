/* global describe, it */

(function () {
    'use strict';

    describe('Constructors', function () {
        describe('Product Constructor testing', function () {
        	var testProduct = new Product("../img/kayak0.png", "slingshotter", "purple", 200 );
            
            it('testProduct should be an instance of Product', function () {
            	expect(testProduct).to.be.an.instanceof(Product);

            });

            it("instance properties should reflect what was passed in", function() {

	        	expect(testProduct.pic).to.equal("../img/kayak0.png");
				expect(testProduct.name).to.equal("slingshotter");
				expect(testProduct.color).to.equal("purple");
				expect(testProduct.cost).to.equal(200);
        });

    })

	   //could add another that says that if you create a new instance w/o properties that they are undefined     
      
    });

		// describe('Constructors', function () {
		//         describe('maybe a bit more context here', function () {
})();
