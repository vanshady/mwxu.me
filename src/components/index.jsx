const React = require('react');
const Featured = require('./Featured.jsx');
const IndexText = require('./IndexText.jsx');
const Skills = require('./Skills.jsx');
const Index = React.createClass({
  componentDidMount() {
    document.getElementById('homeTab').className = 'active';
    document.getElementById('aboutTab').className = '';
    document.getElementById('projectsTab').className = '';
  },
  render() {
    return (
      <div>
        <IndexText />
        <Featured />
        <Skills />
      </div>
    );
  },
});

module.exports = Index;
