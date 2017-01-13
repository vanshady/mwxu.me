import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';

import Base from './Base.jsx' ;
import Index from './Index.jsx' ;
import Project from './Project.jsx' ;
import About from './About.jsx' ;
import Projects from './Projects.jsx' ;

const Routes = (
  <Route path="/" component={Base} >
    <IndexRoute component={Index} />
    <Route path="projects/:name" component={Project} />
    <Route path="about" component={About} />
    <Route path="projects" component={Projects} />
    <Redirect from="*" to="/" />
  </Route>
);

module.exports = Routes;
