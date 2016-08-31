const React = require('react');

const Skills = React.createClass({
  render() {
    return (
      <div className="writingwrapper">
        <section className="featured">
          <div className="textspace top">
            <aside>
              <h2>Skills</h2>
            </aside>
          </div>
        </section>

        <section className="writinglist">
                <div className="textspace">
        <aside>
          <h2>Front-end Development</h2></aside>
          <div>
            <ul className="tablelist">
              <li key={0}>
                <b className="label">React.js</b>
              </li>
            </ul>
          </div>
      </div>
        </section>
      </div>
    );
  },
});

module.exports = Skills;
