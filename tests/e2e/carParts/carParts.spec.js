describe('Car Parts', function() {
  it('should go to login page', function() {
    browser.get(browser.baseUrl +'carParts');
    expect(element(by.css('.list-inset')).isPresent()).toBe(true);
    expect(element(by.css('.budget-orange-button.button.button-block.button-assertive')).isPresent()).toBe(true);
  });

  it('should have 9 checkboxes', function() {
  	var options = element.all(by.css('.checkbox-item.has-header'));
    expect(options.count()).toBe(9);
  });

   it('should go have button', function() {
    expect(element(by.css('.budget-orange-button.button.button-block.button-assertive')).isPresent()).toBe(true);
  });
});
