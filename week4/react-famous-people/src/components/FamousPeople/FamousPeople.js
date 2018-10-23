import React, { Component } from 'react';

class FamousPeople extends Component {
    state = {
        name: '',
        role: '',
    }

    handleChange = (event) => {
        console.log(event.target.value);
        this.setState({name: event.target.value})
    }

    handleRoleChange = (event) => {
        console.log(event.target.value);
        this.setState({role: event.target.value})
    }

  render() {
    return (
        <div>
            <h3>Input Famous Poeple Here:</h3>
            <input onChange={this.handleChange} placeholder="name" />
            <input onChange={this.handleRoleChange} placeholder="role" />
            <ul>
                <li>Name: Felicia Day. Role: famous for The Guild.</li>
                <li>Name: {this.state.name} Role: {this.state.role}</li>
            </ul>
        </div>
    );
  }
}

export default FamousPeople;