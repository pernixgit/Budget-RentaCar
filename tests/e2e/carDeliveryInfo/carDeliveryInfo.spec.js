describe('Car Delivery Information page', function() {

  it('should go to carDeliveryInfo page', function() {
    browser.get(browser.baseUrl + 'carDeliveryInfo');
    expect(browser.getCurrentUrl()).toEqual(browser.baseUrl + "carDeliveryInfo");
  });

  it('should have button', function() {
    expect(element(by.css('.budget-orange-button.button.button-block.button-assertive')).isPresent()).toBe(true);
  });
});
