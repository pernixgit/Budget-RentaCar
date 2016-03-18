describe('Car View page', function() {

  it('should go to carView page', function() {
    browser.get(browser.baseUrl + 'carView');
    expect(browser.getCurrentUrl()).toEqual(browser.baseUrl + 'carView');
  });

  it('should have custom buttons', function() {
    expect(element(by.css('.budget-orange-button.button.button-block.button-assertive.has-header')).isPresent()).toBe(true);
    expect(element(by.css('.budget-blue-button.button.button-block.button-assertive.has-header')).isPresent()).toBe(true);

  });

<<<<<<< HEAD

=======
>>>>>>> b6ddcd36f750ac4ce459467b6fdba158f093611f
});
