describe('carInterior', function() {
  it('should go to trunk page', function() {
    browser.get(browser.baseUrl +'carInterior');
    element(by.css(".arrow")).click();
    expect(browser.getCurrentUrl()).toEqual("http://localhost:8100/#/trunk");
  });
});
