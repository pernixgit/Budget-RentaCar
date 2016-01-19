describe('Budget Rent a Car', function() {
  it('should go to carInterior page', function() {
    browser.driver.get('http://localhost:8100/#/carExterior');
    browser.driver.findElement(by.css(".arrow")).click();
    expect(browser.driver.getCurrentUrl()).toEqual("http://localhost:8100/#/carInterior");
  });
});

