import React from 'react';

import './Audio.css';

function Audio(props) {
  return (
    <audio className={props.className} src={props.src} controls></audio>
  );
}

export default Audio;