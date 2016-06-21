
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
const Index = require('./components/index.jsx');
const Project = require('./components/project.jsx');
const About = require('./components/about.jsx');

const Routes = (
  <Router history={browserHistory}>
    <Route path="/" component={Base} >
      <IndexRoute component={Index} />
      <Route path="/project/:name" component={Project} />
      <Route path="/about" component={About} />
    </Route>
  </Router>
);

module.exports = Routes;
