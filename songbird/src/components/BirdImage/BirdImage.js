import React from 'react';

import './BirdImage.css';
import bird from '../../image/bird.jpg';

const BirdImage = () => {
  return (
    <img src={bird} className="bird-image" alt="bird"/>
  );
}

export default BirdImage;