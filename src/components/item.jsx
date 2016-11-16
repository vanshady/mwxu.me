const React = require('react');
let key = 0;

const Item = React.createClass({
    render() {
        const items = this.props.items.map((item) => {
            key++;
            const route = `/projects/${this.props.year}-${item.label}`;
            return (
        <li key={key}>
          <a href={route}>
            <b className="label">{item.label}</b>
            <em className="detail">{`${item.month} ${this.props.year}`}</em>
          </a>
        </li>
      );
        });
        return (
      <div className="textspace">
        <aside>
          <h2>{this.props.year}</h2></aside>
        <div>
          <ul className="tablelist">
            {items}
          </ul>
        </div>
      </div>
    );
    },
});

module.exports = Item;
