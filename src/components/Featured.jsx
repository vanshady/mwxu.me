const React = require('react');

export default function Projects() {
  return (<section className="featured">
    <div className="textspace top">
      <aside>
        <h2>Featured Projects</h2>
      </aside>
      <div className="grid">
        <div style={{ width: '99%', paddingLeft: '9px' }}>
          <a href="/projects/2016-Orgo Savior">
            <iframe width="100%" height="300" title="Orgo Savior" src="https://www.youtube.com/embed/8Clj6ftfLfk" frameBorder="0" allowFullScreen></iframe>
            <b className="label">Orgo Savior</b>
            <em className="detail">2016</em>
          </a>
        </div>
        <div style={{ width: '99%', paddingLeft: '9px' }}>
          <a href="/projects/2015-Living Liquid">
            <iframe width="100%" height="300" title="Living Liquid" src="https://www.youtube.com/embed/9xNOjb1kUio" frameBorder="0" allowFullScreen></iframe>
            <b className="label">Living Liquid</b>
            <em className="detail">2015</em>
          </a>
        </div>
        <div style={{ position: 'relative', left: '10px' }}>
          <a href="/projects/2016-Realtime Chat Application">
            <img src="/img/chat.png" className="fullimg" />
            <b className="label">Realtime Chat Application</b>
            <em className="detail">2016</em>
          </a>
        </div>
        <div style={{ position: 'relative', left: '10px' }}>
          <a href="/projects/2016-University">
            <img src="/img/university.png" className="fullimg" />
            <b className="label">University</b>
            <em className="detail">2016</em>
          </a>
        </div>
        <div>
          <a href="/projects/2016-AllCommunication">
            <span style={{ height: '40px' }}>
              <img src="/img/AllCommunication.png" className="fullimg" />
            </span>
            <b className="label">AllCommunication</b>
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
      </div>
    </div>
  </section>);
}
