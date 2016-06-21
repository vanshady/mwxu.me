const React = require('react');

const About = React.createClass({
  componentDidMount() {
    document.getElementById('homeTab').className = '';
    document.getElementById('aboutTab').className = 'active';
  },
  render() {
    return (
      <div>
        <article>
          <h1>{name}</h1>
          <div className="body">
          </div>
        </article>
      </div>
    );
  },
});

module.exports = About;
