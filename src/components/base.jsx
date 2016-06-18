const React = require('react');

const Base = React.createClass({
  render() {
    return (
      <div>
        <header>
          <div className="navwrapper">
            <a href="http://mwxu.me/" className="name">
              Minwei Xu
            </a>
            <nav role="navigation">
              <ul>
                <li><a href="/" className="active">Home</a></li>
                <li><a href="/about">About Me</a></li>
                <li><a href="/Minwei_Xu_Resume.pdf" download>Resume</a></li>
                <li><a href="/contact">Contact</a></li>
              </ul>
            </nav>
          </div>
        </header>
        {this.props.children}
      </div>
    );
  },
});

module.exports = Base;
