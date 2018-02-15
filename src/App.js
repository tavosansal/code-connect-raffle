import React, { Component } from 'react';
import logo from './wordmark.png';
import './App.css';
import raffleOptions from './raffleOptions';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {players: 1};

    this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let parsedValue = 0;
    if (event.target.value) {
      parsedValue = parseInt(event.target.value, 10);
    }

    this.setState({
      players: parsedValue,
    });
  }
  

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Code Connect Raffle</h1>
        </header>
        <h2>Are you ready to win stuff????</h2>
        <p className="App-intro">
          <label>
            How many players? 
            <input type="number" name="players" value={this.state.players} onChange={this.handleChange} />
          </label>
        </p>

        <button disabled={!this.state.players}>LET'S GO!</button>
        
      </div>
    );
  }
}

export default App;
