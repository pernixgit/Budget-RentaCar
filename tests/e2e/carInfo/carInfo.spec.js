describe('Car Info', function(){
  it('should go to carInfo page', function() {
    browser.get(browser.baseUrl + 'carInfo');
    element(by.css(".arrow")).click();
    expect(browser.getCurrentUrl()).toContain("/#/carInfo");
  });
});
