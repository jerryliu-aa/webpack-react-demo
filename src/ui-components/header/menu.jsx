var React = require('react');

var Menu = React.createClass({
  render () {
    var list = this.props.items.map((item) => {
      return (<li><a href="#">{item.text}</a></li>);
    })
    return (
      <ul className="menus">
        {list}
      </ul>
    );
  }
});
module.exports = Menu;
