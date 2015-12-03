var React = require('react');

var mangledClassNames = require('./_style.scss');

var Menu = React.createClass({
  render () {
    var list = this.props.items.map((item) => {
      return (<li key={item.text}><a href="#">{item.text}</a></li>);
    })
    return (
      <ul className={mangledClassNames['menus']}>
        {list}
      </ul>
    );
  }
});
module.exports = Menu;
