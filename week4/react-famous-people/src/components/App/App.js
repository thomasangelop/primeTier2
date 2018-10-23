import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header'
import FamousPeople from '../FamousPeople/FamousPeople'
import Instructions from '../Instructions/Instructions'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <FamousPeople />
        <Instructions />
      </div>
    );
  }
}

export default App;
