describe('Car Parts', function() {
  it('should go to extraParts page', function() {
    browser.get(browser.baseUrl +'carParts');
    element(by.css(".arrow")).click();
    expect(browser.getCurrentUrl()).toEqual("http://localhost:8100/#/extraParts");
  });
});
