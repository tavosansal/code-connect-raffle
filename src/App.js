import React, { Component } from 'react';
import logo from './wordmark.png';
import './App.css';
import raffleOptions from './raffleOptions';
import Spinner from 'react-spinkit';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      players: 1,
      isPlaying: false,
      winner: null,
    };

    this.handleChange = this.handleChange.bind(this);
    this.playGame = this.playGame.bind(this);
    this.reset = this.reset.bind(this);
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
    this.setState({
      isPlaying: true,
    });
    if (this.state.players > raffleOptions.length) {
      alert(`Only ${raffleOptions.length} are available`);
    }

    setTimeout(() => {
      debugger;
      const optionsToUse = raffleOptions.slice(0, this.state.players);
      const winner =optionsToUse[Math.floor(Math.random()*optionsToUse.length)];

      this.setState({
        winner,
      });

      const dialog = document.getElementById('winner-dialog');
      dialog.showModal();

      this.setState({ isPlaying: false });
    }, 5000)
  }

  reset() {
    this.setState({
      players: 1,
      isPlaying: false,
      winner: null,
    });
    const dialog = document.getElementById('winner-dialog');
    dialog.close();
  }

  render() {
    const isPlaying = this.state.isPlaying;
    let isPlayingRender = null;
    if (isPlaying) {
      isPlayingRender = <Spinner name="double-bounce" className="App"/>;
    } else {
      isPlayingRender = <button disabled={!this.state.players} onClick={this.playGame}>LET'S GO!</button>;
    }

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

        {isPlayingRender}
        
        <dialog id="winner-dialog">  
          <h2>{this.state.winner}</h2>
          <p>YOU ARE THE WINNER!</p>
          <button onClick={this.reset}>Play Again</button>
        </dialog> 
      </div>
    );
  }
}

export default App;
