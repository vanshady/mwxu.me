import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';

const Base = require('./Base.jsx');
const Index = require('./Index.jsx');
const Project = require('./Project.jsx');
const About = require('./About.jsx');
const Projects = require('./Projects.jsx');

const Routes = (
  <Route path="/" component={Base} >
    <IndexRoute component={Index} />
    <Route path="projects/:name" component={Project} />
    <Route path="about" component={About} />
    <Route path="projects" component={Projects} />
    {/* <Redirect from="*" to="/" /> */}
  </Route>
);

module.exports = Routes;
