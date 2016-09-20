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
              <h2>Web Development</h2>
            </aside>
            <div>
              <ul className="tablelist">
                <li key={0}>
                  <a className="label">1+ year experience</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="textspace">            
            <aside>
              <h2>Software Engineering</h2>
            </aside>
            <div>
              <ul className="tablelist">
                <li key={0}>
                  <a className="label">Extensive experience with Java, C and C++</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="textspace">
            <aside>
              <h2>Data Science</h2>
            </aside>
            <div>
              <ul className="tablelist">
                <li key={0}>
                  <a className="label">Conducted researches about data visualization at Shanghai Jiao Tong University and UC Davis</a>
                </li>
                <li key={1}>
                  <a className="label">Completed Andrew Ng's Macine Learning Course</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="textspace">
            <aside>
              <h2>Competitive Programming</h2>
            </aside>
            <div>
              <ul className="tablelist">
                <li key={0}>
                  <a className="label">10+ year experience</a>
                </li>
                <li key={1}>
                  <a className="label">Division 1 Honorable Mention | 2015 ACM-ICPC Pacific Northwest Region</a>
                </li>
                <li key={2}>
                  <a className="label">1st/80 | 2015 UC Davis Algorithm Hackathon</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="textspace">
            <aside>
              <h2>Hackathons</h2>
            </aside>
            <div>
              <ul className="tablelist">
                <li key={0}>
                  <a className="label">PennApps</a>
                </li>
                <li key={1}>
                  <a className="label">HackDavis</a>
                </li>
                <li key={2}>
                  <a className="label">HackingEDU</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="textspace">
            <aside>
              <h2>Open Source Contributions</h2>
            </aside>
            <div>
              <ul className="tablelist">
                <li key={0}>
                  <a className="label">angle-to-degree</a>
                </li>
                <li key={1}>
                  <a className="label">Hackathon-starter</a>
                </li>
                <li key={2}>
                  <a className="label">D3.js</a>
                </li>
                <li key={3}>
                  <a className="label">React.js</a>
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
