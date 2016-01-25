describe('Budget Rent a Car', function() {
	it('should go to scanner page', function() {
		browser.get(''+'/#/scanner-error');
		element(by.css(".button.button-positive")).click();
		expect(browser.getCurrentUrl()).toEqual("http://localhost:8100/#/scanner");
	});
});