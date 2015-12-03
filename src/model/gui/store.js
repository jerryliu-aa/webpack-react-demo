var { Store, toImmutable } = require('nuclear-js');
var {
  USER_MENU_TOGGLED,
  USER_MENU_OPENED,
  USER_MENU_CLOSED,
} = require('./action-types');

module.exports = new Store({
  getInitialState() {
    return toImmutable({
      userMenuStatus: 'closed'
    })
  },

  initialize() {
    this.on(USER_MENU_TOGGLED, userMenuToggled);
    this.on(USER_MENU_OPENED, userMenuOpened);
    this.on(USER_MENU_CLOSED, userMenuClosed);
  }
});

function userMenuToggled(state) {
  return state
  .updateIn(['userMenuStatus'], (status) => {
    return status === 'closed' ? 'opened' : 'closed';
  });
}

function userMenuOpened(state) {
  return state
  .setIn(['userMenuStatus'], 'opened');
}

function userMenuClosed(state) {
  return state
  .setIn(['userMenuStatus'], 'closed');
}
