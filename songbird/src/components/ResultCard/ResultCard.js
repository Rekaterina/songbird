import React from 'react';

import StartButton from '../StartButton/StartButton';
import './ResultCard.css';
import winner from '../../image/winner.png';

function ResultCard(props) {
  if (props.score === 30) {
    return (
      <div className="result-card"> 
        <img src={winner} className="winner-image" alt="winner"/>
        <p className="result-card-congratulation">Поздравляем!</p>
        <p className="result-card-text">Вы прошли викторину и набрали {props.score} из 30 возможных баллов</p>
        <StartButton setInitialState={props.setInitialState} />
      </div>
    );
  }
    return (
      <div className="result-card"> 
        <p className="result-card-congratulation">Поздравляем!</p>
        <p className="result-card-text">Вы прошли викторину и набрали {props.score} из 30 возможных баллов</p>
        <StartButton setInitialState={props.setInitialState} />
      </div>
      
    );
}

export default ResultCard;