var React = require('react');
var {injectIntl} = require('react-intl');

var AppSearchInput = React.createClass({
  render () {
    return (
      <div className="input-wrapper">
        <input placeholder={this.props.intl.formatMessage({id: 'APP_OR_PUBLISHER'})} />
      </div>
    );
  }
});
module.exports = injectIntl(AppSearchInput);
