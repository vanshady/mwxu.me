const React = require('react');
const IndexSection = require('./indexsection.jsx');

const IndexText = React.createClass({
  render() {
    return (
      <section className="text">
        <p> <img src="/img/avatar.jpg" alt="avatar" className="fullimg avatar" /> </p>
        <p className="intro">
          I’m Minwei Xu 徐旻威, a full-stack developer
          <br />
          and a sophomore at JHU.
          <br />
          <a href="https://www.linkedin.com/in/minweixu">Linkedin</a>&nbsp; · &nbsp;
          <a href="https://www.github.com/vanshady">Github</a>
        </p>
      </section>
    );
  },
});

module.exports = IndexText;
