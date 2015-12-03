var React = require('react');
var {injectIntl, FormattedMessage} = require('react-intl');

var UsernameMenu = React.createClass({
  render () {
    return (
      <div className="username-menu-wrapper" onClick={this.props.onClick}>
        <div className="username-menu">
          <FormattedMessage
            id='USERNAME_MR'
            values={{name: this.props.name}}
          />
        </div>
      </div>
    );
  }
});
module.exports = injectIntl(UsernameMenu);
