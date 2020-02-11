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
    document.querySelector('.next-button').classList.add('next-button-active');
  }

  render() {
    return (
      <div className="app">
        <AppHeader score={this.state.score} />
        <AppMain typeQuizIndex={this.state.typeQuizIndex} 
                 randomBirdIndex={this.state.randomBirdIndex}
                 chosenBirdIndex={this.state.chosenBirdIndex}
                 isAnswerChosen={this.state.isAnswerChosen}
                 isAnswerTrue={this.state.isAnswerTrue}
                 toggleFlagIsAnswerChosen={this.toggleFlagIsAnswerChosen.bind(this)}
                 toggleFlagIsAnswerTrue={this.toggleFlagIsAnswerTrue.bind(this)}
                 toggleFlagIsNextLevelActive={this.toggleFlagIsNextLevelActive.bind(this)}
                 setChosenBirdIndex={this.setChosenBirdIndex.bind(this)}
                 isQuizOver={this.state.isQuizOver}
                 score={this.state.score} />
      </div>
    );
  }
}

export default App;
