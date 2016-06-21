const React = require('react');
const IndexSection = require('./indexsection.jsx');
const IndexText = require('./indextext.jsx');

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
