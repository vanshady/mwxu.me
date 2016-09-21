const React = require('react');

const Skills = React.createClass({
  render() {
    return (
      <div className="writingwrapper">
        <section className="featured">
          <div className="textspace top">
            <aside>
              <h1 style={{ fontSize: '20px', left: '2px' }}>Skills</h1>
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
                  <a className="label">Extensive experience with React.js, Redux, react-router, GraphQL, D3.js and
Express</a>
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
                  <a className="label">Familiar experience with Java, C and C++. Have experience developing with Python, R, and Matlab. Familiar with Linux/Unix commands.</a>
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
                  <a className="label">Division 1 Honorable Mention | 2015 ACM-ICPC Pacific Northwest Region</a>
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
                  <a className="label">HackDavis</a>
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
                  <a className="label">angle-to-degree | Author</a>
                  <b className="label">An npm package with 1800+ downloads.</b>
                </li>
                <li key={1}>
                  <a className="label">Hackathon-starter | Major Contributor</a>
                  <b className="label">A boilerplate for Node.js web applications with 16000+ stars.</b>
                </li>
                <li key={2}>
                  <a className="label">D3.js, React.js | Contributor</a>
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
