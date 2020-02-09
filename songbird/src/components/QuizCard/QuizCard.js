import React from 'react';

import './QuizCard.css';
import BirdImage from '../BirdImage/BirdImage';
import Audio from '../Audio/Audio';

class QuizCard extends React.Component {

  render() {
    return (
      <div className="quiz-card">
        <BirdImage />
        <div className="quiz-card-audio-container">
          <span className="quiz-card-bird-name">*********</span> 
          <Audio />  
        </div>
      </div>
    );
  }
}

export default QuizCard;