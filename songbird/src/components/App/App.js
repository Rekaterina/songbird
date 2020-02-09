import React, {Component} from 'react';

import AppHeader from '../AppHeader/AppHeader';
import AppMain from '../AppMain/AppMain';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <AppHeader />
        <AppMain />
      </div>
    );
  }
}

export default App;
