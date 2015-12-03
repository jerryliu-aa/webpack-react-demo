var reactor = require('../reactor');
var {
  USER_MENU_TOGGLED,
} = require('./action-types');

module.exports = {
  toggleUserMenu: function() {
    reactor.dispatch(USER_MENU_TOGGLED);
  },
};
