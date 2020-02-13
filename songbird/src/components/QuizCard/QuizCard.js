import React from 'react';

import './QuizCard.css';
import BirdImage from '../BirdImage/BirdImage';
import Audio from '../Audio/Audio';
import bird from '../../image/bird.jpg';

function QuizCard(props) {
  const className = 'audio';
  const { randomBirdIndex, birdsData, typeQuizIndex, isAnswerTrue } = props;
  return (
    <div className="quiz-card">
     {isAnswerTrue ? (
        <BirdImage birdImage={birdsData[typeQuizIndex][randomBirdIndex].image} />
      ) : (
        <BirdImage birdImage={bird} />
      )}
      <div className="quiz-card-audio-container">
        <span className="quiz-card-bird-name">{isAnswerTrue ? `${birdsData[typeQuizIndex][randomBirdIndex].name}` : '******'}</span> 
        <Audio className={className} 
               src={birdsData[typeQuizIndex][randomBirdIndex].audio} />  
      </div>
    </div>
  );
}

export default QuizCard;