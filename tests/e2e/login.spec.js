describe("login", function() {
/**
    beforeEach(function(){
      browser.get('http://localhost:8100/#/');
      element(by.model('username'))sendKeys("admin");
      element(by.model('password'))sendKeys("admin");
      element(by.tagName('button')).click();
      expect(browser.getCurrentUrl()).toEqual("http://localhost:8100/#/carInterior");
    });
**/
    it('should be able to login', function() {
      browser.driver.get('http://localhost:8100/#/');
      browser.driver.findElement(by.model('username'))sendKeys("admin");
      browser.driver.findElement(by.model('password'))sendKeys("admin");
      browser.driver.findElement(by.tagName('button')).click();
      expect(browser.getCurrentUrl()).toEqual("http://localhost:8100/#/scanner");
    });

});
