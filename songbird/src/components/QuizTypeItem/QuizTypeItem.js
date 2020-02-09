import React from 'react';

import './QuizTypeItem.css';

function QuizTypeItem(props) {
  return <li className="quiz-type-item">
    {props.value}
  </li>;
}

export default QuizTypeItem;