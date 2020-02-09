import React from 'react';

import BirdItem from '../BirdItem/BirdItem';
import './BirdList.css';

class BirdList extends React.Component {

  renderBirdItem(i) {
    return <BirdItem value={i} />;
  }

  render() {
    return (
      <ul className="bird-list">
        {this.renderBirdItem('Разминка')}
        {this.renderBirdItem('Воробьиные')}
        {this.renderBirdItem('Лесные птицы')}
        {this.renderBirdItem('Певчие птицы')}
        {this.renderBirdItem('Хищные птицы')}
        {this.renderBirdItem('Морские птицы')}
      </ul>
    );
  }
}

export default BirdList;