import { browser, element, by } from 'protractor';

describe('FlightsInfo E2E Tests', function () {

  let expectedMsg = 'Flight Info';

  beforeEach(function () {
    browser.get('');
  });

  it('should display: ' + expectedMsg, function () {
    expect(element(by.css('h1')).getText()).toEqual(expectedMsg);
  });

});
