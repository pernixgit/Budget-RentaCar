describe('Scanner error', function() {
  it('should go to scanner page', function() {
    browser.get(browser.baseUrl +'scanner-error');
     browser.sleep(500); 
    element(by.css(".button.button-positive")).click();
    expect(browser.getCurrentUrl()).toEqual("http://localhost:8100/#/scanner");
  });
});
