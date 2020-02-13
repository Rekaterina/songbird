import React from 'react';

import './BirdImage.css';

function BirdImage(props) {
  const { birdImage } = props;
  return (
    <img src={birdImage} className="bird-image" alt="bird"/>
  );
}

export default BirdImage;