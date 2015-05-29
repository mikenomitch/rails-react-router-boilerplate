var React = require('react')

// Router stuff
var Router = require('react-router')
var DefaultRoute = Router.DefaultRoute
var Link = Router.Link
var Route = Router.Route
var RouteHandler = Router.RouteHandler

// My Components
var Navbar = require('./components/navbar.jsx')
var Bar  = require('./components/bar.jsx')
var Baz  = require('./components/baz.jsx')
var Returns = require('./components/returns.cray')

var App = React.createClass({
  render: function(){
    return(
      <div>
        <Navbar />
        <RouteHandler />
      </div>
    )
  }
})

var routes = (
  <Route name="app" path="/" handler={App}>
    <Route name="returns" path="returns" handler={Returns} />
    <Route name="bar" path="bar" handler={Bar} />
    <Route name="baz" path="baz" handler={Baz} />
    <DefaultRoute name="default" handler={Returns} />
  </Route>
)

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.body)
})
