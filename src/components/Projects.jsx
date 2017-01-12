const React = require('react');
const Item = require('./Item.jsx');
const Featured = require('./Featured.jsx');
const list = require('./portfolio.json');

const Projects = React.createClass({
    componentDidMount() {
        this.props.activateProjectsTab();
    },
    render() {
        return (
      <div className="writingwrapper">
        <Featured />

        <section className="writinglist">
          <Item year="2016" items={list[2016]} />
          <Item year="2015" items={list[2015]} />
        </section>
      </div>
    );
    },
});

module.exports = Projects;
