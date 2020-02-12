import React from 'react';

import './AppMain.css';
import QuizCard from '../QuizCard/QuizCard';
import BirdList from '../BirdList/BirdList';
import BirdCard from '../BirdCard/BirdCard';
import NextButton from '../NextButton/NextButton';
import ResultCard from '../ResultCard/ResultCard';
import Audio from '../Audio/Audio';
import birdsData from '../../birdsData';
import wrong from '../../audio/wrong.mp3';
import correct from '../../audio/correct.mp3';

function AppMain(props) {
  const classNameWrong = 'audio wrong';
  const classNameCorrect = 'audio correct';
  if (props.isQuizOver) {
    return <ResultCard score={props.score}
                       setInitialState={props.setInitialState} />
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
                    setChosenBirdIndex={props.setChosenBirdIndex}
                    countScore={props.countScore}
                    playWrongSound={props.playWrongSound}
                    playCorrectSound={props.playCorrectSound} />
          <BirdCard birdsData={birdsData}
                    typeQuizIndex={props.typeQuizIndex} 
                    chosenBirdIndex={props.chosenBirdIndex}
                    isAnswerChosen={props.isAnswerChosen}/>
        </div>
          <NextButton isNextLevelActive={props.isNextLevelActive}
                      typeQuizIndex={props.typeQuizIndex}
                      setStateNextRound={props.setStateNextRound}
                      removeIndicators={props.removeIndicators}
                      toggleFlagIsQuizOver={props.toggleFlagIsQuizOver} />
          <Audio className={classNameWrong} 
                 src={wrong} />
          <Audio className={classNameCorrect} 
                 src={correct} />
      </div>
    );
  }
}

export default AppMain;