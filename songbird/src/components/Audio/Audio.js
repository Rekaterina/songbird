import React from 'react';

import './Audio.css';

function Audio(props) {
  const { birdsData, typeQuizIndex, birdIndex } = props;
  return (
    <audio className="audio" src={birdsData[typeQuizIndex][birdIndex].audio} controls></audio>
  );
}

export default Audio;