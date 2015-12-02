var React = require('react');

require('./_style.scss');

var Menu = require('./menu');

var Header = React.createClass({
  render () {
    return (
      <header>
        <div className="logo-wrapper"><img src={require('./logo.png')} /></div>
        <Menu items={[
          {
            text: 'Market Data'
          },
          {
            text: 'Analytics'
          },
          {
            text: 'Insights'
          },
        ]} />
        <div className="spacer" />
        <Menu items={[
          {
            text: 'Tour'
          },
          {
            text: 'Pricing'
          },
          {
            text: 'About'
          },
          {
            text: 'Blog'
          },
        ]} />
        <div className="input-wrapper">
          <input placeholder="App or Publisher" />
        </div>
      </header>
    );
  }
});
module.exports = Header;
