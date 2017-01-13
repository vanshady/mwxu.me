const React = require('react');

class Base extends React.Component {
  constructor(props) {
    super(props);
    this.activateAboutTab = this.activateAboutTab.bind(this);
    this.activateHomeTab = this.activateHomeTab.bind(this);
    this.activateProjectsTab = this.activateProjectsTab.bind(this);
  }

  activateHomeTab() {
    this.homeTab.className = 'active';
    this.aboutTab.className = '';
    this.projectsTab.className = '';
  }

  activateAboutTab() {
    this.homeTab.className = '';
    this.aboutTab.className = 'active';
    this.projectsTab.className = '';
  }

  activateProjectsTab() {
    this.homeTab.className = '';
    this.aboutTab.className = '';
    this.projectsTab.className = 'active';
  }

  render() {
    const childrenWithProps = React.Children.map(this.props.children,
      child => React.cloneElement(child, { activateHomeTab: this.activateHomeTab,
        activateAboutTab: this.activateAboutTab, activateProjectsTab: this.activateProjectsTab })
    );

    return (
      <div>
        <header>
          <div className="navwrapper">
            <a href="/" className="name">
              Minwei Xu
            </a>
            <nav role="navigation">
              <ul>
                <li><a href="/" ref={ homeTab => { this.homeTab = homeTab; }} id="homeTab">Home</a></li>
                <li><a href="/about" ref={ aboutTab => { this.aboutTab = aboutTab; }} id="aboutTab">About</a></li>
                <li><a href="/projects" ref={ projectsTab => { this.projectsTab = projectsTab; }} id="projectsTab">Projects</a></li>
                <li><a href="/Minwei_Xu_Resume.pdf">Resume</a></li>
              </ul>
            </nav>
          </div>
        </header>
        {childrenWithProps}
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
      </div>
    );
  }
}

// Base.propTypes = {
//   children: React.PropTypes.arrayOf(React.PropTypes.node),
// };

module.exports = Base;
