const React = require('react');

const About = React.createClass({
    componentDidMount() {
        this.props.activateAboutTab();
    },
    render() {
        return (
      <div>
        <p> <img src="/img/avatar.jpg" alt="avatar" className="fullimg avatar" /> </p>
        <section className="text">
          <p>
             I'm Minwei Xu 徐旻威. I was born and grew up in Shanghai, China. Now, I'm a sophomore at Johns Hopkins University.
             I'm a web developer with experience in front-end and dabbling in data science. I'm passionate about programming and devoted to open-source projects.
             I have Extensive experience with React.js, Redux, react-router, GraphQL, D3.js. Familiar with Java, C/C++, Python, Node.js, iOS Development, and Linux commands.
          </p>
          <hr />
          <h1>Programmer</h1>
          <p>I have been programming on Pascal since I was 9 yrs old.When I won the first prize in NOIP (National Olympiad in Informatics in Provinces) in fifth grade, I knew this is my passion.</p>
          <figure>
            <img className="fullimg" src="/img/pascal.png" alt="pascal" />
            <figcaption>Pascal is a very old language with a GUI like this.</figcaption>
          </figure>
          <p>While taking part in competitional programming using Pascal, I self-taught Java, C and C++ in my last of high school.In the summer in 2015, I was lucky to have a chance to be part of a research of data visualization in Shanghai Jiao
            Tong University.</p>
          <p>I used D3.js to visualize the chemical analysis data of <a href="http://wine.minweixu.com">wine</a> and the customer survey data of a <a href="http://hotel.minweixu.com">hotel</a>.
            <p>This research introduced me web development and development, and I hence studied some basics of JavaScript, HTML/CSS.
            </p>
          </p>
          <figure>
            <img className="fullimg" src="/img/hackathon.jpg" alt="hackathon" />
            <figcaption className="caption text-muted">Dhanush and me at HackingEDU</figcaption>
          </figure>
          <p>
            With the limited skills I accumulated through the summer research, I went to HackingEDU and teamed up with Dhanush Patel and Raj Bhanushali.We made a speech improvement website called <a href="http://speechhacks.mybluemix.net">SpeechHacks</a>
            and fortunately won the Best Collaboration Hack using Moxtra SDK/API prize.
          </p>
          <hr />
          <h1>Hit Music Club</h1>
          <p>
            In my high school, Shanghai High School, I founded the Western Music Club with Kevin Peng and Mingyan Ma. We ran a <a href="http://page.renren.com/601623217">website</a> and a weekly school radio. We held 3 dance parties, 4 shows.
            We published a magazine. We worked as the DJs in a basketball league. We held a sales to raise funds for children in the remote mountainous areas. We were so honored to win the 4-star club title in the first year of our club.
          </p>
          <figure>
            <img className="fullimg" src="img/club.jpg" alt="club" />
            <figcaption>Kevin Peng and me on the Clubs' Day.</figcaption>
          </figure>
          <hr />
          <h1>Cameraman at SHSTV</h1>
          <p>
            I worked as a cameraman in the entertainment section. I sometimes took part in the script writing or even talked in front of the camera as a guest. I really enjoyed my time there.
          </p>
          <hr />
          <h1>Amateur dancer</h1>
          <p>
            I attended the dance competitions in my high school three years in a row and made it to the closing ceremony twice
          </p>
        </section>
      </div>
    );
    },
});

module.exports = About;
