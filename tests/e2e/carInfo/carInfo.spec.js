describe('Car Info', function(){
  it('should go to carInfo page', function() {
    browser.get(browser.baseUrl + 'carInfo');
    lement(by.css(".arrow")).click();
    expect(browser.getCurrentUrl()).toEqual("http://localhost:8100/#/carInfo");
  });
});
