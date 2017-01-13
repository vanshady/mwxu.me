import React from 'react';
import { Router, browserHistory } from 'react-router';
import Routes from './Routes.jsx';

export default class AppRoutes extends React.Component {
  render() {
    return (
      <Router history={browserHistory} routes={Routes} onUpdate={() => window.scrollTo(0, 0)} />
    );
  }
}
