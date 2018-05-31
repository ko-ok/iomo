import React, { Component } from 'react';
import logo from './logo.svg';
import iomo from './iomo.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <canvas id="canvas"></canvas>
        <div id="text">
          <img src={iomo} className="small-gear gear-yellow" alt="gear-2" />
        </div>

        <div id="apply">
          <a href="mailto:iomo@email.com?Subject=Hello">Apply</a>
        </div>
      </div>
    );
  }
}

export default App;
