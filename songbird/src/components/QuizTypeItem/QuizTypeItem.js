import React from 'react';

import './QuizTypeItem.css';

function QuizTypeItem(props) {
  if (props.active) {
    return <li className="quiz-type-item quiz-active">
    {props.value}
  </li>;
  }
  return <li className="quiz-type-item">
    {props.value}
  </li>;
}

export default QuizTypeItem;