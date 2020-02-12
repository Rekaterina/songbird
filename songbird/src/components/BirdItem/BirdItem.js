import React from 'react';

import './BirdItem.css';

function BirdItem(props) {
  function handleClick({ target }) {
    const { randomBirdIndex, birdsData, typeQuizIndex, isAnswerTrue } = props;
    const randomBirdName = birdsData[typeQuizIndex][randomBirdIndex].name;
    const chosenBirdName = target.tagName === 'LI' ? target.innerText : target.parentNode.innerText;
    const chosenBirdNameIndex =  birdsData[typeQuizIndex].map((item) => item.name).indexOf(chosenBirdName);
    if (target.innerText === randomBirdName || target.parentNode.innerText === randomBirdName) {
      target.tagName === 'LI' ? target.firstElementChild.classList.add('green') : target.classList.add('green');
      props.toggleFlagIsAnswerChosen();
      props.toggleFlagIsAnswerTrue();
      props.toggleFlagIsNextLevelActive();
      props.setChosenBirdIndex(chosenBirdNameIndex);
      props.countScore();
      if (!isAnswerTrue) {
        props.playCorrectSound();
      }
      props.stopAudio();
    } else {
      if (!isAnswerTrue) {
        target.tagName === 'LI' ? target.firstElementChild.classList.add('red') : target.classList.add('red');
        props.playWrongSound();
      }
      props.toggleFlagIsAnswerChosen();
      props.setChosenBirdIndex(chosenBirdNameIndex);
    }
  }
    return (
      <li className="bird-item" onClick={handleClick}>
        <span className="bird-item-indicator"></span>
        {props.value}
      </li>
    );
}

export default BirdItem;