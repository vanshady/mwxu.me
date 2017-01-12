const React = require('react');
const Featured = require('./Featured.jsx');
const IndexText = require('./IndexText.jsx');
const Skills = require('./Skills.jsx');

const Index = React.createClass({
    componentDidMount() {
        this.props.activateHomeTab();
    },
    render() {
        return (
      <div>
        <IndexText />
        <div className="writingwrapper">
          <Featured />
          <Skills />
        </div>
      </div>
    );
    },
});

module.exports = Index;
