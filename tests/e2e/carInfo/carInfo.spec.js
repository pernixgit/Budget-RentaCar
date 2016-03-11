describe('Car Information page', function() {

  it('should go to carInfo page', function() {
    browser.get(browser.baseUrl + 'carInfo');
    expect(browser.getCurrentUrl()).toEqual(browser.baseUrl + 'carInfo');
  });

});
