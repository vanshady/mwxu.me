import React from 'react';
import Featured from './Featured.jsx';
import IndexText from './IndexText.jsx';
import Skills from './Skills.jsx';

class Index extends React.Component {
  componentDidMount() {
    this.props.activateHomeTab();
  }

  render() {
    return (
      <div>
        <IndexText />
        <div className="writingwrapper">
          <Featured />
          <Skills />
        </div>
      </div>);
  }
}

Index.propTypes = {
  activateHomeTab: React.PropTypes.func,
};

module.exports = Index;
