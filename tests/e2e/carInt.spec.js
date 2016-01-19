describe('carInterior', function() {
  it('should go to trunk page', function() {
    browser.driver.get('http://localhost:8100/#/carInterior');
    browser.driver.findElement(by.css(".arrow")).click();
    expect(browser.driver.getCurrentUrl()).toEqual("http://localhost:8100/#/trunk");
  });
});

