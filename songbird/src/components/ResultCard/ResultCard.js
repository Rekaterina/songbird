import React from 'react';

import StartButton from '../StartButton/StartButton';
import './ResultCard.css';

class ResultCard extends React.Component {
  render() {
    return (
      <div className="result-card">
        <p className="result-card-congratulation">Поздравляем!</p>
        <p className="result-card-text">Вы прошли викторину и набрали 13 из 30 возможных баллов</p>
        <StartButton />
      </div>
      
    );
  }
}

export default ResultCard;