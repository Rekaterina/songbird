import React from 'react';

import BirdImage from '../BirdImage/BirdImage';
import Audio from '../Audio/Audio';
import './BirdCard.css';

function BirdCard(props) {
  const className = 'audio';
  const { birdsData, chosenBirdIndex, typeQuizIndex } = props;
  if (props.isAnswerChosen) {
    return (
      <div className="bird-card">
        <div className="bird-card-main-content">
          <BirdImage birdImage={birdsData[typeQuizIndex][chosenBirdIndex].image} />
          <div className="bird-card-audio-container">
            <span className="bird-card-name">{birdsData[typeQuizIndex][chosenBirdIndex].name}</span>
            <span className="bird-card-latin-name">{birdsData[typeQuizIndex][chosenBirdIndex].species}</span> 
            <Audio className={className}  
                   src={birdsData[typeQuizIndex][chosenBirdIndex].audio} />  
          </div>
        </div>
        <p className="bird-card-text">
          {birdsData[typeQuizIndex][chosenBirdIndex].description}  
        </p>
      </div>
    );
  } else {
    return (
      <div className="bird-card">
        <p className="bird-card-text">
          Послушайте плеер.
          Выберите птицу из списка
        </p>
      </div>
    )
  }
}

export default BirdCard;