import React, { PropTypes } from 'react';
let key = 0;

class Item extends React.Component {
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
  }
}

Item.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  year: PropTypes.string,
};

module.exports = Item;
