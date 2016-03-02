describe('Car Information page', function() {

  it('should go to carInfo page', function() {
    browser.get(browser.baseUrl + 'carInfo');
    expect(browser.getCurrentUrl()).toEqual("http://localhost:8100/#/carInfo");
  });

});
