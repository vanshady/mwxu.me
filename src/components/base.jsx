const React = require('react');

const Base = React.createClass({
  render() {
    return (
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
          <em>
            <a href="https://www.linkedin.com/in/minweixu">Linkedin</a>&nbsp; · &nbsp;
            <a href="https://www.facebook.com/william.hsu.182">Facebook</a>&nbsp; · &nbsp;
            <a href="https://www.github.com/vanshady">Github</a>
          </em>
        </footer>
      </div>
    );
  },
});

module.exports = Base;
