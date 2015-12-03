var React = require('react');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var {IntlProvider, addLocaleData} = require('react-intl');
var UsernameMenu = require('./username-menu.jsx');

function bootstrapTranslation() {
  var intlData = {
    provided: require('react-intl/dist/locale-data/en.js'),
    ours: require('../../intl/en_US.js')
  }
  var ourIntlData = intlData.ours;

  addLocaleData(intlData.provided);
  addLocaleData({
    locale: 'en-US',
    parentLocale: 'en'
  });

  return ourIntlData;
}

var intlData = bootstrapTranslation();

describe("UsernameMenu", function() {
  var comp = null;
  var testName = 'testName';
  beforeEach(function() {
    comp = TestUtils.renderIntoDocument(
      <IntlProvider {...intlData}>
          <UsernameMenu name={testName}/>
      </IntlProvider>
    );
  });

  it("should properly be rendered", function() {
    comp = TestUtils.findRenderedDOMComponentWithClass(comp, 'username-menu-wrapper');
    expect(TestUtils.isDOMComponent(comp)).toBe(true);
  });

  it("should have name when provided", function() {
    comp = TestUtils.findRenderedDOMComponentWithClass(comp, 'username-menu');
    expect(comp.textContent.indexOf(testName) >= 0).toBe(true);
  });
});
