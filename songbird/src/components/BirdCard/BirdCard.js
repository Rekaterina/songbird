import React from 'react';

import BirdImage from '../BirdImage/BirdImage';
import Audio from '../Audio/Audio';
import './BirdCard.css';

class BirdCard extends React.Component {
  render() {
    return (
      <div className="bird-card">
        <div className="bird-card-main-content">
          <BirdImage />
          <div className="bird-card-audio-container">
            <span className="bird-card-name">Синица</span>
            <span className="bird-card-latin-name">Синица hhhhh</span> 
            <Audio />  
          </div>
        </div>
        <p className="bird-card-text">
        Мелодичность голоса иволги сравнивают со звучанием флейты.
         Человеку сложно разглядеть иволгу, так как она обитает высоко на деревьях. Иволга не только очень красивая, но и  полезная птица.
         Она уничтожает ядовитых гусениц, которых не поедают другие птицы.
        </p>
      </div>
    );
  }
}

export default BirdCard;