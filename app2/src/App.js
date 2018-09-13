import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import SharedSecret from "@monorepo/shared";
import Badger from "@monorepo/thing";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">App 2</h1>
        </header>
        <p className="App-intro">
          {SharedSecret}
          {Badger}
        </p>
      </div>
    );
  }
}

export default App;
