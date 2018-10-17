import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar.js'

class App extends Component {
  render() {
    return (
      <div className="App">

          <Navbar/>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
      </div>
    );
  }
}

export default App;
