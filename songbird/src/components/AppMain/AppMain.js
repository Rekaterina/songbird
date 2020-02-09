import React from 'react';

import './AppMain.css';
import QuizCard from '../QuizCard/QuizCard';
import BirdList from '../BirdList/BirdList';
import BirdCard from '../BirdCard/BirdCard';
import NextButton from '../NextButton/NextButton';
import ResultCard from '../ResultCard/ResultCard';

class AppMain extends React.Component {
  render() {
    return (
      <div className="app-main">
        <QuizCard />
        <div className="quiz-description">
          <BirdList />
          <BirdCard />
        </div>
        <NextButton />
        <ResultCard />
      </div>
    );
  }
}

export default AppMain;