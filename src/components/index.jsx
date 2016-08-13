const React = require('react');
const IndexSection = require('./IndexSection.jsx');
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
        <IndexSection />
      </div>
    );
  },
});

module.exports = Index;
