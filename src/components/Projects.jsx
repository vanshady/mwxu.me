const React = require('react');
const Item = require('./Item.jsx');

const list = require('./portfolio.json');

const Projects = React.createClass({
  componentDidMount() {
    document.getElementById('homeTab').className = '';
    document.getElementById('aboutTab').className = '';
    document.getElementById('projectsTab').className = 'active';
  },
  render() {
    return (
      <div className="writingwrapper">
        <section className="featured">
          <div className="textspace top">
            <aside>
              <h2>Featured Project</h2>
            </aside>
            <div className="grid">
              <div style={{ width: '200%', paddingLeft: '9px' }}>
                <a href="/projects/2015-Living Liquid">
                  <iframe width="100%" height="300" title="Living Liquid" src="https://www.youtube.com/embed/9xNOjb1kUio" frameBorder="0" allowFullScreen></iframe>
                  <b className="label">Living Liquid</b>
                  <em className="detail">2015</em>
                </a>
              </div>
              <div>
                <a href="/projects/2016-AllCommunication">
                  <img src="/img/AllCommunication.png" className="fullimg" />
                  <b className="label">AllCommunication</b>
                  <em className="detail">2016</em>
                </a>
              </div>
              <div>
                <a href="/projects/2016-Realtime Chat Application">
                  <img src="/img/chat.png" className="fullimg" />
                  <b className="label">Realtime Chat Application</b>
                  <em className="detail">2016</em>
                </a>
              </div>
              <div>
                <a href="/projects/2016-SiliconHacks">
                  <img src="/img/silicon.png" className="fullimg" />
                  <b className="label">SiliconHacks</b>
                  <em className="detail">2016</em>
                </a>
              </div>
              <div>
                <a href="/projects/2016-Eventbrite Data Visualization">
                  <img src="/img/GMapFull.png" className="fullimg" />
                  <b className="label">Eventbrite Data Visualization</b>
                  <em className="detail">2016</em>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="writinglist">
          <Item year="2016" items={list[2016]} />
          <Item year="2015" items={list[2015]} />
        </section>
      </div>
    );
  },
});

module.exports = Projects;
