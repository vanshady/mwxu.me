const React = require('react');
const Item = require('./item.jsx');

const list = require('./portfolio.json');

const IndexSection = React.createClass({
  render() {
    return (
      <div className="writingwrapper">
        <section className="featured">
          <div className="textspace top">
            <aside>
              <h2>Featured Project</h2>
            </aside>
            <div className="grid">
              <div>
                <a href="/project/2016-Realtime Chat Application">
                  <img src="/img/chat.png" className="fullimg" />
                  <b className="label">Realtime Chat Application</b>
                  <em className="detail">2016</em>
                </a>
              </div>
              <div>
                <a href="/project/2016-SiliconHacks">
                  <img src="/img/silicon.png" className="fullimg" />
                  <b className="label">SiliconHacks</b>
                  <em className="detail">2016</em>
                </a>
              </div>
              <div>
                <a href="/project/2016-Eventbrite Data Visualization">
                  <img src="/img/GMapFull.png" className="fullimg" />
                  <b className="label">Eventbrite Data Visualization</b>
                  <em className="detail">2016</em>
                </a>
              </div>
              <div>
                <a href="/project/2016-React Calculator">
                  <img src="/img/calculator.png" className="fullimg" />
                  <b className="label">React Calculator</b>
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

module.exports = IndexSection;
