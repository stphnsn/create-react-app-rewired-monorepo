import React, { Component } from 'react';
import './App.css';

import SharedSecret from "@monorepo/shared";
import { Header } from "@monorepo/ui-kit";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="App 1"/>
        <p className="App-intro">
          {SharedSecret}
        </p>
      </div>
    );
  }
}

export default App;
