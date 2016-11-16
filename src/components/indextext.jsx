const React = require('react');

const IndexText = React.createClass({
    render() {
        return (
      <section className="text">
        <p> <img src="/img/avatar.jpg" alt="avatar" className="fullimg avatar" /> </p>
        <p className="intro">
          I’m Minwei Xu 徐旻威, a web developer
          <br />
          and a sophomore at JHU.
          <br />
          <a href="https://www.linkedin.com/in/minweixu">
            <span style={{ position: 'relative', top: '2px', right: '1px' }} >
              <img src="/img/linkedin.png" width="25" height="25" border="0" />
            </span>
            <span style={{ color: 'black', fontWeight: '500' }} >Linkedin</span>
          </a>
          &nbsp; · &nbsp;
          <a href="https://www.github.com/vanshady">
            <span style={{ position: 'relative', top: '2px', right: '2px' }} >
              <img src="/img/github.png" width="24" height="24" border="0" />
            </span>
            <span style={{ color: 'black', fontWeight: '500' }} >Github</span>
          </a>
          <br />
          <a href="mailto:mxu31@jhu.edu">mxu31@jhu.edu</a>
        </p>
      </section>
    );
    },
});

module.exports = IndexText;
