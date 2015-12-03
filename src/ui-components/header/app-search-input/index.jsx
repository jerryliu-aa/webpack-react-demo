var React = require('react');
var {injectIntl} = require('react-intl');

var mangledClassNames = require('./_style.scss');

var AppSearchInput = React.createClass({
  render () {
    return (
      <div className={mangledClassNames['input-wrapper']}>
        <input placeholder={this.props.intl.formatMessage({id: 'APP_OR_PUBLISHER'})} />
      </div>
    );
  }
});
module.exports = injectIntl(AppSearchInput);
