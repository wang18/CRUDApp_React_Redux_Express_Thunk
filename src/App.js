import React, { Component } from 'react';
import './App.css';
import {Link, Route} from 'react-router-dom';

const ActiveLink =({label, to, activeOnlyWhenExact}) => (
    <Route path={to}
           exact={activeOnlyWhenExact}
           children={({match}) => (
                <Link className={match ? 'active item' : 'item'}
                      to={to}>{label}</Link>)}
    />)

class App extends Component {
  render() {
    return (
      <div className="ui container">
          <div className="ui three item menu">
              <ActiveLink activeOnlyWhenExact to="/" className="item" label="Home"/>
              <ActiveLink activeOnlyWhenExact to="/games" className="item" label="Game"/>
              <ActiveLink activeOnlyWhenExact to="/games/new" className="item" label="Add New Game"/>
          </div>
      </div>
    );
  }
}

export default App;
