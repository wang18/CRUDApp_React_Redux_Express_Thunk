import React, { Component } from 'react';
import './App.css';
import {Link} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="ui container">
          <div className="ui three item menu">
              <Link to="/" className="item">Home</Link>
              <Link to="/games" className="item">Game</Link>
              <Link to="/games/new" className="item">Add New Game</Link>

          </div>
      </div>
    );
  }
}

export default App;
