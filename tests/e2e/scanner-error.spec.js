describe('Budget Rent a Car', function() {
	it('should go to scanner page', function() {
		browser.get(browser.baseUrl +'scanner-error');
		 browser.sleep(3000); 
		element(by.css(".button.button-positive")).click();
		expect(browser.getCurrentUrl()).toEqual("http://localhost:8100/#/scanner");
	});
});

