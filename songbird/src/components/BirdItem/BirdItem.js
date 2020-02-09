import React from 'react';

import './BirdItem.css';

class BirdItem extends React.Component {
  render() {
    return (
      <li className="bird-item">
        <span className="bird-item-indicator"></span>
        {this.props.value}
      </li>
    );
  }
}

export default BirdItem;