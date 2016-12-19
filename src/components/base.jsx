const React = require('react');

const Base = () =>
      <div>
        <header>
          <div className="navwrapper">
            <a href="/" className="name">
              Minwei Xu
            </a>
            <nav role="navigation">
              <ul>
                <li><a href="/" id="homeTab">Home</a></li>
                <li><a href="/about" id="aboutTab">About</a></li>
                <li><a href="/projects" id="projectsTab">Projects</a></li>
                <li><a href="/Minwei_Xu_Resume.pdf">Resume</a></li>
              </ul>
            </nav>
          </div>
        </header>
        {this.props.children}
        <footer>
          <section className="footersection">
            <div className="title">
              <h2>Minwei Xu</h2>
              Website developed by React and Express.
            </div>
            <div className="copyline">
              <a href="mailto:mxu31@jhu.edu">mxu31@jhu.edu</a>&nbsp; · &nbsp;
              <a href="https://www.linkedin.com/in/minweixu">Linkedin</a>&nbsp; · &nbsp;
              <a href="https://www.facebook.com/william.hsu.182">Facebook</a>&nbsp; · &nbsp;
              <a href="https://www.github.com/vanshady">Github</a>
            </div>
          </section>
        </footer>
      </div>;

module.exports = Base;
