import React from 'react';
import Item from './Item.jsx';
import Featured from './Featured.jsx';
import list from './portfolio.json';

class Projects extends React.Component {
  componentDidMount() {
    this.props.activateProjectsTab();
  }

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
  }
}

Projects.propTypes = {
  activateProjectsTab: React.PropTypes.func,
};

module.exports = Projects;
