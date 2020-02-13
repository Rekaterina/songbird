import React from 'react';

import QuizTypeItem from '../QuizTypeItem/QuizTypeItem';
import './QuizTypeList.css';

function QuizTypeList(props) {
  const { quizTypeData, typeQuizIndex } = props;
  const listItems = quizTypeData.map((item, index) =>
    <QuizTypeItem key={index} value={item} active={index === typeQuizIndex ? true : false} />
  );
  return (
    <ul className="quiz-type-list">
      {listItems}
    </ul>
  );
}

export default QuizTypeList;