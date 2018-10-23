import React, { Component } from 'react';
import './App.css';

class App extends Component {

  // constructor(props) {
  //   // React is going to send us in props (or properties)
  //   //we're going to be a good child component and send it to our super parent
  //   super(props);

  //   //Set up a new property 'name' in this component
  //   this.state = {name: 'Thomas' }
  // }

  state = { 
    name: 'Thomas', 
    city: 'Minneapolis'
}

  //Method to handle the name input change
  handleChange = (event) => {
    console.log(event.target.value);
    //Update our compenent state
    this.setState( {name: event.target.value} );
  }

  handleCityChange = (event) => {
    this.setState( {city: event.target.value} );
  }

  handleStateChange = (event) => {
    this.setState( {state: event.target.value} );
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>React-Local-State</h1>
        </header>
        <section>
            <input onChange={ this.handleChange } placeholder="name"  />
            <input onChange={ this.handleCityChange } placeholder="city"  />
            <input onChange={ this.handleStateChange } placeholder="state"  />
            <p>Hello {this.state.name}, we're learning state.</p>
            <p>{this.state.name} lives in {this.state.city}, {this.state.state}.</p>
          </section>
      </div>
    );
  }
}

export default App;
