
const React = require('react');
const ReactRouter = require('react-router');
const Router = ReactRouter.Router;
const Route = ReactRouter.Route;
const IndexRoute = ReactRouter.IndexRoute;
// const routerHistory = ReactRouter.useRouterHistory;
// const CreateHistory = require('history').createHashHistory;
// const History = routerHistory(CreateHistory)({
//   queryKey: false,
// });
import { browserHistory } from 'react-router';

const Base = require('./components/base.jsx');
const IndexText = require('./components/indextext.jsx');
const IndexSection = require('./components/indexsection.jsx');
const Project = require('./components/project.jsx');
// const About = require('./components/about.jsx');
// const Contact = require('./components/contact.jsx');
// <Route path="/about" component={About} />
// <Route path="/contact" component={Contact} />

const Index = React.createClass({
  render() {
    return (
      <div>
        <IndexText />
        <IndexSection />
      </div>
    );
  },
});

const Routes = (
  <Router history={browserHistory}>
    <Route path="/" component={Base} >
      <IndexRoute component={Index} />
      <Route path="/project/:name" component={Project} />
    </Route>
  </Router>
);

module.exports = Routes;
