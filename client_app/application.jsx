var React = require('react')

// Router stuff
var Router = require('react-router')
var DefaultRoute = Router.DefaultRoute
var Link = Router.Link
var Route = Router.Route
var RouteHandler = Router.RouteHandler

// My Components
var Navbar = require('./components/navbar.jsx')
var Foo  = require('./components/foo.jsx')
var Bar  = require('./components/bar.jsx')
var Baz  = require('./components/baz.jsx')

var App = React.createClass({
  render: function(){
    return(
      <div>
        <Navbar />
        This text is in application.jsx: when a child route is active, a child component shows up below it.
        See the react-router documentation for more info.
        <RouteHandler />
      </div>
    )
  }
})

var routes = (
  <Route name="app" path="/" handler={App}>
    <Route name="foo" path="foo" handler={Foo} />
    <Route name="bar" path="bar" handler={Bar} />
    <Route name="baz" path="baz" handler={Baz} />
    <DefaultRoute name="default" handler={Foo} />
  </Route>
)

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.body)
})
