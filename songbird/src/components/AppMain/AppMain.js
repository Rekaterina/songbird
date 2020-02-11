import React from 'react';

import './AppMain.css';
import QuizCard from '../QuizCard/QuizCard';
import BirdList from '../BirdList/BirdList';
import BirdCard from '../BirdCard/BirdCard';
import NextButton from '../NextButton/NextButton';
import ResultCard from '../ResultCard/ResultCard';
import birdsData from '../../birdsData';

function AppMain(props) {
  if (props.isQuizOver) {
    return <ResultCard score={props.score} />
  } else {
    return (
      <div className="app-main">
        <QuizCard birdsData={birdsData}
                  typeQuizIndex={props.typeQuizIndex} 
                  randomBirdIndex={props.randomBirdIndex}
                  isAnswerTrue={props.isAnswerTrue} />
        <div className="quiz-description">
          <BirdList birdsData={birdsData} 
                    typeQuizIndex={props.typeQuizIndex}
                    chosenBirdIndex={props.chosenBirdIndex}
                    randomBirdIndex={props.randomBirdIndex}
                    isAnswerChosen={props.isAnswerChosen}
                    isAnswerTrue={props.isAnswerTrue}
                    toggleFlagIsAnswerChosen={props.toggleFlagIsAnswerChosen}
                    toggleFlagIsAnswerTrue={props.toggleFlagIsAnswerTrue}
                    toggleFlagIsNextLevelActive={props.toggleFlagIsNextLevelActive}
                    setChosenBirdIndex={props.setChosenBirdIndex} />
          <BirdCard birdsData={birdsData}
                    typeQuizIndex={props.typeQuizIndex} 
                    chosenBirdIndex={props.chosenBirdIndex}
                    isAnswerChosen={props.isAnswerChosen}/>
        </div>
        <NextButton />
      </div>
    );
  }
}

export default AppMain;