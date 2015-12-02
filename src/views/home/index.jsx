var React = require('react');

require('./_style.scss');

var Header = require('../../ui-components/header');

var Home = React.createClass({
  render () {
    return (
      <div className="home view">
        <Header />
      </div>
    );
  }
});
module.exports = Home;
