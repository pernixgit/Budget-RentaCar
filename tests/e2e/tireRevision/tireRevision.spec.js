describe('Tire Revision page', function() {

  it('should go to tireRevision page', function() {
    browser.get(browser.baseUrl + 'tireRevision');
<<<<<<< HEAD
    expect(browser.getCurrentUrl()).toEqual(browser.baseUrl + 'tireRevision');
=======
    expect(browser.getCurrentUrl()).toEqual("http://localhost:8100/#/tireRevision");
>>>>>>> b6ddcd36f750ac4ce459467b6fdba158f093611f
  });


  it('should have 5 selects', function() {
  	var selects = element.all(by.css('.select-tire-brand.col'));
    expect(selects.count()).toBe(5);
  });

  it('should have button', function() {
    expect(element(by.css('.budget-orange-button.button.button-block.button-assertive')).isPresent()).toBe(true);
  });

});
