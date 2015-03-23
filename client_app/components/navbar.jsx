var React = require('react')
var Link = require('react-router').Link

var Navbar = React.createClass({
  render: function (){
    return(
      <div id="nav" className="container-fluid full_width">
        <Link className="col-xs-4 col-sm-4" to="foo">
          <span> Foo </span>
        </Link>
        <Link className="col-xs-4 col-sm-4" to="bar">
          <span> Bar </span>
        </Link>
        <Link className="col-xs-4 col-sm-4" to="baz">
          <span> Baz </span>
        </Link>
      </div>
    )
  }
})

module.exports = Navbar