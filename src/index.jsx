require('debug').enable('demo:*');
var debug = require('debug');
var React = require('react');
var ReactDOM = require('react-dom');

var {IntlProvider, addLocaleData} = require('react-intl');

var { Router, Route, IndexRoute, RouteHandler, Redirect } = require('react-router');

var Home = require('./views/home');
var intlData = require('./intl/load_intl.js');
var ourIntlData = intlData.ours;

addLocaleData(intlData.provided);
addLocaleData({
  locale: BUILD_INTL_NAME,
  parentLocale: BUILD_INTL_PARENT_NAME
});

if ('ReactIntlLocaleData' in window) {
  Object.keys(ReactIntlLocaleData).forEach((lang) => {
    addLocaleData(ReactIntlLocaleData[lang]);
  });
}

var App = React.createClass({
  render () {
    return (
      <IntlProvider {...ourIntlData}>
        <div className='app-container'>
          {this.props.children}
          <div className='footer-padding' />
        </div>
      </IntlProvider>
    );
  }
});

var NoMatch = React.createClass({
  render () {
    return (
      <div>404</div>
    );
  }
});

ReactDOM.render((
  <Router>
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
      <Route path="*" component={NoMatch} />
    </Route>
  </Router>
), document.querySelector('#container'));
