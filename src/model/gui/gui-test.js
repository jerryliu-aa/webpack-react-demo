var reactor = require('../reactor');
var expect = require('expect');
var actions = require('./actions');
var getters = require('./getters');

require('../bootstrap');

describe("GuiStore", function() {
  afterEach(function() {
    reactor.reset();
  });

  it("user menu status should be init to closed", function() {
    var isClosed = !reactor.evaluateToJS(getters.isUserMenuOpened);
    expect(isClosed).toBe(true);
  });

  it("user menu status should be to opened when toggled once", function() {
    actions.toggleUserMenu();
    var isOpened = reactor.evaluateToJS(getters.isUserMenuOpened);
    expect(isOpened).toBe(true);
  });

  it("user menu status should be to opened when toggled twice", function() {
    actions.toggleUserMenu();
    actions.toggleUserMenu();
    var isOpened = reactor.evaluateToJS(getters.isUserMenuOpened);
    expect(isOpened).toBe(false);
  });
});
