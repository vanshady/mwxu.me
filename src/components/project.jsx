const React = require('react');
const IndexSection = require('./indexsection.jsx');

const projects = require('./portfolio.json');

const Project = React.createClass({
  componentDidUpdate() {
    // window.scrollTo(0, 0);
  },
  render() {
    let key = 0;
    const year = this.props.params.name.slice(0, 4);
    const name = this.props.params.name.slice(5);
    const project = projects[year].filter(function (v) {
      return v.label === name;
    })[0];
    const time = `${project.month} ${year}`;
    const image = () => {
      if (project.img) {
        return (
          <img src={project.img} alt={name} className="fullimg" />
        );
      }
    };
    const paragraphs = project.desc.map((p) => {
      key++;
      return (
        <p key={key} dangerouslySetInnerHTML={{ __html: p }}></p>
      );
    });
    const link = () => {
      if (project.link) {
        return (
          <p>
            Demo: <a href={project.link}>{project.link}</a>
          </p>
        );
      }
    };
    const code = () => {
      if (project.code) {
        return (
          <p>
            Code: <a href={project.code}>{project.code}</a>
          </p>
        );
      }
    };
    return (
      <div>
        <article>
          <h1>{name}</h1>
          <div className="body">
            {image() }
            {paragraphs}
            {link() }
            {code() }
            <p>
              <time pubdate>{time}</time>
            </p>
          </div>
        </article>
        <IndexSection />
      </div>
    );
  },
});

module.exports = Project;
