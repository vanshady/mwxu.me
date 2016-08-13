const React = require('react');
const Projects = require('./Projects.jsx');
const IndexText = require('./IndexText.jsx');

const Index = React.createClass({
  componentDidMount() {
    document.getElementById('homeTab').className = 'active';
    document.getElementById('aboutTab').className = '';
  },
  render() {
    return (
      <div>
        <IndexText />
        <Projects />
      </div>
    );
  },
});

module.exports = Index;
