import React, { Component } from 'react';
import logo from './wordmark.png';
import './App.css';
import raffleOptions from './raffleOptions';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {players: 1};

    this.handleChange = this.handleChange.bind(this);
    this.playGame = this.playGame.bind(this);
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

  playGame() {
    if (this.state.players > raffleOptions.length) {
      alert(`Only ${raffleOptions.length} are available`);
    }

    const optionsToUse = raffleOptions.slice(0, this.state.players);

    const winner =optionsToUse[Math.floor(Math.random()*optionsToUse.length)];

    this.setState({
      winner,
    });

    const dialog = document.getElementById('winner-dialog');
    dialog.show();
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Code Connect Raffle</h1>
        </header>
        <h2>Are you ready to win stuff?</h2>
        <p className="App-intro">
          <label>
            How many players? &nbsp;
            <input type="number" name="players" value={this.state.players} onChange={this.handleChange} />
          </label>
        </p>

        <button disabled={!this.state.players} onClick={this.playGame}>LET'S GO!</button>
        
        <dialog id="winner-dialog">  
          <h2>{this.state.winner}</h2>
          <p>YOU ARE THE WINNER!</p>
          <button onClick>Play again</button>
        </dialog> 
      </div>
    );
  }
}

export default App;
