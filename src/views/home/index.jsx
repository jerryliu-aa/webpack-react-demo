var React = require('react');

require('./_style.scss');
var reactor = require('../../model/reactor');
var guiGetters = require('../../model/gui/getters');
var guiActions = require('../../model/gui/actions');

var Header = require('../../ui-components/header');

var Home = React.createClass({
  mixins: [
    reactor.ReactMixin,
  ],
  getDataBindings() {
    return {
      isMenuOpened: guiGetters.isUserMenuOpened,
    }
  },
  render () {
    return (
      <div className="home view">
        <Header onUserMenuClick={() => {
          guiActions.toggleUserMenu();
        }}/>
        <div>{this.state.isMenuOpened ? 'Yes, sir' : 'Hello'}</div>
      </div>
    );
  }
});
module.exports = Home;
