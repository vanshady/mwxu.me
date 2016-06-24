const React = require('react');
const IndexText = require('./indextext.jsx');
const About = React.createClass({
  componentDidMount() {
    document.getElementById('homeTab').className = '';
    document.getElementById('aboutTab').className = 'active';
  },
  render() {
    return (
      <div>
        <IndexText />
        <section className="text">
          <p>
            Will be updated soon.
          </p>
        </section>
      </div>
    );
  },
});

module.exports = About;
