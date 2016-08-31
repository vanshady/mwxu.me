
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
import { browserHistory, Redirect } from 'react-router';

const Base = require('./components/Base.jsx');
const Index = require('./components/Index.jsx');
const Project = require('./components/Project.jsx');
const About = require('./components/About.jsx');
const Projects = require('./components/Projects.jsx');

const Routes = (
  <Router history={browserHistory}>
    <Route path="/" component={Base} >
      <IndexRoute component={Index} />
      <Route path="/projects/:name" component={Project} />
      <Route path="/about" component={About} />
      <Route path="/projects" component={Projects} />
      <Redirect from="*" to="/" />
    </Route>
  </Router>
);

module.exports = Routes;
