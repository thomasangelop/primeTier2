import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import Instructions from '../Instructions/Instructions';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Instructions />
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
        </header> */}
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        
      </div>
    );
  }
}

export default App;
