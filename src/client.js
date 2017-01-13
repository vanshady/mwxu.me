const React = require('react');
const ReactDOM = require('react-dom');
const AppRoutes = require('./components/AppRoutes.jsx');

window.onload = () => {
  ReactDOM.render(<AppRoutes />, document.getElementById('main'));
};
