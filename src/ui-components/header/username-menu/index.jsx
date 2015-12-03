var React = require('react');
var {injectIntl, FormattedMessage} = require('react-intl');
var mangledClassNames = require('./_style.scss');

var UsernameMenu = React.createClass({
  render () {
    return (
      <div className={mangledClassNames['username-menu-wrapper']} onClick={this.props.onClick}>
        <div className={mangledClassNames['username-menu']}>
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
