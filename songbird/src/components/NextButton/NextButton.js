import React from 'react';

import './NextButton.css';

function NextButton(props) {
  const { isNextLevelActive, typeQuizIndex } = props;
  function handleClick() {
    if (isNextLevelActive) {
      if (typeQuizIndex !== 5) {
        props.setStateNextRound();
        props.removeIndicators();
      } else {
        props.toggleFlagIsQuizOver();
      }
    }
  }

  if (isNextLevelActive) {
    return (
      <button className="next-button next-button-active" onClick={handleClick}>
        Следующий уровень
      </button>
    );
  } else {
      return (
        <button className="next-button" onClick={handleClick}>
          Следующий уровень
        </button>
      );
  }
}

export default NextButton;