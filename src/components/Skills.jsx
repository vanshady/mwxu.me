const React = require('react');

const Skills = () =>
      <div>
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
                  <a className="label">Extensive experience with React.js, Redux, react-router,
                  GraphQL, D3.js and Express</a>
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
                  <a className="label">Familiar experience with Java, C and C++. Have experience
                   developing with Python, R, and Matlab. Familiar with Linux/Unix commands.</a>
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
                  <a className="label">Conducted researches about data visualization at Shanghai
                   Jiao Tong University and UC Davis</a>
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
                  <a className="label">2016 ACM-ICPC Mid-Atlantic Region
                      <b className="sublabel">Honorable Mention</b>
                  </a>
                  <a className="label">2015 ACM-ICPC Pacific
                      Northwest Region
                      <b className="sublabel">Division 1 Honorable Mention</b>
                  </a>
                  <a className="label">2015 UC Davis Algorithm Hackathon
                    <b className="sublabel">1st / 80</b>
                  </a>
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
                  <a href="/projects/2016-Orgo Savior" lassName="label">
                    HopHacks | Orgo Savior
                      <b className="sublabel">3rd Prize</b>
                  </a>
                  <a className="label" href="/projects/2016-AllCommunication">
                    PennApps | AllCommunication
                  </a>
                  <a className="label">
                    HackDavis | Chrome Voice Assist
                      <b className="sublabel">Most Innovative Hack
                      | Best UX With Amazon Alexa</b>
                  </a>
                  <a className="label" href="/projects/2015-SpeechHacks">
                    HackingEDU | SpeechHacks
                      <b className="sublabel">Best Collaboration Hack Using Moxtra</b>
                  </a>
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
                  <a className="label" href="https://www.npmjs.com/package/angle-to-direction">
                      angle-to-degree | Author
                      <b className="sublabel">An npm package with 2200+ downloads.</b>
                  </a>
                </li>
                <li key={1}>
                  <a className="label" href="https://github.com/sahat/hackathon-starter">Hackathon-starter | Major Contributor
                      <b className="sublabel">A boilerplate for Node.js app with 19k+
                      stars.</b>
                  </a>
                </li>
                <li key={2}>
                  <a className="label">D3.js, React.js | Contributor</a>
                </li>
              </ul>
            </div>

          </div>
        </section>
      </div>;

module.exports = Skills;
