require('debug').enable('demo:*');
var React = require('react');
var ReactDOM = require('react-dom');

var { Router, Route, IndexRoute, RouteHandler, Redirect } = require('react-router');

var Home = require('./views/home');

var App = React.createClass({
  render () {
    return (
      <div className='app-container'>
        {this.props.children}
        <div className='footer-padding' />
      </div>
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
