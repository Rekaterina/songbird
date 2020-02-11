import React from 'react';

import Logo from '../Logo/Logo';
import Score from '../Score/Score';
import QuizTypeList from '../QuizTypeList/QuizTypeList';
import quizTypeData from '../../quizTypeData';

import './AppHeader.css';

function AppHeader(props) {
  return (
    <div className="app-header">
      <div className="top-bar">
        <Logo />
        <Score score={props.score}/>
      </div>
      <QuizTypeList quizTypeData={quizTypeData}/>
   </div>
  );
};

export default AppHeader;