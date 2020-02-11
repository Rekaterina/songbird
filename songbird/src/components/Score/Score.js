import React from 'react';
import './Score.css';

function Score (props) { 
  return (
    <div className="score">Счёт: {props.score}</div>
  );
}

export default Score;
