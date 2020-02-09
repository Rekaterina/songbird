import React from 'react';

import Logo from '../Logo/Logo';
import Score from '../Score/Score';
import QuizTypeList from '../QuizTypeList/QuizTypeList';
import quizTypeData from '../../quizTypeData';

import './AppHeader.css';

const AppHeader = () => {
  return (
    <div className="app-header">
      <div className="top-bar">
        <Logo />
        <Score />
      </div>
      <QuizTypeList quizTypeData={quizTypeData}/>
   </div>
  );
};

export default AppHeader;