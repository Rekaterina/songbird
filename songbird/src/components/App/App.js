import React, {Component} from 'react';

import AppHeader from '../AppHeader/AppHeader';
import AppMain from '../AppMain/AppMain';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      typeQuizIndex: 0,
      randomBirdIndex: this.getRandomNumber(0, 5),
      isAnswerChosen: false,
      chosenBirdIndex: null,
      isAnswerTrue: false,
      isQuizOver: false,
      isNextLevelActive: false,
    };
  }

  getRandomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }

  toggleFlagIsAnswerChosen() {
    this.setState({
      isAnswerChosen: true
    });
  }

  toggleFlagIsAnswerTrue() {
    this.setState({
      isAnswerTrue: true
    });
  }

  setChosenBirdIndex(index) {
    this.setState({
      chosenBirdIndex: index
    });
  }

  toggleFlagIsNextLevelActive() {
    this.setState({
      isNextLevelActive: true
    });
  }

  toggleFlagIsQuizOver() {
    this.setState({
      isQuizOver: true
    });
  }

  countScore() {
    const birdItemIndicators = document.querySelectorAll('.bird-item-indicator');
    let wrongAnswersNumber = 0;
    birdItemIndicators.forEach(item => {
      if (item.classList.contains('red')) {
        wrongAnswersNumber = wrongAnswersNumber + 1;
      }
    });
    const roundScore = 5 - wrongAnswersNumber;
    this.setState({
      score: this.state.score + roundScore
    });
  }

  setStateNextRound() {
    this.setState({
      typeQuizIndex: this.state.typeQuizIndex + 1,
      randomBirdIndex: this.getRandomNumber(0, 5),
      isAnswerChosen: false,
      chosenBirdIndex: null,
      isAnswerTrue: false,
      isNextLevelActive: false,
    });
  }

  setInitialState() {
    this.setState({
      score: 0,
      typeQuizIndex: 0,
      randomBirdIndex: this.getRandomNumber(0, 5),
      isAnswerChosen: false,
      chosenBirdIndex: null,
      isAnswerTrue: false,
      isQuizOver: false,
      isNextLevelActive: false,
    });
  }

  removeIndicators() {
    const birdItemIndicators = document.querySelectorAll('.bird-item-indicator');
    birdItemIndicators.forEach((item) => item.classList.remove('red', 'green')); 
  }

  playWrongSound() {
    const wrongSound = document.querySelector('.wrong');
    wrongSound.play();
  }

  playCorrectSound() {
    const correctSound = document.querySelector('.correct');
    correctSound.play();
  }

  render() {
    return (
      <div className="app">
        <AppHeader score={this.state.score}
                   typeQuizIndex={this.state.typeQuizIndex} />
        <AppMain typeQuizIndex={this.state.typeQuizIndex} 
                 randomBirdIndex={this.state.randomBirdIndex}
                 chosenBirdIndex={this.state.chosenBirdIndex}
                 isAnswerChosen={this.state.isAnswerChosen}
                 isAnswerTrue={this.state.isAnswerTrue}
                 toggleFlagIsAnswerChosen={this.toggleFlagIsAnswerChosen.bind(this)}
                 toggleFlagIsAnswerTrue={this.toggleFlagIsAnswerTrue.bind(this)}
                 toggleFlagIsNextLevelActive={this.toggleFlagIsNextLevelActive.bind(this)}
                 setChosenBirdIndex={this.setChosenBirdIndex.bind(this)}
                 countScore={this.countScore.bind(this)}
                 setStateNextRound={this.setStateNextRound.bind(this)}
                 removeIndicators={this.removeIndicators.bind(this)}
                 toggleFlagIsQuizOver={this.toggleFlagIsQuizOver.bind(this)}
                 setInitialState={this.setInitialState.bind(this)}
                 playWrongSound={this.playWrongSound.bind(this)}
                 playCorrectSound={this.playCorrectSound.bind(this)}
                 isQuizOver={this.state.isQuizOver}
                 score={this.state.score}
                 isNextLevelActive={this.state.isNextLevelActive} />
      </div>
    );
  }
}

export default App;
