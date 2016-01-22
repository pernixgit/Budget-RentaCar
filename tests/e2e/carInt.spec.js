describe('Budget Rent a Car', function() {
  it('should go to trunk page', function() {
    browser.get(''+'/#/carInterior');
    element(by.css(".arrow")).click();
    expect(browser.getCurrentUrl()).toEqual("http://localhost:8100/#/trunk");
  });
});

