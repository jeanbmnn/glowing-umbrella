import React, { Component } from 'react';
import './App.css';
import About from './About';
import Head from './Head';
import Body from './Body';
import Feet from './Feet';




class App extends Component {
  render() {
    return (
      <div className="App">
        
        <Body/>
        <Feet/>
      </div>
    );
  }
}

export default App;
