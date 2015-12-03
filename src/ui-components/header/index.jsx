var React = require('react');
var {injectIntl} = require('react-intl');

require('./_style.scss');

var Menu = require('./menu');
var AppSearchInput = require('./app-search-input');
var UsernameMenu = require('./username-menu');

var Header = React.createClass({
  render () {
    return (
      <header>
        <div className="logo-wrapper"><img src={require('./logo.png')} /></div>
        <Menu items={[
          {
            text: this.props.intl.formatMessage({id: 'MARKET_DATA'})
          },
          {
            text: this.props.intl.formatMessage({id: 'ANALYTICS'})
          },
          {
            text: this.props.intl.formatMessage({id: 'INSIGHTS'})
          },
        ]} />
        <div className="spacer" />
        <Menu items={[
          {
            text: this.props.intl.formatMessage({id: 'TOUR'})
          },
          {
            text: this.props.intl.formatMessage({id: 'PRICING'})
          },
          {
            text: this.props.intl.formatMessage({id: 'ABOUT'})
          },
          {
            text: this.props.intl.formatMessage({id: 'BLOG'})
          },
        ]} />
        <AppSearchInput />
        <UsernameMenu name="Jerry Liu" onClick={this.props.onUserMenuClick}/>
      </header>
    );
  }
});
module.exports = injectIntl(Header);
