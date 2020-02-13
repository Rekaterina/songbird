import React from 'react';

import './StartButton.css';

function StartButton(props) {
  function handleClick() {
    props.setInitialState();
  }

  return (
    <button className="start-button" onClick={handleClick}>
      Попробовать еще раз!
    </button>
  );
}

export default StartButton;