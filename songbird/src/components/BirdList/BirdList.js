import React from 'react';

import BirdItem from '../BirdItem/BirdItem';
import './BirdList.css';

function BirdList(props) {
  const { birdsData, typeQuizIndex } = props;
  const listItems = birdsData[typeQuizIndex].map((item, index) =>
    <BirdItem key={index}
              value={item.name}
              randomBirdIndex={props.randomBirdIndex}
              chosenBirdIndex={props.chosenBirdIndex}
              typeQuizIndex={props.typeQuizIndex}
              birdsData={props.birdsData}
              isAnswerChosen={props.isAnswerChosen}
              isAnswerTrue={props.isAnswerTrue}
              toggleFlagIsAnswerChosen={props.toggleFlagIsAnswerChosen}
              toggleFlagIsAnswerTrue={props.toggleFlagIsAnswerTrue}
              toggleFlagIsNextLevelActive={props.toggleFlagIsNextLevelActive}
              setChosenBirdIndex={props.setChosenBirdIndex} />
  );
  return (
    <ul className="bird-list">
      {listItems}
    </ul>
  );
}

export default BirdList;
