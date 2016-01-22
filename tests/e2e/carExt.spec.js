describe('Budget Rent a Car', function() {
  it('should go to carInterior page', function() {
    browser.get(''+'/#/carExterior');
    element(by.css(".arrow")).click();
    expect(browser.getCurrentUrl()).toEqual("http://localhost:8100/#/carInterior");
  });
});

