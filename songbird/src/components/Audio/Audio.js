import React from 'react';

import './Audio.css';

class Audio extends React.Component {

  state = {
    
  }

  render() {
    return (
      <audio className="audio" src="https://www.xeno-canto.org/sounds/uploaded/BLMSIUFTFU/XC512582-190604_1087_Grus_tok.mp3" controls></audio>
    );
  }
}

export default Audio;