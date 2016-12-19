const React = require('react');

const IndexText = () =>
      <section className="text">
        <p> <img src="/img/avatar.jpg" alt="avatar" className="fullimg avatar" /> </p>
        <p className="intro">
          Minwei Xu 徐旻威 (@vanshady)
          <br />
          Web Developer
          <br />
          Sophomore at Johns Hopkins University.
          <br />
          <br />
          <a href="https://www.linkedin.com/in/minweixu">
            <span style={{ position: 'relative', top: '2px', right: '1px' }} >
              <img src="/img/linkedin.png" width="27" height="27" border="0" />
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
          &nbsp; · &nbsp;
          <a href="https://medium.com/@vanshady/">
            <span style={{ position: 'relative', top: '2px', right: '2px' }} >
              <img src="/img/medium.jpg" width="24" height="24" border="0" />
            </span>
            <span style={{ color: 'black', fontWeight: '500' }} >Medium</span>
          </a>
          <br />
          <a href="mailto:mxu31@jhu.edu">mxu31@jhu.edu</a>
        </p>
      </section>;

module.exports = IndexText;
