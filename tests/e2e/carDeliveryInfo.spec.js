describe('Car Delivery Information page', function() {

  it('should go to carDeliveryInfo page', function() {
    browser.get('http://localhost:8100/#/carDeliveryInfo');
    expect(browser.getCurrentUrl()).toEqual("http://localhost:8100/#/carDeliveryInfo")
  });

  it('should check ng-options', function() {
    element(by.css('.select-places')).click();
    var allOptions = element.all(by.options('availableOptions'));
    expect(allOptions.count()).toEqual(16);
    var firstOption = allOptions.first();
    expect(firstOption.getText()).toEqual('Seleccione el Lugar de Entrega');
  });

  it('should go to carView page', function() {
    element(by.css(".button-primary")).click();
    expect(browser.getCurrentUrl()).toEqual("http://localhost:8100/#/carview")
  });
});
