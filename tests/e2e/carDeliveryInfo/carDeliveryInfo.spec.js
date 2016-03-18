describe('Car Delivery Information page', function() {

  it('should go to carDeliveryInfo page', function() {
    browser.get(browser.baseUrl + 'carDeliveryInfo');
<<<<<<< HEAD
    expect(browser.getCurrentUrl()).toEqual("http://localhost:8100/#/carDeliveryInfo");
=======
    expect(browser.getCurrentUrl()).toEqual(browser.baseUrl + "carDeliveryInfo");
>>>>>>> b6ddcd36f750ac4ce459467b6fdba158f093611f
  });

  it('should have button', function() {
    expect(element(by.css('.budget-orange-button.button.button-block.button-assertive')).isPresent()).toBe(true);
  });
});
